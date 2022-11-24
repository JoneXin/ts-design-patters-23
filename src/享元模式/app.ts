/**
 * 把多重单元型 封装成 共享的，批量的。
 */

class Personal {
    constructor(name: string) {
        console.log(`创建了人 : ${name}`);
    }
}

class Persons {
    constructor(nameList: Array<string>) {
        console.log(`创建了一群人: ${nameList.join(',')}`);
    }
}

new Personal('张三');

new Persons(['张三', '王二', '李四']);
