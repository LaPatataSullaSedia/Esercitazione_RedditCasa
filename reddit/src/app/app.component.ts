import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticoliComponent } from './articoli/articoli.component';
import { articoli } from './articoli.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticoliComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reddit';
  art : articoli[] = []

  manda(titolo : HTMLInputElement, link: HTMLInputElement) : boolean
  {
    this.art.push(new articoli(titolo.value, link.value))
    return false
  }

}
