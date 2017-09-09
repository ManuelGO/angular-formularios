import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PassValidators {
    static shouldBeOldPass(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(control.value != 'abc'){
                    resolve({ shouldBeOldPass: true})
                } else {
                    resolve(null);
                }
            }, 2000);    
        })     

    }

    static shouldBeTheSame(control: AbstractControl){
        let newpass = control.get('newpass');
        let confirmpass = control.get('confirmpass');
        
                if(newpass.value !== confirmpass.value){
                    return{ shouldBeTheSame: true};
                }
                    return  null   
    }    
}

// import { AbstractControl } from '@angular/forms';

// export class PassValidators {
//     static shouldBeOldPass(control: AbstractControl) {
//         return new Promise((resolve) => {
//             if (control.value !== 'abc')
//                 resolve({ shouldBeOldPass: true });
//             else
//                 resolve(null);
//         });
//     }

//     static shouldBeTheSame(control: AbstractControl) {
//         let newpass = control.get('newpass');
//         let confirmpass = control.get('confirmpass');

//         if (newpass.value !== confirmpass.value)
//             return { shouldBeTheSame: true };
        
//         return null;
//     }
// } 