/**
 * 1, 更继承相比，扩展内容更灵活，
 * 2，与原类之间 独立，解耦，
 * 3，更复杂，冗余
 * 4，扩展原有功能，并且原有功能可用，无入侵性
 */

class Cellphone {
    create() {
        console.log('生成一个手机')
    }
}
class Decorator {
    private cellphone: Cellphone;
    constructor(cellphone: Cellphone) {
        this.cellphone = cellphone
    }
    create() {
        this.cellphone.create();
        this.createShell();
    }

    createShell() {
        console.log('生成手机壳')
    }
}

let cellphone = new Cellphone()
cellphone.create()

let dec = new Decorator(cellphone)
dec.create()
