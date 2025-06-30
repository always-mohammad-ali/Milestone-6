class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`Sleeping now is ${this.name}`)
    }
}

const ali = new Person('ali vai', 34);
console.log(ali);
ali.sleep();
console.log(ali);

const kali = new Person('kali sir', 888);
kali.sleep();
console.log(kali);