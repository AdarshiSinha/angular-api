import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {SearchRestaurantsService} from '../search-restaurants.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  res_name:string;

  constructor(private x: SearchRestaurantsService) { }

  ngOnInit() {
  }

  AddToCollection()
  {
      // x.pot()
  }


}
