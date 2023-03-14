var toggleBtn = document.getElementById('toggleBtn');
var content = document.getElementById('content');

toggleBtn.addEventListener('click', function () {
  if (content.style.display === 'none') {
    content.style.display = 'block';
  } else {
    content.style.display = 'none';
  }
});
//  nav button toggle end

/////gallery/////
const subImgs = document.querySelectorAll('.sub_img img');
const mainImg = document.querySelector('.main_img');

subImgs.forEach((subImg) => {
  subImg.addEventListener('click', function () {
    mainImg.setAttribute('src', this.getAttribute('src'));
  });
});
///////////blog toggel////////////
function myFunction() {
  var x = document.getElementById('myDIV');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}
