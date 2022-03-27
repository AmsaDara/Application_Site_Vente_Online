import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullusername: [null, Validators.required],
    email: [null, Validators.required],
    password: [null, Validators.required],
    phone: null,
    city: null
    
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    alert(JSON.stringify(this.registerForm.value,undefined,3));
  }

}
