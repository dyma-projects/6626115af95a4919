import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrl: './exercice1.component.css'
})
export class Exercice1Component {
  public titre : string = '';
  public titreHidden : boolean = false;

  changeValue(boolean:boolean):void{
    this.titreHidden = boolean;
  }
}
