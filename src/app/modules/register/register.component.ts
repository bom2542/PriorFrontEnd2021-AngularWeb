import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../../core/service/api.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  UserList : any[] = [];
  GetUserList : any[] = [];
  Name : string
  Avatar : string
  Mobile : string
  Email : string

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.setFormGroup();
    this.getUserAll();
  }

  getUserAll(){
    this.apiService.getUserAll().subscribe((res) => {
      this.UserList = res
    }, (error) => {
      console.log(error);
    })
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  onSubmit() {
    if (confirm('Are you sure you want to save ?')) {
      if (this.form.invalid) {
        return;
      } else {
        this.UserList.push({ name: this.name.value, email: this.email.value, mobile: this.mobile.value, avatar : this.Avatar });
      }
    } else {
      alert('Thing was not saved !!!');
    }
  }

  get name(): FormControl {
    return this.form.get("name") as FormControl;
  }

  get email(): FormControl {
    return this.form.get("email") as FormControl;
  }

  get mobile(): FormControl {
    return this.form.get("mobile") as FormControl;
  }

  GetName($event : string){
    this.Name = $event
  }

  GetAvatar($event : string){
    this.Avatar = $event
  }

  GetMobile($event : string){
    this.Mobile = $event
  }

  GetEmail($event : string){
    this.Email = $event
  }

}

