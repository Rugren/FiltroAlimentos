/* import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {

} */

import {Component, OnInit} from '@angular/core';
import {Sort, MatSortModule} from '@angular/material/sort';

// export interface Dessert {
interface Dessert {
  name: string;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css',
  
  standalone: true,
  imports: [MatSortModule],
})

// export class FiltrosComponentModule { }

/* export class AppComponent {
  title = 'FiltroAlimentos';
}  */

export class FiltrosComponent implements OnInit {
  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  // sortedData sería datosOrdenados
  // sortedData: Dessert[];
  sortedData: Dessert[] = [];


  ngOnInit() {
    this.sortedData = this.desserts.slice();
  }
  /* constructor() {
    this.sortedData = this.desserts.slice();
  } */

  // sortedData sería ordenarDatos 
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    // sort sería orden (para tener claros los ejemplos)
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
