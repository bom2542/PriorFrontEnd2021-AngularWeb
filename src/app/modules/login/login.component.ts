import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onSubmit() {
    if(this.form.invalid){
      return;
    }else{
      console.log("username", this.username.value)
      console.log("password", this.password.value)
    }
  }

  get username(): FormControl {
    return this.form.get("username") as FormControl;
  }

  get password(): FormControl {
    return this.form.get("password") as FormControl;
  }
}
