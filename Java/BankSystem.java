package OOPs;


import java.util.Scanner;

class Account {

    double amount;
    //constructor
    Account(double amount) {
        this.amount = amount;
    }

    //DEPOSIT MONEY
    void addMoney(double value) {
        amount = amount + value;
    }

   //WITHDRAW MONEY
    void removeMoney(double value) {
        if (value <= amount) {
            amount = amount - value;
        } else {
            System.out.println("Not enough money");
        }
    }
      //SHOW BALANCE
    double getAmount() {
        return amount;
    }
}


class Loan {

    double totalLoan;
    int duration;
 //constructor
    Loan(double totalLoan, int duration) {
        this.totalLoan = totalLoan;
        this.duration = duration;
    }

    double monthlyPayment() {//for EMI calculation
        return totalLoan / duration;
    }

    void payInstallment(String method) {//for payment
        System.out.println("Installment paid using " + method);
    }
}

// Main class
public class BankSystem {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        
        System.out.print("Enter  Balance: ");
        Account userAcc = new Account(sc.nextDouble());

        System.out.print("Enter amount to add: ");
        double add = sc.nextDouble();
        userAcc.addMoney(add);

        System.out.print("Enter amount to remove: ");
        double remove = sc.nextDouble();
        userAcc.removeMoney(remove);

        System.out.println("Final Balance: " + userAcc.getAmount());


        System.out.print("Enter loan value: ");
        double loanValue = sc.nextDouble();

        System.out.print("Enter months: ");
        int time = sc.nextInt();

        Loan userLoan = new Loan(loanValue, time);
        double emi = userLoan.monthlyPayment();
        System.out.println("Monthly EMI: " + emi);

        // Payment
        System.out.print("Select payment mode (Cash/Card): ");
        String option = sc.next();
        userLoan.payInstallment(option);

        sc.close();
    }
}
