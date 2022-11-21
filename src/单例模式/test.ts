import Mysql from './app';

const conn = Mysql.getConnection();
const conn1 = Mysql.getConnection();

async function getFlawInfo() {
    const responce = await conn.promise().query('select * from flaw limit 1');
    const responce2 = await conn1.promise().query('select * from flaw limit 1');
    console.log(responce[0]);
    console.log(responce2[0]);
}

getFlawInfo()