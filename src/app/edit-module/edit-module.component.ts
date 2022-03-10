import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Module } from '../models/module.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.scss']
})
export class EditModuleComponent implements OnInit {

  constructor(private dataService : DataService,
    private route: ActivatedRoute) { }

  leModule!: any;
  idModule!: number;

  ngOnInit(): void {
    this.idModule = +this.route.snapshot.params['id'];

    this.dataService.getModuleById(this.idModule).subscribe(res => {
      this.leModule = res;
    });
  }

  updateModule(){
    this.dataService.updateModule(this.leModule, this.idModule).subscribe(res => {
    });
  }

  deleteModule(){
    this.dataService.deleteModule(this.idModule).subscribe(res => {
    });
  }

  

}
