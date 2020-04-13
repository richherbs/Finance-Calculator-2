// Challenge
// Build a finance calculator that accepts:
// The amount you would like to borrow (£)
// Your expected salary (£): default £25,000
// Monthly repayment percentage: default/minimum 10%

// The calculator should tell you the admin fee required to 
// borrow the money, how long it will take you to pay off and 
// the total amount that you will have borrowed.

// Requirements:

// Borrow amount between £1 and £8000
// If borrowing above 80% (£6400) then add £500 to repayment amount
// If borrowing above 90% (£7200) then add a further £500 to repayment amount
// Display 5% of total borrowed amount as upfront admin fee

let inputs = document.querySelectorAll("input");
let calculate = document.querySelector(".calculate");
let calculationContainer = document.querySelector(".calculation-container");
const NUMBERSONLY = /^[0-9]$/;

inputs.forEach(element => {
    element.addEventListener('keyup', (e) => {
        console.log(activeElement.backgroundColour);
        if(checkNumbers(activeElement.value)){
            activeElement.backgroundColour = "transparent";
        } else {
            activeElement.backgroundColour = "red";
        }
    }) 
});

calculate.addEventListener('click', (e) => {
    e.preventDefault();
    
    if(checkExists(inputs)){
        let borrow = parseInt(inputs[0].value);
        let repayment = parseInt(inputs[2].value)

        let adminFee = calculateAdminFee(borrow);
        let totalToPay = borrow + adminFee;
        let repaymentTerm = calculateRepaymentTerm(totalToPay, repayment);

        displayInfo(adminFee, "You will pay an administration fee of: ");
        displayInfo(repaymentTerm, "You will be paying it back for: ");
        displayInfo(totalToPay, "You will be paying a total of: ");
    }
})

function calculateAdminFee(aLoan) {
    let adminFee;

    if(aLoan < 6400){
        adminFee = aLoan * 0.05;
    } else if(aLoan >= 7200){
        adminFee = (aLoan * 0.05) + 1000;
    } else {
        adminFee = (aLoan * 0.05) + 500;
    }

    return adminFee;
}

function calculateRepaymentTerm(aTotalToPay, aRepayment){
    let repaymentPounds = aTotalToPay * (aRepayment/100);
    let repaymentTerm = aTotalToPay / repaymentPounds;

    return Math.round(repaymentTerm);
}

function displayInfo(aNumber, aMessage, aContainer) {
    adminFeeNode = document.createElement("P");
    adminFeeTextNode = document.createTextNode(aMessage + aNumber);
    adminFeeNode.appendChild(adminFeeTextNode);
    aContainer.appendChild(adminFeeNode);
}

function checkNumbers(aString) {
    return NUMBERSONLY.test(aString);
}

function checkExists(anArrayOfInputs) {
    anArrayOfInputs.forEach(element => {
        if(!element.value.length > 0){
            return false;
        }
    });
    return true;
}