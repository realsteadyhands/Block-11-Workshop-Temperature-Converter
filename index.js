// // (fahrenheitNumber - 32) / 1.8 = convertToCelsius

function convertToCelsius(fahrenheitNumber) {
    return (fahrenheitNumber - 32) / 1.8;
}

function describeTemperature(fahrenheitNumber) {

    const celsius = convertToCelsius(fahrenheitNumber);

    if (celsius < 0) {return "very cold";}
        else if (celsius < 20) {return "cold";}
        else if (celsius < 30) {return "warm";}
        else if (celsius < 40) {return "hot";}
        else {return "very hot";}
}

console.log(convertToCelsius(68));
console.log(describeTemperature(21));