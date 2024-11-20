// array of background images
const images = [
    'stock.jpg', 
    'happyVisa.jpg',
    'trading.jpg',
    'nycVisa.jpg',
    'desk.jpg',
    'usingCard.jpg',
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const slideshowElement = document.getElementById('slideshow');
    const imageUrl = `url(${images[currentImageIndex]})`;
    console.log("Setting background image:", imageUrl); // Debugging line
    slideshowElement.style.backgroundImage = imageUrl;
    
    // incrementing the index to the next image, looping back when at the end
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

function preloadImages(imageArray) {
    imageArray.forEach((image) => {
        const img = new Image();
        img.src = image;
    });
}

// ensuring that first image immediately loads when the page opens
window.onload = function() {
    preloadImages(images); // Preload all images
    changeBackgroundImage(); // Setting the initial image
    setInterval(changeBackgroundImage, 5000); // Starting the slideshow interval, changing the image every 5 seconds
};

function compareCard() {
    const spending = document.getElementById('spending').value;
    const result = document.getElementById('result');
    let recommendation;

    if (spending < 500) {
        recommendation = "The MVM Bronze Card is perfect for you! It offers 1% cashback on all purchases.";
    } else if (spending < 2000) {
        recommendation = "You should go for the MVM Silver Card! It offers 1.5% cashback and travel benefits.";
    } else if (spending >= 2000) {
        recommendation = "The MVM Gold Card is the best