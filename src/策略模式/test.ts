import { Validate } from './app';

let validate = new Validate();

validate.addRules([
    {
        name: 'isString',
        valideRules(value) {
            return typeof value == 'string' ? true : false;
        },
        errMsg: 'value must be string'
    }
])

const result = validate.startValidate(1);

console.log(result);
