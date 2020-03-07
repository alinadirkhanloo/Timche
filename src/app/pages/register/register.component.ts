import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, ) { }
  emailError = false;
  passError = false;
  validatingForm: FormGroup;

  ngOnInit() {
    this.validatingForm = this.formBuilder.group({
      modalFormDarkEmail: new FormControl('', [Validators.email,Validators.required]),
      modalFormDarkPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }


  get modalFormDarkEmail() {
    return this.validatingForm.get('modalFormDarkEmail');
  }

  get modalFormDarkPassword() {
    return this.validatingForm.get('modalFormDarkPassword');
  }
  get f() { return this.validatingForm.controls; }

  signUp() {
  //   if (this.f.invalid) {
  //     if (this.f.Password.invalid) {
  //       this.passError = true;
  //     } else {
  //       this.passError = false;
  //     }


  //     if (this.f.Email.invalid) {
  //       this.passError = true;
  //       document.getElementById('Form-pass5').className += ' invalid';
  //     }
  //   }
  }

}
