import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ModulesComponent } from './modules/modules.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleModuleComponent } from './single-module/single-module.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditModuleComponent } from './edit-module/edit-module.component';
import { EditChapitreComponent } from './edit-chapitre/edit-chapitre.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    ModulesComponent,
    NavbarComponent,
    AccueilComponent,
    SingleModuleComponent,
    CreateModuleComponent,
    EditModuleComponent,
    EditChapitreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,  
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
