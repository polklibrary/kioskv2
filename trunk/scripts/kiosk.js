var Kiosk = {
    
    AdvertisementShowSeconds : 20, //20
    AdvertisementThread : null,
    AdvertisementIndex : 0,
    AdvertisementActive : [],
    
    BackgroundIndex : 0,
    BACKGROUND_MAX: 3,

    TabShowSeconds : 60, //60
    TabWalkThread : null,

    Construct : function(){
        //Kiosk.PinchDisable();
        Kiosk.LoadAdsList();
        Kiosk.Background();
        
        $('.button[data-kiosk]').click(function(){
            var id = $(this).attr('data-kiosk');
            
            var uninitializer = $('.button.selected').attr('data-uninitializer');
            if (uninitializer != null && uninitializer != '')
                window[uninitializer].Uninitializer.call();
            
            var initializer = $(this).attr('data-initializer');
            if (initializer != null && initializer != '')
                window[initializer].Initializer.call();
            
            $('.button').removeClass('selected').removeClass('selected-start');
            $('#content > div').removeClass('selected');
            $(this).addClass('selected-start').addClass('selected');
            
            $('#'+id).find('.selected').removeClass('selected');
            $('#'+id).find('[data-auto-select]').addClass('selected');
            $('#'+id).addClass('selected');
        });
        
        Kiosk.InteractionListener();
        //Kiosk.TabWalker();  // there are 2
        Kiosk.TabWalkerLoop();
    },
    
    TabWalkerLoop : function() {
        Kiosk.TabWalkThread = setInterval(function(){
            $('[data-kiosk="directions"]').trigger('click');
            Kiosk.HandleAd();
        }, (Kiosk.TabShowSeconds * 1000) + (Kiosk.AdvertisementShowSeconds * 1000));
    },    

    TabWalker : function() {
        Kiosk.TabWalkThread = setInterval(function(){
            var tabcount = $('[data-kiosk]').length-1;
            $('[data-kiosk]').each(function(i, t){
                if($(this).is('.selected'))
                    if (i == tabcount) {
                        $('[data-kiosk]').first().trigger('click');
                        Kiosk.Background(); // Switch Background
                    } else {
                        $(this).next().trigger('click');
                        return false;
                    }
            });
            Kiosk.HandleAd();
        }, (Kiosk.TabShowSeconds * 1000) + (Kiosk.AdvertisementShowSeconds * 1000));
    },
    
    HandleAd : function(){
        if (Kiosk.AdvertisementIndex >= Kiosk.AdvertisementActive.length)
            Kiosk.AdvertisementIndex = 0;
        $('#advertisements').off('webkitTransitionEnd transitionend').css({
            'opacity':'1',
            'z-index': '100',
            'background-image':'url(' + Kiosk.AdvertisementActive[Kiosk.AdvertisementIndex] + ')'
        });
        
        clearTimeout(Kiosk.AdvertisementThread);
        Kiosk.AdvertisementThread = setTimeout(function(){
            Kiosk.ClearAd();
        }, Kiosk.AdvertisementShowSeconds * 1000 );
        Kiosk.AdvertisementIndex++;
    },
    
    ClearAd : function(){
        $('#advertisements').css({
            'opacity':'0',
        }).one("webkitTransitionEnd transitionend", function() {
            $(this).css('z-index', '0');
        });
    },
    
    LoadAdsList : function() {
        $.getJSON('advertisements.php?callback=?', function(data){
            Kiosk.AdvertisementActive = data;
        });
    },
    
    InteractionListener : function() {
        $('body').click(function(){
            clearInterval(Kiosk.TabWalkThread);
            clearInterval(Kiosk.AdvertisementThread);
            //Kiosk.TabWalker(); // restart // there are 2
            Kiosk.TabWalkerLoop(); // restart
            Kiosk.ClearAd();
        });
    },
    
    Background : function() {
        $('.backdrop').css('background-image','url("images/backdrops/back' + Kiosk.BackgroundIndex + '.jpg"');
        Kiosk.BackgroundIndex++;
        if (Kiosk.BackgroundIndex > Kiosk.BACKGROUND_MAX)
            Kiosk.BackgroundIndex = 0;        
    },
    
    PinchDisable : function(){
        document.addEventListener('touchstart', function(event){
            event.preventDefault();
        }, {passive: false});
                
        document.addEventListener('touchmove', function(event){
            if(event.touches.length >=2) {
                event.stopPropagation(); 
                event.preventDefault(); 
            }
        });
    },
    
}


$(document).ready(function(){
    Kiosk.Construct();
});