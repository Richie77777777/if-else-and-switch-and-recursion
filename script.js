function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year.`;
            } else {
                return `${year} is not a leap year.`;
            }
        } else {
            return `${year} is a leap year.`;
        }
    } else {
        return `${year} is not a leap year.`;
    }
}

// Test the function
console.log(isLeapYear(2000)); // Leap year
console.log(isLeapYear(1900)); // Not a leap year
console.log(isLeapYear(2024)); // Leap year
console.log(isLeapYear(2023)); // Not a leap year
console.log(isLeapYear(2048)); //Leap year

//////////


function getTicketPrice(age) {
    if (age <= 12) {
        return "The ticket price is $10.";
    } else if (age >= 13 && age <= 17) {
        return "The ticket price is $15.";
    } else if (age >= 18) {
        return "The ticket price is $20.";
    } else {
        return "Invalid age.";
    }
}

// Test the function
console.log(getTicketPrice(10)); // $10
console.log(getTicketPrice(15)); // $15
console.log(getTicketPrice(20)); // $20


/////////////

function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test the function
console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
console.log(fibonacci(10)); // 55




///////////////////



function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Test the function
console.log(power(2, 3)); // 8
console.log(power(5, 0)); // 1
console.log(power(3, 4)); // 81
console.log(power(7, 2)); // 49
console.log(power(10, 5)); // 100000

