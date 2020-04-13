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
let calculate = document.querySelector("calculate");
let calculationContainer = document.querySelector(".calculation-container");

calculate.addEventListener('click', () => {
    let adminFee = calculateAdminFee(inputs[0]);
    let totalToPay = inputs[0] + adminFee;
    let repaymentTerm = calculateRepaymentTerm(totalToPay, inputs[2]);

    adminFeeNode = document.createElement("P");
    adminFeeTextNode = document.createTextNode(adminFee);
    adminFeeNode.appendChild(adminFeeTextNode);
    calculationContainer.appendChild(adminFeeNode);

    adminFeeNode = document.createElement("P");
    adminFeeTextNode = document.createTextNode(repaymentTerm);
    adminFeeNode.appendChild(adminFeeTextNode);
    calculationContainer.appendChild(adminFeeNode);

    adminFeeNode = document.createElement("P");
    adminFeeTextNode = document.createTextNode(totalToPay);
    adminFeeNode.appendChild(adminFeeTextNode);
    calculationContainer.appendChild(adminFeeNode);
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