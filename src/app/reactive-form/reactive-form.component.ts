import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  registrationForm!:FormGroup

  ngOnInit(){
    //structure of form
    this.registrationForm = new FormGroup({   // this form group has multiple form controls
      name:new FormControl('',),
      mobileNo: new FormControl(''),
      email: new FormControl(''),
      city:new FormControl('')
    })
  }
  submitForm(){
    console.log(this.registrationForm.value);
    
  }

}
