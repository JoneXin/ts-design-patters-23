import { UseState, Componnet } from './app';

const state = new UseState({ name: '张三' });

const comp = new Componnet(state);

const value = state.getState();
console.log('value:', value);
console.log('value:', comp.state);

//  ----------

state.setState({ value: '李四' });
console.log(state.getState());
console.log(comp.state);
