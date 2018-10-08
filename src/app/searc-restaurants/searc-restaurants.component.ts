import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SearchRestaurantsService } from '../search-restaurants.service';

@Component({
  selector: 'app-searc-restaurants',
  templateUrl: './searc-restaurants.component.html',
  styleUrls: ['./searc-restaurants.component.css']
})
export class SearcRestaurantsComponent implements OnInit {

  EnterLocation = 'Enter location';
  EnterCuisine = 'Enter cuisine';
  // name1: string="Sally";
  // response:any;
  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res: any = [];


  constructor(private httpClient: HttpClient , private svc: SearchRestaurantsService ) { }

  ngOnInit() {
  }
  enter() {


    this.svc.GetData(this.LIVE_URI,this.EnterLocation, this.EnterCuisine ).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant;
      });
    });

  }
  sendData(res1: any) {


        // this.httpClient.post('http://localhost:3000/posts', res1).subscribe(
        //     data => {
        //         console.log('POST Request is successful ');
        //     }

        // );
        this.svc.AddToCollections(res1);

}

}
