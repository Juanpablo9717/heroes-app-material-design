import { Component, Input } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card-component',
  templateUrl: './hero-card-component.component.html',
  styles: [`
    mat-card {
      margin-top: 20px;
    }
  `]
})

export class HeroCardComponentComponent {

  @Input() hero!: Hero;

}
