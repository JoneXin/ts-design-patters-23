import { Context, State1, State2 } from './app';

const cnt = new Context();

const state1 = new State1('打开');
const state2 = new State2('关闭');

state1.doAction(cnt);
console.log(cnt.getState());
state2.doAction(cnt);
console.log(cnt.getState());
