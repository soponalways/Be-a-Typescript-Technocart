//* Getter 
//* Setter 

class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected _userBalance: number;

    constructor(userId: number, userName: string, _userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this._userBalance = _userBalance;

    };
    // //* Balance k Add korteche 
    // ? addBalance(amount: number) {
    // ?    this._userBalance = this._userBalance + amount;
    // ?    return this
    // ? }; 

    // //* Balance ke Get korteche 
    //? getBalance () {
    //?     return this._userBalance
    //? }

    set addBalance(amount: number) {
        this._userBalance = this._userBalance + amount; 
    }

    get getBalance() {
        return this._userBalance; 
    }

}



const soponBankAccount = new BankAccount(111, "Sopon islam", 500);

soponBankAccount.addBalance = 50; 

console.log(soponBankAccount);
console.log(soponBankAccount.getBalance);