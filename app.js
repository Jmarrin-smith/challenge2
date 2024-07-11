const images = [
  //array of images
  "./assets/bg3.jpg",
  "./assets/bg2.jpg",
  "./assets/bg1.jpg",
];

let i = 1; //ittorator

let cimg = 0; //native value of item in array

const ittoratecimg = function () {
  // moves value of selected array item
  if (i > 2) {
    cimg = cimg + i;
  } else
    () => {
      cimg = 0;
    };
};

const chbg = function (images) {
  //function to change background image
  document.body.style.backgroundImage(images[cimg]); //cimg is the value within the array
};

setTimeout(function () {
  ittoratecimg();
  chbg();
}, 2.0 * 1000); //  after 2 seconds
