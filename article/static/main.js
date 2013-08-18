$(document).ready(function(){
    $('#start').click(function(){
        $.ajax({
            url: "start",
            beforeSend: function ( xhr ) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }).done(function ( data ) {
            if( console && console.log ) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    });

    $('#play_pause').click(function(){
        $.ajax({
            url: "play_pause",
            beforeSend: function ( xhr ) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }).done(function ( data ) {
            if( console && console.log ) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    });
    $('#previous').click(function(){
        $.ajax({
            url: "previous",
            beforeSend: function ( xhr ) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }).done(function ( data ) {
            if( console && console.log ) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    });
    $('#next').click(function(){
        $.ajax({
            url: "next",
            beforeSend: function ( xhr ) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }).done(function ( data ) {
            if( console && console.log ) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    });
    $('#play').click(function(){
        $.ajax({
            url: "play",
            beforeSend: function ( xhr ) {
                xhr.overrideMimeType("text/plain; charset=x-user-defined");
            }
        }).done(function ( data ) {
            if( console && console.log ) {
                console.log("Sample of data:", data.slice(0, 100));
            }
        });
    });
});
