export class Iiterator {
    private list: Array<any> = [];
    private idx: number = 0;

    constructor(list: Array<any>) {
        this.list = list;
    }

    public next(): any {
        return this.hasNext() ? this.list[this.idx++] : null;
    }

    public hasNext(): boolean {
        return this.idx >= this.list.length ? false : true;
    }
}
