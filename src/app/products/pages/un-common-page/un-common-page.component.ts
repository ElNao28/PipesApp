import { Component } from '@angular/core';
import {interval, tap} from 'rxjs'
@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrls: ['./un-common-page.component.css']
})
export class UnCommonPageComponent {
  //i18n Select
  public name:string = "luis";
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void{
    this.name = "maria"
    this.gender = "female"
  }

  //i18nPlural
  public clients:string[] = ['maria', 'fernando', 'Luis',
  'eduardo', 'melisa', 'natalia']
  public clientsMap = {
    '=0':'no tenemos ningun cliente esperando',
    '=1':'tenemos un cliente esperando',
    '=2':'tenemos 2 clientes esperando',
    'other':'tenemos # clientes esperando',
  }
  deleteClient():void{
    this.clients.shift()
  }

  //keyValue Pipe
  public person = {
    name: 'luis',
    age: 36,
    address:'platon'
  }

  //async pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value=>console.log('tap:',value)));

  public promiseValue: Promise<string>= new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve('tenemos data en la promesa')
    },3500)
  })
}
