var elem = document.getElementById('catPic1');
elem.addEventListener('click', function(){
    totalClicks = Number(document.getElementById('totalClicks1').textContent);
    document.getElementById('totalClicks1').textContent = ++totalClicks;
}, false);


var elem = document.getElementById('catPic2');
elem.addEventListener('click', function(){
    totalClicks = Number(document.getElementById('totalClicks2').textContent);
    document.getElementById('totalClicks2').textContent = ++totalClicks;
}, false);

document.getElementById('catName2').textContent = 'Fred';
document.getElementById('catName1').textContent = 'Garfield';