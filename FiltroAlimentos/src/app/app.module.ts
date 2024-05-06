import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { bootstrapApplication } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
    declarations: [
        AppComponent,
        // FiltrosComponent // Este dejar comentado para que funcione.
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatTableModule,
        MatSortModule,
        A11yModule,
        // Si quito FiltrosComponent, en app.component.html no lee el <app-filtros> 
        FiltrosComponent 
    ]
})
export class AppModule { }
