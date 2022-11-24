
## 简介

 设计模式的 ts 简单实现

## 设计模式原则

- 单一职责

> 一个程序只做一件事  
> 拆分复杂的功能，每个模块保持独立

- 开放/封闭原则

> 对扩展开放，对修改封闭  
> 新增需求，扩展新代码，而非修改已有代码

- 里氏替换原则

> 子类能替换父类  
> 父类能出现的地方，子类就能出现

- 接口隔离原则

> 保持接口的独立，单一

- 依赖倒转原则

> 面向接口编程，依赖抽象而不是具体  
> 使用方只要管制接口，而不关注实现

## 目录结构

```text
ts-design-patters-23
 ├─ src
 │ ├─ 中介者模式
 │ │ └─ app.ts
 │ ├─ 享元模式
 │ │ └─ app.ts
 │ ├─ 代理模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ ├─ 单例模式
 │ │ ├─ app.ts
 │ │ ├─ test.ts
 │ │ └─ tsconfig.json
 │ ├─ 原型模式
 │ │ └─ app.ts
 │ ├─ 命令模式
 │ │ └─ app.ts
 │ ├─ 备忘录模式
 │ │ └─ app.ts
 │ ├─ 外观模式
 │ │ └─ app.ts
 │ ├─ 工厂模式
 │ │ ├─ app.ts
 │ │ ├─ test.ts
 │ │ └─ tsconfig.json
 │ ├─ 桥接模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ ├─ 模板方法模式
 │ │ └─ app.ts
 │ ├─ 状态模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ ├─ 策略模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ ├─ 组合模式
 │ │ └─ app.ts
 │ ├─ 职责链模式
 │ │ └─ app.ts
 │ ├─ 装饰者模式
 │ │ └─ app.ts
 │ ├─ 观察者模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ ├─ 解析器模式
 │ │ └─ app.ts
 │ ├─ 访问者模式
 │ │ └─ app.ts
 │ ├─ 迭代器模式
 │ │ ├─ app.ts
 │ │ └─ test.ts
 │ └─ 适配器模式
 │ │ ├─ app.ts
 │ │ ├─ test.ts
 │ │ └─ tsconfig.json
 ├─ README.md
 └─ tsconfig.json

```

