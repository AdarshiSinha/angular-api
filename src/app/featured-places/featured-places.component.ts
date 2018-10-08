import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SearchRestaurantsService } from '../search-restaurants.service';


@Component({
  selector: 'app-featured-places',
  templateUrl: './featured-places.component.html',
  styleUrls: ['./featured-places.component.css']
})
export class FeaturedPlacesComponent implements OnInit {

  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res: any = [];

  constructor(private httpClient: HttpClient, private svc: SearchRestaurantsService) { }

  ngOnInit() {
  }
  enter() {

    this.svc.GetDataService(this.LIVE_URI).subscribe((val:any)=> {
      this.res=val.restaurants.map(e=> {
        return e.restaurant;
      })
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
