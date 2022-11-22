/**
 *  1， 要保护源对象
 *  2， 要增强源对象
 *  3， 隔离操作
 */

interface WriteTool {
    writeByPen(): string;
}

export class Write implements WriteTool {
    constructor() {}

    writeByPen(): string {
        return '用钢笔写字';
    }
}

// 静态代理
export class ProxyWriteTool implements WriteTool {
    private writter: Write;
    constructor() {}

    writeByPen(): string {
        if (!this.writter) {
            this.writter = new Write();
        }

        return this.writter.writeByPen();
    }
}

export class DynamicWriteTool {
    private writter: Write;
    constructor(target: Write) {
        this.writter = target;
    }

    getProxyInstance() {
        return new Proxy(this.writter, {
            get: (target, proxyKey) => {
                console.log(target, proxyKey);
                return target[proxyKey];
            },
        });
    }
}
