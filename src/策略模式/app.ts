interface ValidateAttr {
    addRules(rulesConfList: Array<RulesConf>): void;
    startValidate(value: any): ValidateResult;
}

interface RulesConf {
    name: string;
    valideRules(value: any): boolean;
    errMsg?: string;
}

export enum ValidateStatus {
    success = 'SUCCESS',
    fail = 'FAIL',
}

interface ValidateResult {
    status: ValidateStatus;
    message: string;
}
export class Validate implements ValidateAttr {
    private rulesList: Array<RulesConf>;

    constructor() {
        this.rulesList = [];
    }

    addRules(rulesConfList: Array<RulesConf>): void {
        this.rulesList = [...this.rulesList, ...rulesConfList];
    }

    startValidate(value: any): ValidateResult {
        for (let i = 0; i < this.rulesList.length; i++) {
            const rule = this.rulesList[i];
            const valideRuslt = rule.valideRules(value);
            if (!valideRuslt)
                return {
                    status: ValidateStatus.fail,
                    message: `[${rule.name}]: ${rule.errMsg || '验证不通过'}`,
                };
        }

        return { status: ValidateStatus.success, message: `验证通过` };
    }
}
