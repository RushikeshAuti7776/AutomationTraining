// A bank evaluates loan applicants based on the following criteria:
// 1. Credit Score:
// o If the credit score is above 750, the loan is automatically approved.
// o If the credit score is between 650 and 750, additional checks are performed.
// o If the credit score is below 650, the loan is denied.
// 2. Income:
// o For credit scores between 650 and 750, the customer’s income must be at least $50,000
// for the loan to be considered.
// 3. Employment Status:
// o If the customer’s income is at least 50,000, the system checks whether the customer is
// employed.
// o If the customer is unemployed, the loan is denied.
// 4. Debt-to-Income Ratio:
// o If the customer is employed, the system checks the debt-to-income (DTI) ratio.
// o If the DTI ratio is less than 40%, the loan is approved.
// o If the DTI ratio is 40% or greater, the loan is denied.


let creditscore : number = 655;
let income : number = 50900;
let dtiratio : number = 40;

if(creditscore > 750){
  console.log("the loan is automatically approved.");
}else if(creditscore <= 750 && creditscore >= 650){
    
if(income >= 50000)  {
console.log("the customer’s income is greater than $50,000 the loan is considered for customer.")
console.log("customer is employed.")
if(dtiratio<40){
console.log("the DTI ratio is less than 40%, the loan is approved");
}else{
    console.log("the DTI ratio is 40% or greater, the loan is denied.");
}
 }else{
    console.log("Customer is unemployed, the loan is denied.")
 }
}else{
    console.log("the loan is denied.")
}

console.log("--------------------------------------------------------")

// Create common function and then based on below details, print whether user is eligible to get the loan
// or not
// customerName = "John Doe";
// creditScore = 720;
// income = 55000.0;
// isEmployed = true;
// debtToIncomeRatio = 35.0;

function customer
(
    customerName : string , 
    creditScore : number , 
    income : number,
    isEmployed : boolean , 
    debtToIncomeRatio : number
)
: void{
 
console.log(`customer name is : ${customerName}`);

if(creditScore > 750){
console.log("the loan is automatically approved.");
}else if(creditScore <= 750 && creditScore >= 650){
if(income >= 50000 && isEmployed == true)  {
console.log("the customer’s income is greater than $50,000 the loan is considered for customer.")
console.log("customer is employed.")
if(debtToIncomeRatio<40){
console.log("the DTI ratio is less than 40%, the loan is approved");
}else{
    console.log("the DTI ratio is 40% or greater, the loan is denied.");
}
 }else{
    console.log("Customer is unemployed, the loan is denied.")
 }
}else{
    console.log("the loan is denied.")
}


}

customer("John Doe",720 ,55000.0 , true ,45);