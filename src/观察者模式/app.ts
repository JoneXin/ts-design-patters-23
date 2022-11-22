/**
 * - 使用改变一个对象，使得其所有观察者都监听到变化
 *
 * 1，适用于发布订阅
 * 2,一对多的关系
 *
 */

interface ObserverState {
    updateState(state: any): void;
}

export class UseState {
    public state: any;
    private compList: Array<any> = [];

    constructor(state: any) {
        this.state = state;
    }

    public registState(comp: any) {
        this.compList.push(comp);
    }

    public setState(newState: any) {
        this.state = newState;

        this.compList.findIndex((comp) => {
            comp.updateState(newState);
        });
    }

    public getState() {
        return this.state;
    }
}

export class Componnet implements ObserverState {
    public state: any;
    private useState: UseState;

    constructor(useState: UseState) {
        this.useState = useState;
        this.useState.registState(this);
        this.state = useState.getState();
    }

    public updateState(state: any): void {
        this.state = state;
        console.log('组件值要更新了');
    }
}
