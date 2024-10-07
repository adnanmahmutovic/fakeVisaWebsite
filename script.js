// array of background images
const images = [
    'stockVisa.jpg', 
    'happyVisa.jpg',
    'headquartersVisa.jpg',
    'corporateVisa.jpg',
    'nycVisa.jpg'
];

let currentImageIndex = 0;

function changeBackgroundImage() {
    const slideshowElement = document.getElementById('slideshow');
    slideshowElement.style.backgroundImage = `url(${images[currentImageIndex]})`;
    
    // incrementing the index to the next image, looping back when at the end
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// ensuring that first image immediately loads when the page opens
window.onload = function() {
    changeBackgroundImage(); // setting the initial image
    setInterval(changeBackgroundImage, 5000); // starting the slideshow interval, changing the image every 5 seconds
};

function compareCard() {
    const spending = document.getElementById('spending').value;
    const result = document.getElementById('result');
    let recommendation;

    if (spending < 500) {
        recommendation = "The Visa Bronze Card is perfect for you! It offers 1% cashback on all purchases.";
    } else if (spending < 2000) {
        recommendation = "You should go for the Visa Silver Card! It offers 1.5% cashback and travel benefits.";
    } else if (spending >= 2000) {
        recommendation = "The Visa Gold Card is the best fit for you! It provides 2% cashback and premium rewards.";
    } else {
        recommendation = "Please enter a valid spending amount.";
    }

    result.textContent = recommendation;
}
