import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Hero } from '../hero/hero';
import { MatPaginator } from '@angular/material';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  config: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
 
	heroes = [
  new Hero('Windstorm', 'American Dog', 'Instead of being labeled mongrels, hybrids, or some other less endearing term, the sporty mixed-breed participants are positively termed the "All American Dog." For me, the All American Dog conjures up classic Americana images of working dogs accompanying police officers, firefighters, and military service members.'),
  new Hero('Bombasto', 'Dog Breed', 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'),
  new Hero('Windstorm', 'American Dog', 'Instead of being labeled mongrels, hybrids, or some other less endearing term, the sporty mixed-breed participants are positively termed the "All American Dog." For me, the All American Dog conjures up classic Americana images of working dogs accompanying police officers, firefighters, and military service members.'),
  new Hero('Bombasto', 'Dog Breed', 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'),
  new Hero('Windstorm', 'American Dog', 'Instead of being labeled mongrels, hybrids, or some other less endearing term, the sporty mixed-breed participants are positively termed the "All American Dog." For me, the All American Dog conjures up classic Americana images of working dogs accompanying police officers, firefighters, and military service members.'),
  new Hero('Bombasto', 'Dog Breed', 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'),
 new Hero('Windstorm', 'American Dog', 'Instead of being labeled mongrels, hybrids, or some other less endearing term, the sporty mixed-breed participants are positively termed the "All American Dog." For me, the All American Dog conjures up classic Americana images of working dogs accompanying police officers, firefighters, and military service members.'),
  new Hero('Bombasto', 'Dog Breed', 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.')
];
myHero = this.heroes[0];

  constructor() {
  
  this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.heroes.count
    };
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }


}
