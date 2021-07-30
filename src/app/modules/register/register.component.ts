import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  mockData : any[] = [
    { firstname: 'Pharadorn', surname: 'Boonruam', email: 'bom@bom.com', mobile: '094-9015032' },
    { firstname: 'Prayuth', surname: 'Wongsuwan', email: 'yuth@bom.com', mobile: '1988' }
  ]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setFormGroup();
  }

  setFormGroup() {
    this.form = this.formBuilder.group({
      firstname: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, Validators.required],
      mobile: [null, Validators.required],
    });
  }

  onSubmit() {
    if(this.form.invalid){
      return;
    }else{
      this.mockData.push({ firstname: this.firstname.value, surname: this.surname.value, email: this.email.value, mobile: this.mobile.value });
      console.log(this.mockData)
    }
  }

  get firstname(): FormControl {
    return this.form.get("firstname") as FormControl;
  }

  get surname(): FormControl {
    return this.form.get("surname") as FormControl;
  }

  get email(): FormControl {
    return this.form.get("email") as FormControl;
  }

  get mobile(): FormControl {
    return this.form.get("mobile") as FormControl;
  }

}

