import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Module } from '../models/module.model';
import { Chapitre } from '../models/chapitre.model';
import { Programme } from '../models/programme.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  adresse: string = 'http://127.0.0.1:8000/api/';

  constructor(private httpClient: HttpClient) { }




  /** ACCOUNT **/

  // inscription
  inscription(donneeUser: User) {
    return this.httpClient.post(this.adresse + 'register', donneeUser);
  }

  // connexion
  connexion(donneeUser: User) {
    return this.httpClient.post(this.adresse + 'login', donneeUser);
  }

  // déconnexion
  deconnexion(donneeUser: User) {
    return this.httpClient.post(this.adresse + 'logout', donneeUser);
  }

  // get account infos
  getAccount() {
    return this.httpClient.get(this.adresse + 'account');
  }


  /** PROGRAMME **/

  // get all programmes
  getAllProgrammesData() {
    return this.httpClient.get(this.adresse + 'programmes');
  }


  // get 1 programme par ID
  getProgrammeById(idProg: number) {
    return this.httpClient.get(this.adresse + 'programmes/' + idProg);
  }

  // create programme
  createProgramme(donneeProgrammes: Programme) {
    return this.httpClient.post(this.adresse + 'programmes/create', donneeProgrammes);
  }

  // update programme
  updateProgramme(donneeProgrammes: Programme, idProg: number) {
    return this.httpClient.put(this.adresse + 'programmes/' + idProg + '/edit', donneeProgrammes);
  }

  // delete programme
  deleteProgramme(idProg: number) {
    return this.httpClient.delete(this.adresse + 'programmes/' + idProg + '/edit');
  }


  /** MODULE **/

  // get all modules
  getAllModulesData(idProg: number) {
    return this.httpClient.get(this.adresse + 'programmes/' + idProg + '/modules');
  }
  // get 1 module par ID
  getModuleById(idMod: number) {
    return this.httpClient.get(this.adresse + 'modules/' + idMod);
  }

  // create module  
  createModule(idProg: number, donneeModule: Module) {
    return this.httpClient.post(this.adresse + 'modules/create', donneeModule);
  }

  // update module
  updateModule(idProg: number, donneeModule: Module, idMod: number) {
    return this.httpClient.put(this.adresse + 'modules/' + idMod + '/edit', donneeModule);
  }

  // delete module
  deleteModule(idProg: number, idMod: number) {
    return this.httpClient.delete(this.adresse + 'modules/' + idMod + '/edit');
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
