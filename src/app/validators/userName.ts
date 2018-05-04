import { AbstractControl } from '@angular/forms';
import { RegUserService } from '../services/reguser.service';

export class ValidateUserTaken {
    static createValidator(regup: RegUserService) {
        return (control: AbstractControl) => {
            return regup.checkUserName(control.value).map(res => {
                return res ? null : { userTaken: true };
            });
        };
    }
}