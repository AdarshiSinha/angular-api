import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchRestaurantsService {
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  location:string;
  cuisine:string;
  res_name:string;

    constructor(private httpClient: HttpClient) { }

  submitRestaurants(){
    const httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': 'c1bf65bea07e92fc99031573731c9920'
      })
    };

    return this.httpClient.get('https://developers.zomato.com/api/v2.1/search?q=location&cuisines=cuisine', httpOptions);
  }

  // submitLocalities(){

  //   const httpOpt ={
  //     headers: new HttpHeaders({
  //       // 'Content-Type': 'application/json',
  //       'user-key': 'c1bf65bea07e92fc99031573731c9920'
  //     })
  //   };
  //   return this.httpClient.get("https://developers.zomato.com/api/v2.1/geocode?lat=50&lon=50",httpOpt);
  // }

  PutDataToJSON(res_name){
    const httpOpt1={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': 'c1bf65bea07e92fc99031573731c9920'
      })
    };

    this.httpClient.get("https://developers.zomato.com/api/v2.1/search?restaurant"+this.res_name,httpOpt1);
    // return this.httpClient
    //   .post("assets/db.json", body, httpOpt1)
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }


}
