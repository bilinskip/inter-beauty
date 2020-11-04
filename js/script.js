var images;
function loadImages(){
  var list = document.getElementsByClassName("slideshow-container").item(0);
  var dots = document.getElementsByClassName("dots").item(0);
  console.log('list ', list);
  images.forEach((item) => {
    var li = document.createElement('div');
    li.setAttribute('class', 'mySlides fade');
    //li.innerHTML = '<img src = "./img/gallery/' + item +'.jpg" class="gallery-img"/>';
    li.innerHTML = '<div class="numbertext">'+item +' / ' + images.length +'</div><img src="./img/gallery/' + item +'.jpg" style="width:100" class="gallery-img">';
    list.appendChild(li);
    var dot = document.createElement('span');
    dot.setAttribute('class', 'dot');
    dot.setAttribute('onclick', 'currentSlide(' + item +')');
    dots.appendChild(dot);
  }); 
  
}

fetch('./img/gallery/files.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data);
    images = data.split(';');
    console.log('## images ', images);
    loadImages();
  });

  var myIndex = 0;
  carousel();
  
  function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
  }

