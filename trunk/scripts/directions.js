var Directions = {

    Construct : function(){ 
        $('.btn[data-mapping]').click(function(){
            Directions.Reset();
            var mapping = $(this).attr('data-mapping');
            Mappings[mapping].call(); // reflection
        });
    },
    
    Initializer : function() {
        Directions.Reset();
    },
    
    Reset : function() {
        $('#directions .tracks').empty();
        $('#directions img.map').hide();
        $('#directions .btn, #directions .separate').show();
    },
    
    ShowMap : function(name) {
        $('#directions .btn, #directions .separate').hide();
        $('#directions img.map[data-map="' + name + '"]').show();
    },
    
    
    Information : function(x, y, info) {
        var id = "line-" + Math.floor((Math.random() * 1000000) + 1);
        var div = $('<div>').attr('id',id).addClass('information').html(info);
        $(div).css({
                'left' : x + 'px',
                'top' : y + 'px'
            });
        
        $('#directions .tracks').append(div);
    },
    
    LineStart : function(x, y, callback) {
        var id = "line-" + Math.floor((Math.random() * 1000000) + 1);
        var div = $('<div>').attr('id',id).addClass('linestart');
        
        if (callback != null)
            $(div).one("transitionend", callback);
        $('#directions .tracks').append(div);
        
        setTimeout(function(){
            $(div).css({
                'left' : x + 'px',
                'top' : y + 'px',
                'opacity' : '1',
                'height': '25px',
                'margin': '-12px 0 0 -12px',
                'width': '25px',
                'border-width': '3px',
                'transition' : 'width 1s linear, height 1s linear, margin 1s linear, border-width 1s linear',
            });
        },100);
    },
    
    Line : function(x, y, distance, direction, speed, callback) {
        var id = "line-" + Math.floor((Math.random() * 1000000) + 1);
        var div = $('<div>').attr('id',id).addClass(direction).addClass('line');
        
        var scale = 'scaleY(';
        if (direction == 'right' || direction == 'left')
            scale = 'scaleX(';
        
        if (callback != null)
            $(div).one("transitionend", callback);
        
        $('#directions .tracks').append(div);
        setTimeout(function(){
            $(div).css({
                'left' : x + 'px',
                'top' : y + 'px',
                'opacity' : '1',
                'transform' : scale + distance + ')',
                'transition' : 'transform ' + speed + ' linear',
            });
        },100);
    },
    
    LineEnd : function(x, y){
        var div = $('<div>').addClass('lineend').css({
                'left' : x + 'px',
                'top' : y + 'px'
            }).html('&#9733;');
        $('#directions .tracks').append(div);
    },
    
    ShowClicks : function(){
    
        $('#directions').click(function(e){
            var offset = $(this).offset();
            console.log("--------------------");
            console.log("Left: " + (e.pageX - offset.left));
            console.log("Top: " + (e.pageY - offset.top));
            console.log((e.pageX - offset.left) + ',' + (e.pageY - offset.top));
        });
    
    },
}


$(document).ready(function() {
    Directions.Construct();
});


