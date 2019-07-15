import { Component, OnInit } from '@angular/core';
import {environment} from '@environment';

@Component({
  selector: 'app-customer-login',
  templateUrl: environment.mobile ? './customer-login.component.mobile.html' : './customer-login.component.html',
  styleUrls: [ (environment.mobile) ? './customer-login.component.mobile.scss' : './customer-login.component.scss']
})
export class CustomerLoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
