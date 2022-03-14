import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})


export class ModulesComponent implements OnInit {


  allModules:any;
 


 
  constructor(private moduleService:DataService) { 
  }

  ngOnInit(): void {
    this.getAllModules();
  }

  getAllModules(){
    this.moduleService.getAllModulesData().subscribe(res =>{
      this.allModules = res;
    })
  }




}
