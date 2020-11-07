var images;
var slideIndex = 1;

fetch('./img/gallery/files.txt')
  .then(response => response.text())
  .then((data) => {
    images = data.split(';');
    loadImages();
    showDivs(slideIndex);
  });

function loadImages(){
  var list = document.getElementsByClassName("carousel-container").item(0);
  images.forEach((item) => {
  var img = document.createElement('img');
  img.setAttribute('src', './img/gallery/' + item +'.jpg');
  img.setAttribute('class', 'gallery-img');
  list.appendChild(img);
  }); 
  
}

function plusSlides(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("gallery-img");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}
