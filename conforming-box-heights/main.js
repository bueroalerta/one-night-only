// Conformed Heights - change .conform to your element
var conformedBoxes = $('.conform');
conformedBoxes.each(function(){
 // Gets height of element
 var height = $(this).height();
 // Apply height to children
 $(this).children('.box').css("height", height);
});
