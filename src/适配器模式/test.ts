import RegistUserApi from './app';

const registUser = new RegistUserApi({ name: '张三', addr: '莫斯科' });

const userInfo = registUser.getInfo();
console.log(userInfo);
