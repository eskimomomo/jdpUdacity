var Cats  = [
    {catName: 'Fred', imageLocation: 'cat1.jpg', clicks: 0},
    {catName: 'Garfield', imageLocation: 'cat2.jpg', clicks: 0},
    {catName: 'Barney', imageLocation: 'cat3.jpg', clicks: 0},
    {catName: 'Eskimo', imageLocation: 'cat4.jpg' , clicks: 0},
    {catName: 'Tree', imageLocation: 'cat5.jpg' , clicks: 0}
]

Cats.forEach(function (elem,index,arr)
{
    console.log(elem);
    $('#catList').append('<a href="javascript:populateCat(' + index + ')">' + elem.catName + '</a></br>');
});

function populateCat(index)
{
    $('#catName').text(Cats[index].catName);
    $('#catPic').attr('src','images/' + Cats[index].imageLocation);
    $('#catPic').attr('catIndex',index);
    $('#totalClicks').text(Cats[index].clicks)
}

$('#catPic').click(function(e) {
  //the element has been clicked... do stuff here
  var index = e.target.attributes['catindex'].value;
  Cats[index].clicks = ++Cats[index].clicks;
  $('#totalClicks').text(Cats[index].clicks);
});

populateCat(1);
