import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Module } from '../models/module.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  constructor(private moduleService: DataService, private router: Router) { }

  moduleCree = new Module;

  ngOnInit(): void {
  }

  createModule(): void {


    this.moduleService.createModule(this.moduleCree).subscribe(res => {
    });
    
    this.router.navigate(['/modules']);

  }
}
