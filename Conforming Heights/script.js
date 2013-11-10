$(window).load(function(){
    
    $('.box-contain').each(function () {
        var box = $(this),
            boxes = $(this).find('.box'),
            boxPadding = $(boxes).css('padding'),
            boxMargin = $(boxes).css('margin'),
            boxHeight = $(box).height(),
            boxSum = parseFloat(boxHeight) - parseFloat(boxPadding)*2 - parseFloat(boxMargin)*2;  
        $(boxes).css("height", boxSum);
    });

});