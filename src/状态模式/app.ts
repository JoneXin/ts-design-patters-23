interface StateConf {
    getState(): any;
    setState(state: any): any;
}

export class Context implements StateConf {
    private state: any;

    constructor() {}

    getState() {
        return this.state;
    }

    setState(state: any) {
        this.state = state;
    }
}

export class State1 {
    private info: any;

    constructor(info: any) {
        this.info = info;
    }

    doAction(context: Context) {
        context.setState(this);
    }
}

export class State2 {
    private info: any;

    constructor(info: any) {
        this.info = info;
    }

    doAction(context: Context) {
        context.setState(this);
    }
}
