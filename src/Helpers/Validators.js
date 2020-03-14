 import RuleSet from './RuleSet';
 class Validator {
    
static typeOf=()=>{
    console.log(RuleSet.Rules.Email_D.expression);
}

    static checkBy = (input, type, subtype) => {
        switch (type.toString().toLowerCase()) {
            case 'email':
                break;
            case 'password':
                break;
            case 'email':
                break;
            case 'http':
                break;
            case 'date':
                break;
            case 'time':
                break;
            case 'html':
                break;
            case 'slug':
                break;
            case 'duplicate':
                break;
            case 'string':
                break;
            case 'number':
                break;
            case 'alphanumeric':
                break;
            case 'phone':
                break;
            case 'JSH':
                break;
            case 'IP':
                break;
            case 'Country':
                break;
            default:
                break;
        }
    }
}

export default Validator;