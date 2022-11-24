/**
 * 解除对象与对象之间的紧耦合关系。增加一个中介者对象后，所有的 相关对象都通过中介者对象来通信
 */

class A {
    number: number;
    constructor() {
        this.number = 0;
    }
    setNumber(num, m) {
        this.number = num;
        if (m) {
            m.setB();
        }
    }
}
class B {
    number: number;
    constructor() {
        this.number = 0;
    }
    setNumber(num, m) {
        this.number = num;
        if (m) {
            m.setA();
        }
    }
}
class Mediator {
    a: any;
    b: any;
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    setA() {
        let number = this.b.number;
        this.a.setNumber(number * 10);
    }
    setB() {
        let number = this.a.number;
        this.b.setNumber(number / 10);
    }
}

let a = new A();
let b = new B();
let m = new Mediator(a, b);
a.setNumber(10, m);
console.log(a.number, b.number);
b.setNumber(10, m);
console.log(a.number, b.number);
