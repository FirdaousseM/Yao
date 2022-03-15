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

  constructor(private moduleService : DataService, private route: ActivatedRoute, private router: Router) { }


  leModule!: any;
  idModule!: number;

  ngOnInit(): void {
    this.idModule = +this.route.snapshot.params['id'];

    this.moduleService.getModuleById(this.idModule).subscribe(res => {
      this.leModule = res;
    });
  }

  updateModule(){
    this.router.navigate(['/modules']);

    this.moduleService.updateModule(this.leModule, this.idModule).subscribe(res => {
    });
  }

  deleteModule(){

    this.router.navigate(['/modules']);

    this.moduleService.deleteModule(this.idModule).subscribe(res => {
    });
  }

  

}
