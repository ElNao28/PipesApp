import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {
  public nameLower:string = 'luis';
  public nameUpper:string = 'LUIS';
  public fullName:string = 'lUiS JaIr';

  public customDate:Date = new Date();

}
