import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { SearchRestaurantsService} from '../search-restaurants.service';


@Component({
  selector: 'app-show-collections',
  templateUrl: './show-collections.component.html',
  styleUrls: ['./show-collections.component.css']
})
export class ShowCollectionsComponent implements OnInit {

  constructor(private httpClient: HttpClient , private svc: SearchRestaurantsService) { }
  res: any = [];
  resturants = [];
  clicked = false;

  ngOnInit() {
    this.showCollections();
  }
  showCollections() {
    this.clicked = !this.clicked;
    console.log('called showCollections');


    // this.httpClient.get('http://localhost:3000/posts').subscribe((val: any) => {
    //   this.resturants = val;
    //   console.log(this.resturants);
    //   });

      this.svc.GetDataFromDB().subscribe((val: any) => {
        this.resturants = val;
        console.log(this.resturants);
        });
  }


deleteData(res1: any) {
  // this.httpClient.delete('http://localhost:3000/posts/' + res1.id).subscribe(
  //   data => {
  //     console.log('DELETE Request is successful');
  //   }
  // );
  this.svc.deleteDataService(res1);


}

  }
