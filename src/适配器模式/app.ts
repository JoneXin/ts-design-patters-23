interface UserInfo {
    name: string,
    addr?: string
}
// 第三方框架的 api
class RegistUser {
    private userInfo: UserInfo;
    constructor(userInfo: UserInfo) {
        this.userInfo = userInfo;
    }

    getInfo() {
        return this.userInfo;
    }
}

// 整合第三方api，增加功能，适配已有api
export default class RegistUserApi {
    private regitUser: RegistUser;

    constructor(userInfo: UserInfo) {
        this.regitUser = new RegistUser(userInfo);
    }
    getInfo(): string {
        const userInfo = this.regitUser.getInfo();
        return '中国区' + Object.entries(userInfo).join(',');
    }
}