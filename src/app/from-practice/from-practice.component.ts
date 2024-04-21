import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../Validators/confirmpassword';
import {emailValidator} from '../Validators/email';

@Component({
  selector: 'app-from-practice',
  templateUrl: './from-practice.component.html',
  styleUrls: ['./from-practice.component.css']
})
export class FromPracticeComponent {

  registrationFrom!:FormGroup;
  constructor(private fb:FormBuilder){

  }

  ngOnInit(){
    this.registrationFrom = this.fb.group({
      name:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern("[a-zA-Z]{2,20}")]],
      mobileno:['',[Validators.required,Validators.pattern("[0-9]{10,10}")]],
      password:[''],
      confirmPassword:['',[Validators.required,passwordValidator]],
      email:['',[Validators.required,emailValidator]],
      address:this.fb.group({
        state:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern("[a-zA-Z]{2,20}")]],
        city:['',[Validators.required,Validators.minLength(2),Validators.maxLength(20),Validators.pattern("[a-zA-Z]{2,20}")]]

      })

    })
    this.registrationFrom.get('password')?.valueChanges.subscribe((el: any) => {
      this.registrationFrom.get('confirmPassword')?.updateValueAndValidity();
    })
  }
  saveForm(){
   console.log(this.registrationFrom);
   console.log(this.registrationFrom.value);

  }

}
