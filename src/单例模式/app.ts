import { ConnectionOptions, createPool, Pool } from 'mysql2';

const CONN_OPTION = {
    host: '115.236.65.98',
    port: 12004,
    user: 'root',
    password: 'Leaper@123',
    database: 'rtp_pol_web'
}

export default class Mysql {

    private conn: Pool;
    private connOptions: ConnectionOptions = {};
    static connInstance: Mysql;

    constructor() {
        console.log('初始化连接!');
        this.connOptions = CONN_OPTION;
        this.conn = createPool(this.connOptions);
    }

    static getConnection(): Pool {

        if (Mysql.connInstance) {
            return Mysql.connInstance.conn;
        }

        Mysql.connInstance = new Mysql();
        return Mysql.connInstance.conn;
    }
}