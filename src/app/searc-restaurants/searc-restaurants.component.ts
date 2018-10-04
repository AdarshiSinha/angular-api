import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-searc-restaurants',
  templateUrl: './searc-restaurants.component.html',
  styleUrls: ['./searc-restaurants.component.css']
})
export class SearcRestaurantsComponent implements OnInit {

  EnterLocation:string="Enter location";
  EnterCuisine:string="Enter cuisine";
  //name1: string="Sally";
  // response:any;
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res:any =[];


  constructor(private httpClient: HttpClient ) { }

  ngOnInit() {
  }
  enter(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


  this.httpClient.get(this.LIVE_URI+"/search?q="+this.EnterLocation+"&cuisines="+this.EnterCuisine,
    httpOptions).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant
      })
    })

  }
  sendData(res1:any) {
    // const body = JSON.stringify(newStock);
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'user-key': '9afe5ae2561b8091f5118177b4848b35'
    //   })
    // };


    // return this.httpClient.post('https://the-bicycle-shop.firebaseio.com/products/Bicycles/bmx.json', body,httpOptions)
    //     .map((data: Response) => db.json());

        this.httpClient.post("http://localhost:3000/posts",res1).subscribe(
            data => {
                console.log("POST Request is successful ");
            }

        );
}

}
