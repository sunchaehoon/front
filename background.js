const images = ["evening.jpg", "sky.jpg", "universe.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/images/${chosenImage}`;
bgImage.alt = 'img'
     
document.body.appendChild(bgImage);





