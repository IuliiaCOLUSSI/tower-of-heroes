import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroes = [
    'Superman',
    'Wonderwoman',
    'Prettywoman',
  ];

  name = '';
  heroToAdd = '';

  addHero() {
    // this.heroes.push(this.heroToAdd);
    if (this.heroToAdd.trim().length > 0) { 
      this.heroes.push(this.heroToAdd.trim());
      this.heroToAdd = '';
     
    }else{
        alert('le nom de Heroes ne doit pas restée vide');
        }

    // if (this.heroToAdd.trim() == heroToAdd) { 
    //   this.heroes.pull(this.heroToAdd.trim());
     
    // }else{
    //     alert('le nom de Heroes déjà existe');
    //     }
      // si heroToAdd = 'Coucou';
      // alors heroToAdd.trim() = 'coucou';
      // donc si heroToAdd = '         ';
      // alors heroToAdd.trim() = ''.


  };





      // < script >
      // function check() {

      //   if (heroToAdd.length != 0) {
      //     $('#button').removeAttr('disabled');
      //   } else {
      //     $('#button').attr('disabled', 'disabled');
      //   }
      // }
      // < /script>


}

