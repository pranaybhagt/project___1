import { AbstractControl,ValidationErrors } from "@angular/forms";

export function passwordValidator(control:AbstractControl):ValidationErrors | null{

    console.log("CondirmPasword::::",control.value);

    const password = control.value;
    const confirmPassword = control.root.get('password')?.value;

    if(password == '' || confirmPassword == '' ||(password == confirmPassword)){
        return null;

    }else{
        return {'passwordMismatch':true}

    }
    

   
}