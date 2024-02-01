var Games = {

    Information1 : [
        'You can checkout laptops from Circulation!',
        'You can reserve study rooms by visiting the Polk Library website or going to Circulation Desk!',
        'You can view streaming videos through the Polk Library website!',
        'We can get you any book from any UW campus!  Just ask us how!',
    ],
    
    Information2 : [
        'You can chat with a librarian 24/7 through the Polk Library website!',
        'You can request Polk Library to buy new books or movies from the Polk Library website or just by talking to a librarian!',
        'You can schedule an appointment with a librarian to help you with your papers and research!',
    ],
    
    Information3 : [
        'On this kiosk, you can see the hours the library is open!',
        'On this kiosk, you can see which study rooms are available right now in the library!',
    ],
    
    Construct : function() {
    },

    Initializer : function() {
        Games.Frogger();
        Games.RandomInfo();
    },

    Uninitializer : function() {
        $('#games iframe.frogger').attr('src','empty.html');
    },
    
    Frogger : function(){
        $('#games iframe.frogger').attr('src','frogger.html');
    },
    
    RandomInfo : function() {
        var i = Math.floor(Math.random() * (Games.Information1.length)) + 0;
        var j = Math.floor(Math.random() * (Games.Information2.length)) + 0;
        var k = Math.floor(Math.random() * (Games.Information3.length)) + 0;
        $('#games .information').html('<div> Did you know?</div>' + Games.Information1[i] + '<br /><br />' + Games.Information2[j] + '<br /><br />' + Games.Information3[k]);
    },
    
    
}

$(document).ready(function(){
    Games.Construct();
});

window.FroggerHighScore = 110;