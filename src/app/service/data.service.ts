import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../models/module.model';
import { Chapitre } from '../models/chapitre.model';
import { Programme } from '../models/programme.model';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  adresse: string = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }

  /** PROGRAMMEs **/
  
  // get all modules
  getAllProgrammesData() {
    return this.httpClient.get(this.adresse + 'programmes');
  }

  
  // get 1 module par ID
  getProgrammeById(idProg: number) {
    return this.httpClient.get(this.adresse + 'programmes/' + idProg);
  }

  // create module
  createProgramme(donneeProgrammes: Programme) {
    return this.httpClient.post(this.adresse + 'programmes/create', donneeProgrammes);
  }

  // update module
  updateProgramme(donneeProgrammes: Programme, idProg: number) {
    return this.httpClient.put(this.adresse + 'programmes/' + idProg + '/edit', donneeProgrammes);
  }

  // delete module
  deleteProgramme(idProg: number) {
    return this.httpClient.delete(this.adresse + 'programmes/' + idProg + '/edit');
  }

  /** MODULE **/

  // get all modules
  getAllModulesData(idProg: number) {
    return this.httpClient.get(this.adresse + 'programmes/' + idProg + '/modules');
  }
  // get 1 module par ID
  getModuleById(idProg: number, idMod: number) {
    return this.httpClient.get(this.adresse + 'programmes/' + idProg + '/modules/' + idMod);
  }

  // create module  
  createModule(idProg: number, donneeModule: Module) {
    return this.httpClient.post(this.adresse + 'programmes/' + idProg + '/modules/create', donneeModule);
  }

  // update module
  updateModule(idProg: number, donneeModule: Module, idMod: number) {
    return this.httpClient.put(this.adresse + 'programmes/' + idProg + '/modules/' + idMod + '/edit', donneeModule);
  }

  // delete module
  deleteModule(idProg: number, idMod: number) {
    return this.httpClient.delete(this.adresse + 'programmes/' + idProg + '/modules/' + idMod + '/edit');
  }

  /** CHAPITRE **/

  // get all chapitres
  getChapitreEditable(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content');
  }
  // get 1 chapitre by id
  getChapitre(idMod: number, idChap: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap);
  }
  // create chapitre
  createChapitre(donneeChapitre: Chapitre, idMod: number) {
    return this.httpClient.post(this.adresse + 'modules/' + idMod + '/edit/content/create', donneeChapitre);
  }
  // update chapitre
  updateChapitre(donneeChapitre: Chapitre, idMod: number, idChap: number) { 
    return this.httpClient.put(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap, donneeChapitre);
  }
  // delete chapitre
  deleteChapitre(idMod: number, idChap: number) {
    return this.httpClient.delete(this.adresse + 'modules/' + idMod + '/edit/content/' + idChap);
  }
  // get ordreDoc
  getOrdreDoc(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod + '/edit/content/create');
  }
  
}
