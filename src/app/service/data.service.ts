import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../models/module.model';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  adresse: string = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  // get all modules
  getAllModulesData() {
    return this.httpClient.get(this.adresse + 'modules');
  }
  // get 1 module par ID
  getModuleById(id: number) {
    return this.httpClient.get(this.adresse + 'modules/' + id);
  }

  // create module
  createModule(donneeModule: Module) {
    return this.httpClient.post(this.adresse + 'modules/create', donneeModule);
  }

  // update module
  updateModule(donneeModule: Module, id: number) {
    return this.httpClient.put(this.adresse + 'modules/' + id + '/edit', donneeModule);
  }

  // update module
  deleteModule(id: number) {
    return this.httpClient.delete(this.adresse + 'modules/' + id + '/edit');
  }


}
