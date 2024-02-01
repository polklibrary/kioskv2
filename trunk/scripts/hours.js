var Hours = {

    URL : "https://library.uwosh.edu/about/hours/getHours",
    Data : [ ],
    ClosingDate : null,
    Thread : null,

    Construct : function() {
        Hours.Load();
        Hours.Recheck();
    },
    
    IsFinished : function(){
        return Hours.Data.length != 0;
    },

    Load : function(){
        $.getJSON(Hours.URL, function(response) {
            
            var unordered = response['campus-osh'];
            const ordered = {};
            Object.keys(unordered).sort().forEach(function(key) {
                ordered[key] = unordered[key];
            });
            Hours.Data = ordered;
            Hours.Setup();
        });
    },
    
    Setup : function() {
        var StartDate = new Date();
        
        for (var i = 0; i < 7; i++){
            
            var Year = StartDate.getFullYear() + '';
            var Month = StartDate.getMonth() + 1; // 0-11
            if (Month < 10)
                Month = '0' + Month;
            var Day = StartDate.getDate();
            if (Day < 10)
                Day = '0' + Day;
            var Id = Year + '-' + Month + '-' + Day;
            
            var DT = Hours.Data[Id];
            
            var date = $('<div>').addClass('date');
            var day = $('<div>').addClass('day').html(Hours.GetDay(StartDate));
            var time = $('<div>').addClass('time').html(Hours.GetOpenHours(DT[0]));

            $(date).append(day);
            $(date).append(time);
            $('#hours .content-left').append(date);

            StartDate.setDate(StartDate.getDate() + 1); // next day
        }
    },
    

    GetDay : function(date){
        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    },
    
     GetOpenHours : function(hours){
        if (!hours.is_open)
            return "Closed";
        else if (hours.message != "") 
            return hours.message;
        else {
            var startdate = new Date(hours.start * 1000);
            var enddate = new Date(hours.end * 1000);
            
                if (Hours.ClosingDate == null) {
                    Hours.ClosingDate = new Date(hours.end * 1000);
                    Hours.ClosingDate.setMinutes(Hours.ClosingDate.getMinutes() - 30);
                }
                
                
            
            
            return Hours.GetReadableHour(startdate, false) + " - " + Hours.GetReadableHour(enddate, false);
        }
        return "Error";
    },
    
    GetReadableHour : function(date, seconds){
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var ampm = "PM";
        
        if(hour < 12)
            ampm = "AM";
        if(hour == 0)
            hour = 12;
        if(hour > 12)
            hour = hour - 12;
            
        if(second < 10)
            second = "0" + second;
        if(minute < 10)
            minute = "0" + minute;
        
        
        var fulltime = hour + ":" + minute + " " + ampm;
        if(seconds)
            fulltime = hour + ":" + minute + ":" + second + " " + ampm;
        
        if (fulltime == "12:00 AM")
            return "Midnight";
        if (fulltime == "12:00 PM")
            return "Noon";
        return fulltime;
        
    },

    
    PatternCurrentHour : function(){
        setInterval(function(){
            var date = new Date();
            var hour = Hours.GetReadableHour(date, true);
            $('.pat-current-hour').html(hour);
            
            // if (Hours.ClosingDate != null)
                // if (Hours.ClosingDate < date)
                    // $('.pat-closing-soon').show();
        }, 1000);
    },
    
    
    Recheck : function(){
        Hours.Thread = setInterval(function(){
            if (Hours.IsFinished()) {
                console.log("Hours Data Successful: Turning off retrieval service...");
                clearInterval(Hours.Thread);
            } else
                Hours.Load();
        }, 30000); // recheck every minute.
    },
    
    
}

$(document).ready(function(){
    Hours.Construct();
    Hours.PatternCurrentHour();
});