import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'textos y fechas',
            icon: 'pi pi-align-left',
            routerLink:'**'
          },
          {
            label: 'numeros',
            icon: 'pi pi-dollar',
            routerLink:'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink:'uncommon'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items:[{
          label: 'Custom pipes',
          icon: 'pi pi-cog',
          routerLink:'custom'
        }]
      }
    ];
  }
}
