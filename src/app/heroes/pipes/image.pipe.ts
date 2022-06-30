import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image',
  pure: true
})

// Pipes puros o inpuros
// Cuando el pipe pure esta en false, renderiza de nuevo cada que detecta cambios en los argumentos
export class ImagePipe implements PipeTransform {

  transform(hero: Hero,): string {
    if (!hero.id && !hero.alt_img) {
      return 'assets/no-image.png';
    } else if (hero.alt_img) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${hero.id}.jpg`;
    }
  }

}
