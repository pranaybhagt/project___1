import { AbstractControl,ValidationErrors } from "@angular/forms";

export function emailValidator(control:AbstractControl):ValidationErrors | null{

    console.log("CondirmPasword::::",control.value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Check if the control value matches the email regex pattern
    const isValid = emailRegex.test(control.value);

    // Return validation result
    return isValid ? null : { 'invalidEmail': true };

    

   
}