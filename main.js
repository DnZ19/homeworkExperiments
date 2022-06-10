//Function that let's you choose a service an according to that service you get a price and at the end a total price for the taxi ride in this case

function totalPriceCalc(chosenService, distance)    {

    let price = 0;
    let totalPrice = 0;

    if (chosenService === 1)    {
        price = 3;
        totalPrice = price * distance;
        return "total price is " + totalPrice;
    } else if (chosenService === 2) {
        price = 5;
        totalPrice = price * distance;
        return "total price is " + totalPrice;
    } else if (chosenService === 3) {
        price = 6;
        totalPrice = price * distance;
        return "total price is " + totalPrice;
    } else  {
        return "klopt niet"
    }


}

console.log(totalPriceCalc(3, 20));

//Try and write this code above with a Switch instead of if / else statements...



//functie upperCaseGenerator

function upperCaseGenerator(text)   {
    const upperCasedWord = text.toUpperCase();
    return upperCasedWord;
}

console.log(upperCaseGenerator("dennis rijkers"));
