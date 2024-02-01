var Shuttle = {
    
    Thread : null,
    
    
    // 60 = 1 minute
    // 120 = 2 minute
    // 180 = 3 minute
    // 0, 4 is the minute it starts
    Highlight : {
        '3:30' : '.lincoln .h0',
        '23:30' : '.lincoln .h20',
        '43:30' : '.lincoln .h40',
        
        '4:30' : '.albee .h0',
        '24:30' : '.albee .h20',
        '44:30' : '.albee .h40',
        
        '5:30' : '.fredric .h0',
        '25:30' : '.fredric .h20',
        '45:30' : '.fredric .h40',
        
        '7:30' : '.lot35 .h0',
        '27:30' : '.lot35 .h20',
        '47:30' : '.lot35 .h40',
        
        '8:30' : '.woodland .h0',
        '28:30' : '.woodland .h20',
        '48:30' : '.woodland .h40',
        
        '9:15' : '.sage .h0',
        '29:15' : '.sage .h20',
        '49:15' : '.sage .h40',
        
        '10:0' : '.kolf .h0',
        '30:0' : '.kolf .h20',
        '50:0' : '.kolf .h40',
        
        '11:0' : '.gcc .h0',
        '31:0' : '.gcc .h20',
        '51:0' : '.gcc .h40',
        
        '11:45' : '.pearl .h0',
        '31:45' : '.pearl .h20',
        '51:45' : '.pearl .h40',
        
        '12:45' : '.alumni .h0',
        '32:45' : '.alumni .h20',
        '52:45' : '.alumni .h40',
        
        '14:15' : '.services .h0',
        '34:15' : '.services .h20',
        '54:15' : '.services .h40',
        
    },
    
    
    Route : {
        
        '0:0': { // corner 
            'transform': 'translate3d(1234px, 73px, 0)',
            'transition': 'transform 180s linear',
        },
        
        '3:30': { // lincoln
            'transform': 'translate3d(1123px, 119px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '4:30': { // albee
            'transform': 'translate3d(770px, 230px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '5:30': { // theater
            'transform': 'translate3d(346px, 258px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '6:30': { // corner
            'transform': 'translate3d(20px, 258px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '7:0' : { // corner
            'transform': 'translate3d(20px, 376px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '7:30': { // 35a
            'transform': 'translate3d(99px, 379px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '8:30': { // woodland
            'transform': 'translate3d(363px, 377px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '9:15': { // sage
            'transform': 'translate3d(635px, 372px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '10:0': { // kolf
            'transform': 'translate3d(884px, 322px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '10:45': { // corner
            'transform': 'translate3d(1080px, 241px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '11:0': { // parking ramp
            'transform': 'translate3d(1109px, 308px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '11:45': { // pearl
            'transform': 'translate3d(1154px, 410px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '12:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '12:45': { // alumni center
            'transform': 'translate3d(1289px, 469px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '13:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '13:45': { // corner
            'transform': 'translate3d(1346px, 338px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '14:15': { // start
            'transform': 'translate3d(1403px, 537px, 0)',
            'transition': 'transform 330s linear',
        },
        
        
        // SECOND TRIP
        
        '20:0': { // corner 
            'transform': 'translate3d(1234px, 73px, 0)',
            'transition': 'transform 180s linear',
        },
        
        '23:30': { // lincoln
            'transform': 'translate3d(1123px, 119px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '24:30': { // albee
            'transform': 'translate3d(770px, 230px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '25:30': { // theater
            'transform': 'translate3d(346px, 258px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '26:30': { // corner
            'transform': 'translate3d(20px, 258px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '27:0' : { // corner
            'transform': 'translate3d(20px, 376px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '27:30': { // 35a
            'transform': 'translate3d(99px, 379px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '28:30': { // woodland
            'transform': 'translate3d(363px, 377px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '29:15': { // sage
            'transform': 'translate3d(635px, 372px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '30:0': { // kolf
            'transform': 'translate3d(884px, 322px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '30:45': { // corner
            'transform': 'translate3d(1080px, 241px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '31:0': { // parking ramp
            'transform': 'translate3d(1109px, 308px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '31:45': { // pearl
            'transform': 'translate3d(1154px, 410px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '32:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '32:45': { // alumni center
            'transform': 'translate3d(1289px, 469px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '33:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '33:45': { // corner
            'transform': 'translate3d(1346px, 338px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '34:15': { // start
            'transform': 'translate3d(1403px, 537px, 0)',
            'transition': 'transform 330s linear',
        },
        
        
        
        // THIRD TRIP
        
        '40:0': { // corner 
            'transform': 'translate3d(1234px, 73px, 0)',
            'transition': 'transform 180s linear',
        },
        
        '43:30': { // lincoln
            'transform': 'translate3d(1123px, 119px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '44:30': { // albee
            'transform': 'translate3d(770px, 230px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '45:30': { // theater
            'transform': 'translate3d(346px, 258px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '46:30': { // corner
            'transform': 'translate3d(20px, 258px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '47:0' : { // corner
            'transform': 'translate3d(20px, 376px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '47:30': { // 35a
            'transform': 'translate3d(99px, 379px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '48:30': { // woodland
            'transform': 'translate3d(363px, 377px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '49:15': { // sage
            'transform': 'translate3d(635px, 372px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '50:0': { // kolf
            'transform': 'translate3d(884px, 322px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '50:45': { // corner
            'transform': 'translate3d(1080px, 241px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '51:0': { // parking ramp
            'transform': 'translate3d(1109px, 308px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '51:45': { // pearl
            'transform': 'translate3d(1154px, 410px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '52:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '52:45': { // alumni center
            'transform': 'translate3d(1289px, 469px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '53:30': { // corner
            'transform': 'translate3d(1227px, 385px, 0)',
            'transition': 'transform 15s linear',
        },
        
        '53:45': { // corner
            'transform': 'translate3d(1346px, 338px, 0)',
            'transition': 'transform 30s linear',
        },
        
        '54:15': { // start
            'transform': 'translate3d(1403px, 537px, 0)',
            'transition': 'transform 330s linear',
        },
        
        
    },
    
    
    Construct : function(){
    
        Shuttle.Thread = setInterval(function(){
            var Minute = new Date().getMinutes();
            var Second = new Date().getSeconds();
            var route = Shuttle.Route[Minute + ':' + Second];
            if (typeof route !== 'undefined') {
                
                $('#shuttle .schedule .tdata').removeClass('active');
                $('#shuttle .schedule').find(Shuttle.Highlight[Minute + ':' + Second]).addClass('active');
                
                $('#shuttle .bus').css(route);
            }
        }, 1000);
    
    },
    
    Initializer : function() {
        
    },
    
    
    ShowClicks : function() {
    
        $('#shuttle').click(function(e){
            var image_offset = 25;
            var offset = $(this).offset();
            console.log("--------------------");
            console.log("Left: " + (e.pageX - offset.left - image_offset + "px"));
            console.log("Top: " + (e.pageY - offset.top - image_offset + "px"));
            console.log((e.pageX - offset.left- image_offset) + ',' + (e.pageY - offset.top- image_offset));
        });
    
    },
}


$(document).ready(function(){
    Shuttle.Construct();
    Shuttle.ShowClicks();
});