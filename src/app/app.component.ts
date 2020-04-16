import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
jsondatavalue : string;

  constructor(private fb : FormBuilder)
  {}

  registrationForm=this.fb.group({
    name : ['', Validators.required],
    dob :['', Validators.required],
    address : ['', Validators.required],
  });

 
  onSubmit()
  {
    this.jsondatavalue=this.registrationForm.value;
  }



}
