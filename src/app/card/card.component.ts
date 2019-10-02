import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
	heroes = [
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado'),
  new Hero(1, 'Windstorm'),
  new Hero(13, 'Bombasto'),
  new Hero(15, 'Magneta'),
  new Hero(20, 'Tornado')
];
myHero = this.heroes[0];


  constructor() {
  
   }

  ngOnInit() {
  }

}
