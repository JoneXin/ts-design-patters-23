interface ColorConf {
    borderColor?: string;
    backgroundColor?: string;
    shadowColor?: string;
}

class Color {
    public borderColor: string = 'red';
    public backgroundColor: string = 'red';
    public shadowColor: string = 'grey';

    constructor(colorConf: ColorConf) {
        for (const color in colorConf) {
            this[color] = colorConf[color];
        }
    }
}

class Round {
    constructor(name: string, color?: Color) {}
}

class Square {}
