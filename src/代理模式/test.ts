import { ProxyWriteTool, DynamicWriteTool, Write } from './app';

// 静态代理
const pWitter = new ProxyWriteTool();
const resSt = pWitter.writeByPen();
console.log(resSt);

// 动态代理
const dWitter = new DynamicWriteTool(new Write());
let resDy = dWitter.getProxyInstance().writeByPen();
console.log(resDy);
