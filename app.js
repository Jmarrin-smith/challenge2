const images = [
  //array of images
  "./assets/bg3.jpg",
  "./assets/bg2.jpg",
  "./assets/bg1.jpg",
];

let cimg = 0; //native value of item in array

function ittoratecimg() {
  cimg++;
  // moves value of selected array item
  if (cimg == images.length) {
    cimg = 0;
  }
}

function chbg() {
  //function to change background image
  const changeimage = document.getElementById("my-image"); //cimg is the value within the array
  console.log(changeimage);
  changeimage.src = images[cimg];
}

let auto = true;

let autoID;

const start = document.getElementById("start");

start.addEventListener("click", function () {
  console.log("start");
  ittoratecimg();
  chbg();
  if (!autoID) {
    autoID = setInterval(() => {
      ittoratecimg();
      chbg();
      console.log("change");
      console.log(cimg);
    }, 4.8 * 1000);
  }
});

const stop = document.getElementById("stop");

stop.addEventListener("click", function () {
  console.log("stop");
  clearInterval(autoID);
  autoID = null;
});

const next = document.getElementById("next");

next.addEventListener("click", function () {
  console.log("next");
  ittoratecimg();
  chbg();
});

const previos = document.getElementById("previos");

previos.addEventListener("click", function () {
  console.log("previos");
  cimg--;
  if (cimg < 0) {
    cimg = images.length - 1;
  }
  chbg();
});

//setInterval(() => {
//  ittoratecimg();
//  chbg();
//  console.log("change");
//  console.log(cimg);
//}, 4.8 * 1000);
//  after 2 seconds

let form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form submitted");
  let imageLink = document.getElementById("imageLink").value;
  images.push(imageLink);
  console.log(images);
});
