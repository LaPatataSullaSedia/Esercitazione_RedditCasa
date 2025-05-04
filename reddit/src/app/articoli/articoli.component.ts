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
@Input() art : articoli =  new articoli("","",0)
clickp : number = 0
clickm : number = 0
piu() : boolean
{
  if (this.clickp == 0){
    this.art.voto+= 1;
    this.clickp += 1
    this.clickm = 0
  }
  return false
}
meno() : boolean
{
  if (this.clickm == 0){
    this.art.voto-= 1;
    this.clickm += 1
    this.clickp = 0
  }
  return false
}
}
