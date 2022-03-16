import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../models/module.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {

  donneeModule!: any;
  leModule = new Module();
  idModule!: number;
  idProg!: number;

  constructor(private moduleService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.idModule = +this.route.snapshot.params['idMod'];
    this.idProg = +this.route.snapshot.params['idProg'];


  }

  getModuleById() {
    this.moduleService.getModuleById(this.idProg, this.idModule).subscribe(res => {
      this.donneeModule = res;
      this.leModule = this.donneeModule;
    });
  }

  updateModule() {
    
    this.moduleService.updateModule(this.idProg, this.leModule, this.idModule).subscribe(res => {
    });

    this.router.navigate(['/programmes/' + this.idProg + '/modules/' + this.idModule]);

  }

  deleteModule() {


    this.router.navigate(['/programmes/' + this.idProg + '/modules']);

    this.moduleService.deleteModule(this.idProg, this.idModule).subscribe(res => {
    });



  }


 
}
