/**
 * 给定一个语言, 定义它的文法的一种表示，并定义一个解释器, 该解释器使用该表示来解释语言中的句子
 */

class Target {
    private num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class Expression {
    private target: Target;
    constructor(target: Target) {
        this.target = target;
    }
    add(value: number): number {
        return;
    }

    subscribe(value: number): number {
        return;
    }
}

const target = new Target(1);

const expression = new Expression(target);

expression.add(1);
expression.subscribe(1);
