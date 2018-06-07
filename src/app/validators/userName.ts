import { FormControl } from '@angular/forms';
import { RegUserService } from '../services/reguser.service';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from "rxjs";


export function userNameValidator(regup: RegUserService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
        return regup.checkUserName(control.value).map(
            users => {
                return (users && users.length > 0) ? { "mobNumExists": true } : null;
            }
        );
    };
} 

//     export function userNameValidator(regup: RegUserService) {
//         // return (control: FormControl) => {
//         //     let isValid = regup.checkUserName(control.value);
//         //     return observableOf(isValid === true).pipe(map(result => result ? null : {
//         //         userTaken: {
//         //             valid: false
//         //         }
//         //     };
//         // };
//     return Observable.map(control => control.value)
//         .debounceTime(320)
//         .distinctUntilChanged()
//         .map(value => {
//             if (value.length > 3) {
//                 return;
//             } else {
//                 return { pwinsecure: true };
//             }
//         })
// })
//         )
//       }
//     )
//     }