// Add new direction logic here.  Match naming to data-find
var Mappings = {
    
    Basement : function() {
        Directions.ShowMap('BasementAll');    
    },
    FirstFloor : function() {
        Directions.ShowMap('FirstFloorAll');    
    },
    SecondFloor : function() {
        Directions.ShowMap('SecondFloorAll');    
    },
    ThirdFloor : function() {
        Directions.ShowMap('ThirdFloorAll');    
    },
    
    Archives : function() {
        Directions.ShowMap('ThirdFloor');        
        Directions.ShowMap('FirstFloor'); 
        Directions.LineStart(730, 850, function(){
            Directions.Line(730, 835, 9.0, 'up', '1s', function(){
                Directions.Line(730, 794, 30.0, 'right', '2s', function(){
                    Directions.Line(876, 794, 8.0, 'down', '1s', function(){
                        Directions.Information(885, 830, 'Go up the stairs to the 3rd floor.');
                        Directions.Line(876, 830, 11.0, 'left', '1s', function(){
                            Directions.Information(818, 350, 'At the top of the stairs go through the doors.');
                            Directions.Line(818, 404, 15.0, 'right', '2s', function(){
                                 Directions.LineEnd(890, 400);  
                            });
                        });
                    });
                });
            }); 
        });                  
    },
        
        
    AdminOffice : function() {
        Directions.ShowMap('SecondFloor');        
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 850, function(){   
            Directions.Line(730, 835, 6.0, 'up', '1s', function(){
                Directions.Line(730, 810, 26.0, 'left', '2s', function(){
                    Directions.Line(602, 810, 16.0, 'up', '1.5s', function(){
                        Directions.Information(620,723, "Go through the door and up the stairs to the second floor.");
                        Directions.Line(602, 735, 4.0, 'left', '500ms', function(){
                            Directions.Line(586, 740, 5.0, 'left', '500ms', function(){
                                Directions.Information(634,253, "Exit the stairs and go right.");
                                Directions.Line(566, 277, 5.0, 'right', '500ms', function(){
                                    Directions.Line(587, 272, 7.0, 'right', '500ms', function(){
                                        Directions.Line(619, 272, 13.0, 'down', '1.5s', function(){
                                            Directions.LineEnd(594,336);  
                                        }); 
                                        
                                    }); 
                                    
                                }); 
                                
                            }); 
                        });
                    });
                });
            });
        });
    },
    
    Circulation : function() {   
        Directions.ShowMap('FirstFloor');      
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 5.0, 'up', '750ms', function(){
                Directions.Information(690, 290, "Go left in the lobby.");
                Directions.Line(730, 344, 16.5, 'left', '2s', function(){
                    Directions.LineEnd(627, 344);                
                });
            });
        });
       
    },
    
        
    EMC : function() {
        Directions.ShowMap('FirstFloor');       
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 5.0, 'up', '750ms', function(){
                Directions.Information(690, 290, "Go left in the lobby.");
                Directions.Line(730, 344, 26.0, 'left', '2s', function(){
                    Directions.Line(602, 344, 26.0, 'up', '2s', function(){
                        Directions.Line(602, 219, 30.0, 'left', '1.5s', function(){
                            Directions.LineEnd(430, 218);   
                        });
                    });
                });
            });
        });
       
    },
    
    
    Leisure : function() {
        Directions.ShowMap('SecondFloor');        
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 850, function(){   
            Directions.Line(730, 835, 6.0, 'up', '1s', function(){
                Directions.Line(730, 810, 26.0, 'left', '2s', function(){
                    Directions.Line(602, 810, 16.0, 'up', '1.5s', function(){
                        Directions.Information(620,723, "Go through the door and up the stairs to the second floor.");
                        Directions.Line(602, 735, 4.0, 'left', '500ms', function(){
                            Directions.Line(586, 740, 5.0, 'left', '500ms', function(){
                                Directions.Information(634,253, "Exit the stairs and go right.");
                                Directions.Line(566, 277, 5.0, 'right', '500ms', function(){
                                    Directions.Line(587, 272, 7.0, 'right', '500ms', function(){
                                        Directions.Line(619, 272, 13.0, 'down', '1.5s', function(){
                                            Directions.Line(619, 334, 30.0, 'left', '2s', function(){
                                                 Directions.LineEnd(454, 346);  
                                            }); 
                                        }); 
                                    }); 
                                }); 
                            }); 
                        });
                    });
                });
            });
        });
    },
    
    
    Polk019 : function() {
        Directions.ShowMap('Basement');      
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 1.5, 'up', '250ms', function(){
                Directions.Information(696, 313, 'Go down stairs.');
                Directions.Line(730, 361, 5.0, 'left', '1s', function(){
                    Directions.Line(709, 841, 44.0, 'right', '3s', function(){
                        Directions.Line(925, 841, 41.0, 'up', '3s', function(){
                            Directions.Information(928, 570, "Down this back hallway is Polk 019 - 023.");
                            Directions.LineEnd(918, 626);                
                        }); 
                    }); 
                }); 
            }); 
        });  
    },
    
    
    Polk101 : function() {
        Directions.ShowMap('FirstFloor');        
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 8.0, 'up', '1s', function(){
                Directions.Information(690, 280, "Go right in the lobby.");
                Directions.Line(730, 330, 30.0, 'right', '2s', function(){
                    Directions.LineEnd(880, 330);                
                });
            });
        });
       
    },
    
    
    
    Polk116a : function() {   
        Directions.ShowMap('FirstFloor');        
        Directions.LineStart(730, 380, function(){    
            Directions.Line(730, 365, 5.0, 'up', '750ms', function(){
                Directions.Line(730, 344, 23, 'left', '2s', function(){
                    Directions.Line(618, 344, 7.0, 'down', '750ms', function(){
                        Directions.Line(618, 375, 46.0, 'left', '3s', function(){
                            Directions.Line(390, 375, 12.5, 'up', '1s', function(){                            
                                Directions.LineEnd(380, 305);                
                            });
                        });
                    });         
                });
            });
        });
       
    },
    
            
    Polk116b : function() {
        Directions.ShowMap('FirstFloor');       
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 5.0, 'up', '750ms', function(){
                Directions.Information(690, 290, "Go left in the lobby and past circulation.");
                Directions.Line(730, 344, 26.0, 'left', '2s', function(){
                    Directions.Line(602, 344, 26.0, 'up', '2s', function(){
                        Directions.Line(602, 219, 57.5, 'left', '3s', function(){
                            Directions.LineEnd(292, 218);   
                        });
                    });
                });
            });
        });
       
    },
    
            
    Polk201f : function() {
        Directions.ShowMap('FirstFloor');       
        Directions.ShowMap('SecondFloor');       
        Directions.LineStart(730, 850, function(){
            Directions.Line(730, 835, 9.0, 'up', '1s', function(){
                Directions.Line(730, 794, 30.0, 'right', '2s', function(){
                    Directions.Line(876, 794, 8.0, 'down', '1s', function(){
                        Directions.Information(885, 830, 'Go up the stairs to the 2nd floor.');
                        Directions.Line(876, 830, 11.0, 'left', '1s', function(){
                            Directions.Information(797, 350, 'Walk to the back wall past all the bookshelves.');
                            Directions.Line(818, 404, 75.0, 'right', '4s', function(){
                                Directions.Line(1193, 404, 34.0, 'up', '2s', function(){
                                    Directions.LineEnd(1183, 227);                
                                });
                                
                            });
                        });
                    });
                });
            }); 
        });   
    },
    
        
    Polk202 : function() {
        Directions.ShowMap('SecondFloor');        
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 850, function(){   
            Directions.Line(730, 835, 6.0, 'up', '1s', function(){
                Directions.Line(730, 810, 26.0, 'left', '2s', function(){
                    Directions.Line(602, 810, 16.0, 'up', '1.5s', function(){
                        Directions.Information(620,723, "Go through the door and up the stairs to the second floor.");
                        Directions.Line(602, 735, 4.0, 'left', '500ms', function(){
                            Directions.Line(586, 740, 5.0, 'left', '500ms', function(){
                                Directions.Information(634,253, "Exit the stairs and go right.");
                                Directions.Line(566, 277, 5.0, 'right', '500ms', function(){
                                    Directions.Line(587, 272, 7.0, 'right', '500ms', function(){
                                        Directions.Line(619, 272, 9.0, 'down', '1s', function(){
                                            Directions.Line(619, 313, 3.0, 'right', '500ms', function(){
                                                Directions.LineEnd(634, 314);  
                                            }); 
                                        }); 
                                    }); 
                                }); 
                            }); 
                        });
                    });
                });
            });
        });
    },
    
    
    STC : function() {   
        Directions.ShowMap('Basement');      
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 1.5, 'up', '250ms', function(){
                Directions.Information(696, 313, 'Go down stairs.');
                Directions.Line(730, 361, 5.0, 'left', '1s', function(){
                    Directions.Line(709, 841, 61.0, 'right', '4s', function(){
                        Directions.LineEnd(1015, 831);        
                    }); 
                }); 
            }); 
        });   
    },
    
    
    TestingServices : function() {   
        Directions.ShowMap('Basement');      
        Directions.ShowMap('FirstFloor');     
        Directions.LineStart(730, 380, function(){     
            Directions.Line(730, 365, 1.5, 'up', '250ms', function(){
                Directions.Information(696, 313, 'Go down stairs.');
                Directions.Line(730, 361, 5.0, 'left', '1s', function(){
                    Directions.Line(709, 841, 40.0, 'right', '3s', function(){
                        Directions.LineEnd(911, 840);        
                    }); 
                }); 
            }); 
        });   
    },
    
    
}



