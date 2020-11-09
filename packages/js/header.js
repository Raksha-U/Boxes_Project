
$(document).ready(function(){
    $(".small").on("click",function(){
    $(".para").css("font-size","14px");
    });
    
    $(".medium").on("click",function(){
    $(".para").css("font-size","16px");
    });
    
    $(".large").on("click",function(){
    $(".para").css("font-size","18px");
    });
    
    
    $(".bgWhite").on("click",function(){
    $(".background").css({"background-color":"white","color":"black"});
    });
    
    $(".bgBlack").on("click",function(){
    $(".background").css({"background-color":"black","color":"white"});
    
    });
    
    $(".bgyellow").on("click",function(){
    $(".background").css({"background-color":"#feb600","color":"#0e4fa0"});
    });
    
    $(".bgBlue").on("click",function(){
    $(".background").css({"background-color":"#0e4fa0","color":"white"});
    
    });
    
    $(".bgYellow").on("click",function(){
    $(".background").css({"background-color":"#feb600","color":"black"});
    });
    
    $(".bggreen").on("click",function(){
    $(".background").css({"background-color":"#d2fdac","color":"black"});
    
    });
    });
    