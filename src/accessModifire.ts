//* accesss --> Modify 

class BankAccount {
    public readonly userId: number; 
    public userName: string; 
    protected userBalance: number; 

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId; 
        this.userName = userName; 
        this.userBalance = userBalance; 

    }; 

    private addBalance (amount: number) {
        this.userBalance = this.userBalance + amount; 
        return this
    } 
}


class StudentBankAccount extends BankAccount {
    test() {
        console.log(this.userBalance);
    }
}


const soponBankAccount = new BankAccount(111, "Sopon islam", 500); 

soponBankAccount.addBalance(50).addBalance(20)

console.log(soponBankAccount);