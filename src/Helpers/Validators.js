 import RuleSet from './RuleSet';
 class Validator {

     constructor() {}

     static typeOf = () => {
         console.log(RuleSet.Rules + ".Email_D");
     }

     /** Gets the error message based on truthiness of incoming regex and input  */
     getErrorMessage = (input = String, expression = [], messagekey = []) => {
         for (var i = 0; i <= expression.length; i++) {
             if (!expression[i].test(input)) return messagekey[i];
         }
     }

     /** Gets the error message based on truthiness of incoming regex and input  
      * expected in puts :
      type of string to check, 
      key type of string in [email,password,http,date,time,html,slug,duplicate,string,number,
                            alphanumeric,phone,JSH,IP,Country],
      sub key type of string in [All,email_rare,https,ddmmyyyy,ddmmmyyyy,yyyymmdd,meridian,railwaytime,railwaytime_leadingzero,
        railwaytime_strict,wholenumbers,decimals,realnumbers,fractions,alphanumeric_rel,inlinejsh,]
      returns error message 
     */

     checkBy = (input = String, key = String, subkey = String) => {
         let errormeesage = "";
         switch (key.toString().toLowerCase()) {
             case 'email':
                 if (subkey === "")
                     errormeesage = this.getErrorMessage(input, [RuleSet.Rules.Email_D.expression], [RuleSet.Rules.Email_D.message]);
                 else if (subkey === "All")
                     errormeesage = this.getErrorMessage(input, [RuleSet.Rules.Email_D.expression, RuleSet.Rules.Email_R.expression], [RuleSet.Rules.Email_R.message]);

                 else
                     errormeesage = this.getErrorMessage(input, [RuleSet.Rules.Email_R.expression], [RuleSet.Rules.Email_R.message]);
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

         return errormeesage;
     }
 }

 export default Validator;