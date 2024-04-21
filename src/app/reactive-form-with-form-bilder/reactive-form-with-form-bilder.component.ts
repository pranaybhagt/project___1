import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-with-form-bilder',
  templateUrl: './reactive-form-with-form-bilder.component.html',
  styleUrls: ['./reactive-form-with-form-bilder.component.css']
})
export class ReactiveFormWithFormBilderComponent {

  registartionForm!:FormGroup;
  constructor(private fb:FormBuilder){


  }
  ngOnInit(){
    this.registartionForm =this.fb.group({
      name:['',[Validators.required]],
      mobileNo:['',[Validators.required]],
      email:['',[Validators.required]],
      city:['',[Validators.required]],
      address:this.fb.group({
        line1:[''],
        line2:['']
      })
    })

  }

  getData(){
   let userobj = {
    name:"karan",
    mobileNo:9890939053,
    email:"karann@gmaol.com",
    city:"gondia",
    address:{
      line1:"Karve nagar",
      line2:"Pune"
    }
   }
   this.registartionForm.setValue(userobj);
  }

  patchData(){
    let userobj = {
      name:"karan",
      mobileNo:9890939053,
      email:"karann@gmaol.com",
      // city:"gondia",
      address:{
        line1:"Karve nagar",
        line2:"Pune"
      }
     }
     this.registartionForm.patchValue(userobj);
  }

  setCity(){
    // this.registartionForm.controls?.['city'].setValue("Pune");
    this.registartionForm.get('city')?.setValue("Mumbai");
  }

  submitForm(){
    console.log(this.registartionForm.value);
    console.log(this.registartionForm);
    console.log(this.registartionForm.get('name')?.value);  //single control
    console.log(this.registartionForm.controls?.['name'].value); //single control
    console.log(this.registartionForm.get('name')?.errors);
    
    
  }
}
