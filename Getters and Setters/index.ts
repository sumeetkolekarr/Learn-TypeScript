class Persons {
  private _age: number | undefined;
  constructor(public name: string, protected hobbies: string[]) {
    // Not a proper Validation
    // if (this.age > 150 || this.age < 0) {
    //   throw new Error("Age is not Valid");
    // }
  }

  public set age(age: number) {
    if (age > 150 || age < 0) {
      throw new Error("Age is not Valid");
    }
    this._age = age;
  }

  public get userAge() {
    if (this._age === undefined) {
      throw new Error("Age is not Valid");
    }
    return this._age;
  }

  introduceParent(): string {
    return `Hi, I'm ${this.name} and I'm ${
      this._age
    } years old. I love ${this.hobbies.join(",")}.`;
  }
}

const personOne: Persons = new Persons("Leo", [
  "playing",
  "Eating",
  "Sleeping",
]);
personOne.age = 2;
console.log(personOne.introduceParent());
