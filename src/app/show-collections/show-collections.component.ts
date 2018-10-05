import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-show-collections',
  templateUrl: './show-collections.component.html',
  styleUrls: ['./show-collections.component.css']
})
export class ShowCollectionsComponent implements OnInit {

  constructor(private httpClient: HttpClient ) { }
  res:any=[];
  resturants=[];
  clicked:boolean=false;

  ngOnInit() {
    this.showCollections();
  }
  showCollections(){
    this.clicked=!this.clicked;
    console.log('called showCollections');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


    this.httpClient.get("http://localhost:3000/posts").subscribe((val: any) => {
      this.resturants = val;
      console.log(this.resturants);
      })
  }

  sendData(res1:any) {
    // const body = JSON.stringify(newStock);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'user-key': '9afe5ae2561b8091f5118177b4848b35'
      })
    };


    // return this.httpClient.post('https://the-bicycle-shop.firebaseio.com/products/Bicycles/bmx.json', body,httpOptions)
    //     .map((data: Response) => db.json());

        this.httpClient.post("http://localhost:3000/posts",res1).subscribe(
            data => {
                console.log("POST Request is successful ");
            }

        );
}

deleteData(res1:any) {
  this.httpClient.delete("http://localhost:3000/posts/"+res1.id).subscribe(
    data=> {
      console.log("DELETE Request is successful");
    }
  );

}

  }
