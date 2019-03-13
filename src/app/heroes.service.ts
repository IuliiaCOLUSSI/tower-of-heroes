import { Hero } from './types/hero.type';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const headers = new HttpHeaders({
  'Content-type' : 'application/json'
});


const httpOptions = { headers };

@Injectable({
  providedIn: 'root'
})



// la class
export class HeroesService {

  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient) {
  }


  // createHero(name: string): Hero {
  //   return { id: this.idToGenerate++, name };
  // }




  // Observable<Hero[]>désigne un Observable qui
  // retournera plus tard un tableau de Hero. Le lien
  // entre Observable et Hero[] est exprimé grace
  // a a généracite (la presence de chevrons <>)
  getHeroes(): Observable<Hero[]> {
    // la généracité permet aussi de dire à notre
    // cliente http qui lui demandons de créer
    // un Observable qui nous renverra un tableau de héros
    return this.http.get<Hero[]>(this.heroesUrl);
  }

  createHero(name: string): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, { name }, httpOptions);
  }

  getHeroById(id: number): Observable<Hero> {
    return this.http.get<Hero>(this.heroesUrl + '/' + id);
  }

    // for (const hero of this.heroes) {
    //     if (id === hero.id) {
    //       return hero;
    //     }
    //   }
    //   return null;
  }

