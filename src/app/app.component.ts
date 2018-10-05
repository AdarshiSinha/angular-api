import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import {HttpParams} from "@angular/common/http";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'routing-intro';
  homeRoute = 'home';
  // settingsRoute= 'settings';
  params: any;

  routes = [
    {linkName: 'Home', url: 'home'},
    // {linkname:'Settings', url:'settings'}
  ];
  // customersObservable:any;
  // params = new HttpParams().set('_page', "1").set('_limit', "1");

  // this.customersObservable = this.httpClient.get("http://127.0.0.1:3000/customers", {params});


}

