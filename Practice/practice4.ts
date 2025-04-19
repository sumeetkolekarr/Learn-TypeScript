// Q1
class BankAccount {
  private _balance: number = 0;
  public get balance(): number {
    return this._balance;
  }
  public set balance(newBalance: number) {
    if (newBalance < 0) {
      throw new Error("Invalid Balance");
    }
    this._balance = newBalance;
  }
}

const account = new BankAccount();
account.balance = 10;
console.log(account.balance);

class Temperature {
  private _celcius: number = 0;

  public get celcius(): number {
    return this._celcius;
  }

  public set celcius(newCelcius: number) {
    this._celcius = newCelcius;
  }

  public get fahrenheit(): number {
    return (this._celcius * 9) / 5 + 32;
  }

  public set fahrenheit(newFahrenheit: number) {
    this._celcius = ((newFahrenheit - 32) * 5) / 9;
  }
}


const temp = new Temperature()
temp.celcius = 25
console.log(temp.fahrenheit);

temp.fahrenheit = 77
console.log(temp.celcius);