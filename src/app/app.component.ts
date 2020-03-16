import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <H1>{{title}}</H1>
    <H2>My favorite hero is: {{myHero}}</H2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{hero}}
      </li>
    </ul>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  myHero = this.heroes[0];
}
