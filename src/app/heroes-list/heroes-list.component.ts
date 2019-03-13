import {Hero} from './../types/hero.type';
import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {
  heroes: Hero[] = [];
  heroToAdd = '';
  selectedHero: Hero;

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroesService.getHeroes().subscribe(
      (heroes: Hero[]) => this.heroes = heroes
    );
  }

  selectHero(hero: Hero) {
    this.selectedHero = hero;
  }

  addHero() {
    // this.heroes.push(this.heroToAdd);
    if (this.heroToAdd.trim().length > 0) {
      // this.heroes.push(this.heroToAdd.trim());
      this.heroesService.createHero(this.heroToAdd).subscribe(
        (hero: Hero) => this.heroes.push(hero)
      );
      this.heroToAdd = '';
    } else {
      alert('le nom de Heroes ne doit pas restée vide');
    }
  }
}
