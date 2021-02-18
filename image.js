window.onload = choosePic;

var imgs = [
    "https://i.imgur.com/or5foMa.jpg",
    "https://i.imgur.com/g82jRNO.jpg",
    "https://i.imgur.com/PU6tKcK.jpg",
    "https://i.imgur.com/QbUzipX.jpg"
];

function choosePic() {
     var randomNum = Math.floor(Math.random() * imgs.length);
     document.getElementById("myPicture").src = imgs[randomNum];
};
