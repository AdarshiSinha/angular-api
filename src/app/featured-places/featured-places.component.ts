import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-featured-places',
  templateUrl: './featured-places.component.html',
  styleUrls: ['./featured-places.component.css']
})
export class FeaturedPlacesComponent implements OnInit {

  LIVE_URI = 'https://developers.zomato.com/api/v2.1';
  res: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  enter() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


  this.httpClient.get(this.LIVE_URI + '/search?q=Vijaywada',
    httpOptions).subscribe((val: any) => {
      this.res = val.restaurants.map(e => {
        return e.restaurant;
      });
    });

  }
  sendData(res1: any) {


        this.httpClient.post('http://localhost:3000/posts', res1).subscribe(
            data => {
                console.log('POST Request is successful ');
            }

        );
}

}
