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
