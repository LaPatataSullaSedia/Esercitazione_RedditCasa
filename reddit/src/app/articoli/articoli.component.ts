import { Component, Input } from '@angular/core';
import { articoli } from '../articoli.model';

@Component({
  selector: 'app-articoli',
  standalone: true,
  imports: [],
  templateUrl: './articoli.component.html',
  styleUrl: './articoli.component.css'
})
export class ArticoliComponent {
@Input() art : articoli =  new articoli("","")
}
