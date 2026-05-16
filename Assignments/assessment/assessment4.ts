/*         // Array of transactions: positive values represent credits, negative values represent debits
        const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

        // Variables to store the count and amount of credits and debits
        let totalCredits: number = 0;
        let totalDebits: number = 0;
        let totalCreditAmount: number = 0;
        let totalDebitAmount: number = 0;
        let suspiciousTransactions: number = 0;

        // Iterate through each transaction in the array
        for (const amount of transactions) {

            if (amount > 0) {
                // Credit transaction
                totalCredits++;
                totalCreditAmount += amount;

                // Check for suspiciously large credit transaction
                if (amount > 10000) {
                    console.log(`Suspicious credit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }

            } else {
                // Debit transaction
                totalDebits++;
                totalDebitAmount -= amount; // convert to positive

                // Check for suspiciously large debit transaction
                if (amount < -10000) {
                    console.log(`Suspicious debit transaction with Amount: ${amount}`);
                    suspiciousTransactions++;
                }
            }
        }

        // Final balance
        const finalBalance: number = totalCreditAmount - totalDebitAmount;

        // Print summary
        console.log("----- Transaction Summary -----");
        console.log("Total number of credit transactions:", totalCredits);
        console.log("Total number of debit transactions:", totalDebits);
        console.log("Total amount credited:", totalCreditAmount);
        console.log("Total amount debited:", totalDebitAmount);
        console.log("Final remaining amount in the account:", finalBalance);
        console.log("Total number of suspicious transactions:", suspiciousTransactions); */






let amount: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000]

let totalcreaditamount: number = 0;
let totaldebitamount: number = 0;
let suspiciouscredit: number = 0;
let debittransaction: number = 0;

for (let amount1 of amount) {
    if (amount1 > 0) {
        // console.log("credit transactions"+amount1)
        amount1++
        var totalcraditamount: number = amount1;
        // totalcreaditamount = amount1+totalcreaditamount;
        totalcreaditamount += amount1;
        if (amount1 > 10000) {
            console.log(`suspiciouscredit credited amount : ${amount1}`)
            suspiciouscredit++;
            suspiciouscredit += amount1;
        }

    } else {
        //  console.log("debit transactions"+amount1)
        // let totaldebitamount: number = amount1;
        totaldebitamount -= amount1;
        if (amount1 < 0) {
            console.log(`debit transaction  amount : ${amount1}`)
            debittransaction++;
            debittransaction -= amount1;
        }

    }



}

console.log("total creadit amount :  " + totalcreaditamount)
console.log("debit transactions : " + totaldebitamount)

console.log("total spiciouscredit credited amount  :  " + suspiciouscredit)
console.log("debit transaction : " + debittransaction)

