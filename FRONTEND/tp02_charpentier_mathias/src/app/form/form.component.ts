import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  user: {
    gender: string;
    name: string;
    forName: string;
    zip: string;
    city: string;
    country: string;
    address: string;
    phone: string;
    email: string;
    login: string;
    password: string;
  } = {
    gender: '',
    name: '',
    forName: '',
    zip: '',
    city: '',
    country: '',
    address: '',
    phone: '',
    email: '',
    login: '',
    password: ''
  }

  invalidName: boolean = false;
  invalidForName: boolean = false;

  invalidZip: boolean = false;
  invalidCity: boolean = false;

  invalidPhoneNumber: boolean = false;
  invalidEmail: boolean = false;

  isFull: boolean = false;

  info_output = false

  onSubmit() {
    if(!this.invalidName && !this.invalidForName
       && !this.invalidZip && !this.invalidCity
      && !this.invalidEmail && !this.invalidPhoneNumber
      && this.isFull) this.info_output = true;
  }

  isNameValid(){
    const lastNameRegex = /[a-zéèàêûîôäëüïö-]{2,29}$/;
    this.invalidName = !lastNameRegex.test(this.user.name);
  }

  isForNameValid(){
    const forNameRegex = /[a-zéèàêûîôäëüïö-]{2,29}$/;
    this.invalidForName= !forNameRegex.test(this.user.forName);
  }

  isZipValid() {
    const zipRegex = /^[0-9]{5}$/;
    this.invalidZip = !zipRegex.test(this.user.zip)
  }

  isCityValid() {
    const cityRegex = /[a-zéèàêûîôäëüïö-]{2,29}$/;
    this.invalidCity = !cityRegex.test(this.user.city);
  }

  isEmailValid() {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.invalidEmail = !emailRegex.test(this.user.email)
  }

  isPhoneNumberValid() {
    const phoneNumberRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    this.invalidPhoneNumber = !phoneNumberRegex.test(this.user.phone);
}

isFormFull(){
  if (this.user.gender != "" && this.user.name != '' && this.user.forName != '' && this.user.zip != '' &&
  this.user.city != '' && this.user.country != '' && this.user.address != '' && this.user.phone != ''
  && this.user.email != '' && this.user.login != '' && this.user.password != "") this.isFull = true;
}

  
}
