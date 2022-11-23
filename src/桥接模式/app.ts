interface ColorConf {
    borderColor?: string;
    backgroundColor?: string;
    shadowColor?: string;
}

interface ShapeAttr {
    getInfo(): string;
}

export class Color {
    public borderColor: string = 'red';
    public backgroundColor: string = 'red';
    public shadowColor: string = 'grey';

    constructor(colorConf: ColorConf) {
        for (const color in colorConf) {
            this[color] = colorConf[color];
        }
    }
}

export class Round implements ShapeAttr {
    private name: string;
    private color: Color;

    constructor(name: string, color: Color) {
        this.name = name;
        this.color = color;
    }

    public getInfo(): string {
        return `形状: ${this.name}, 背景颜色${this.color.backgroundColor}, 边框颜色${this.color.borderColor},阴影颜色${this.color.shadowColor},`;
    }
}

export class Square implements ShapeAttr {
    private name: string;
    private color: Color;

    constructor(name: string, color: Color) {
        this.name = name;
        this.color = color;
    }

    public getInfo(): string {
        return `形状: ${this.name}, 背景颜色${this.color.backgroundColor}, 边框颜色${this.color.borderColor},阴影颜色${this.color.shadowColor},`;
    }
}
