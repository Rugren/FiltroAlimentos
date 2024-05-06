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

export class FiltrosComponent implements OnInit {
  desserts: Dessert[] = [
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 3},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 7},
  ];

  // sortedData: Dessert[]; // sortedData es como estaba en https://material.angular.io/components/sort/overview 
  datosOrdenados: Dessert[] = [];
  // datosOrdenados: Dessert[] | undefined; // También valdía 

  ngOnInit() {
    this.datosOrdenados = this.desserts.slice();
  }
  /* constructor() {
    this.sortedData = this.desserts.slice();
  } */

  /* "ordenarDatos" sustituido por "sortData". 
  Y "orden" sustituido por "sort".
  Como estaba en https://material.angular.io/components/sort/overview 
  sortData(sort: Sort) { */

  ordenarDatos(orden: Sort) {
    const data = this.desserts.slice();
    if (!orden.active || orden.direction === '') {
      this.datosOrdenados = data;
      return;
    }

    // sort sería orden (para tener claros los ejemplos)
    this.datosOrdenados = data.sort((a, b) => {
      // const "isAsc" renombrada a "esAscendente":
      const esAscendente = orden.direction === 'asc';
      
      switch (orden.active) {
        case 'name':
          return compare(a.name, b.name, esAscendente);
        case 'calories':
          return compare(a.calories, b.calories, esAscendente);
        case 'fat':
          return compare(a.fat, b.fat, esAscendente);
        case 'carbs':
          return compare(a.carbs, b.carbs, esAscendente);
        case 'protein':
          return compare(a.protein, b.protein, esAscendente);
        default:
          return 0;
      }
    });
  }
}

// "isAsc" renombrada aquí también a "esAscendente":
function compare(a: number | string, b: number | string, esAscendente: boolean) {
  return (a < b ? -1 : 1) * (esAscendente ? 1 : -1);
}
