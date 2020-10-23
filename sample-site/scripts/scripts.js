var image = document.querySelector('img');

image.onclick = function() {
    var imgname = image.getAttribute('src');
    if(imgname == 'img/dog.jpg'){
        image.setAttribute('src', 'img/dog2.jpg');
    }else{
        image.setAttribute('src', 'img/dog.jpg');
    }
}


//user name

var btn = document.querySelector('button');
var heading = document.querySelector('h1');

function setname() {
    var name1 = window.prompt('enter your name');
    localStorage.setItem('name', name1);
    heading.textContent = "Have a nice day" + name1;
}

if(!localStorage.getItem('name')){
    setname();
}
else{
    var stored = localStorage.getItem('name');
    heading.textContent = "Have a nice day" + stored;
}
btn.onclick  = function() {
    setname();
}