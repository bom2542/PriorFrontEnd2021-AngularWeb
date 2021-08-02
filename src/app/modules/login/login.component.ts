import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import { ApiService } from "../../core/service/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form : FormGroup;
  mockData : any[] = [
    {position: 1, username: 'test1234', password: '1234'}
  ];

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
    ) {}

  ngOnInit(): void {
    this.setFormGroup();
    this.getUserAll();
    this.getUserById();
  }

  getUserAll(){
    this.apiService.getUserAll().subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error);
    })
  }

  getUserById(){
    this.apiService.getUserById(1).subscribe((res) => {
      console.log(res)
    }, (error) => {
      console.log(error);
    })
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
