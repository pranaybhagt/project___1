import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent {

  registartionForm!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(){
    this.registartionForm =this.fb.group({
      name:['',[Validators.required, Validators.minLength(2), Validators.maxLength(50), Validators.pattern("[a-zA-Z]{2,50}")]],
      mobileNo:['',[Validators.required,Validators.pattern("[0-9]{10,10}")]],
      email:['',],
      city:['',],
      address:this.fb.group({
        line1:[''],
        line2:['']
      })
    })

  }
  submitForm(){
    if(this.registartionForm.valid){
      console.log("form value",this.registartionForm.value);
      console.log(this.registartionForm);
      
      
    }

  }
}
