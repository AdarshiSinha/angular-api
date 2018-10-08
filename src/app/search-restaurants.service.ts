import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
// import {FeaturedPlacesComponent} from './featured-places/featured-places.component';

@Injectable({
  providedIn: 'root'
})
export class SearchRestaurantsService {
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  location: string;
  cuisine: string;
  res_name: string;

    constructor(private httpClient: HttpClient) { }

  submitRestaurants() {
    const httpOptions = {
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

  PutDataToJSON(res_name) {
    const httpOpt1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-key': 'c1bf65bea07e92fc99031573731c9920'
      })
    };

    this.httpClient.get('https://developers.zomato.com/api/v2.1/search?restaurant' + this.res_name, httpOpt1);
    // return this.httpClient
    //   .post("assets/db.json", body, httpOpt1)
    //   .map(this.extractData)
    //   .catch(this.handleError);
  }

  AddToCollections(res1:any){
    this.httpClient.post('http://localhost:3000/posts', res1).subscribe(
       data => {
         console.log('POST Request is successful ');
       }

     );

  }

  GetDataService(URI:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


  return this.httpClient.get(URI + '/search?q=Vijaywada',
    httpOptions);

  }

  deleteDataService(res1:any){

    this.httpClient.delete('http://localhost:3000/posts/' + res1.id).subscribe(
       data => {
       console.log('DELETE Request is successful');
      }
       );
  }

  GetData(LIVE_URL:string, EnterLocation: string, EnterCuisine: string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


  return this.httpClient.get(this.LIVE_URI + '/search?q=' + EnterLocation + '&cuisines=' + EnterCuisine,
    httpOptions);
  }

  GetDataFromDB(){
    return this.httpClient.get('http://localhost:3000/posts');
  }


}
