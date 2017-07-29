// Class 100 
// extends

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello(){
        console.log('Xin chao, toi la ' + this.name);
    }
}

class Child extends Person {

    constructor(name, age, toy) {
        super(name, age);
        this.toy = toy;
    }

    sayHello() {
        super.sayHello();
        console.log('Xin chao, em la ' + this.name);
    }

    play() {
        console.log('Em dang choi ' + this.toy);
    }
}

const ti = new Child('TIIII', 8, 'Xe hoi');
ti.sayHello();
ti.play();