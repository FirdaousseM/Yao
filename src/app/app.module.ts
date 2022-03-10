import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProgrammeComponent } from './programme/programme.component';
import { ModulesComponent } from './modules/modules.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing-module';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleModuleComponent } from './single-module/single-module.component';
import { CreateModuleComponent } from './create-module/create-module.component';
import { FormsModule } from '@angular/forms';
import { EditModuleComponent } from './edit-module/edit-module.component';



@NgModule({
  declarations: [
    AppComponent,
    ProgrammeComponent,
    ModulesComponent,
    NavbarComponent,
    AccueilComponent,
    SingleModuleComponent,
    CreateModuleComponent,
    EditModuleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
