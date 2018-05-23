var elem = document.getElementById('catPic');
elem.addEventListener('click', function(){
    totalClicks = Number(document.getElementById('totalClicks').textContent);
    document.getElementById('totalClicks').textContent = ++totalClicks;
}, false);