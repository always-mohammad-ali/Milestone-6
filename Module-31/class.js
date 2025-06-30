class Product{
    country = 'bangladesh';

    constructor(nam){
         this.name = nam;
    }

    speak(para){
        console.log(`we are talking about ${para}`)
    }
}

const output = new Product('hey lady');
console.log(output);

output.speak('hey sir, arent you an idiot')

class Teacher{
    constructor(name, subject, years){
          this.name = name;
          this.sub = subject;
          this.years = years;
    }

    teaching(h){
        console.log(h)
    }
}

const msrb = new Teacher('shihab', 'physics', 35);
console.log(msrb);
msrb.teaching('hi, man, i am msrb');

const hkh = new Teacher('halimur', 'english', 77);
console.log(hkh)