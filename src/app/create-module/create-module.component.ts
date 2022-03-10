import { Component, Input, OnInit } from '@angular/core';
import { Module } from '../models/module.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  constructor(private dataService: DataService) { }

  moduleCree = new Module;

  ngOnInit(): void {
  }

  createModule(): void {
    this.dataService.createModule(this.moduleCree).subscribe(res => {
      console.log(res);
    })
  }
}
