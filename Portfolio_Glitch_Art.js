
//about
$(document).ready(function(){
    $("p").hover(function(){
        $("#about").css("background-color", "lightgreen");
        }, function(){
        $("#about").css("background-color", "transparent");
    });
});

$(document).ready(function(){
    $("#menu6").hover(function(){
        $("#return").css("background-color", "lightgreen");
        }, function(){
        $("#return").css("background-color", "transparent");
    });
});

$(document).ready(function(){
    $("p").hover(function(){
        $("#return").css("color", "black");
        }, function(){
        $("#return").css("color", "green");
    });
});

$(document).ready(function(){
    $("#menu6").hover(function(){
        $("#return").css("color", "black");
        }, function(){
        $("#return").css("color", "green");
    });
});
