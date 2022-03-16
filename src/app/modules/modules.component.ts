import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})


export class ModulesComponent implements OnInit {


  allModules:any;
 
  idProg!: number;


 
  constructor(private moduleService:DataService, private route: ActivatedRoute) { 
  }

  ngOnInit(): void {

    this.idProg = this.route.snapshot.params['idProg'];

    this.getAllModules();

  }

  getAllModules(){
    this.moduleService.getAllModulesData(this.idProg).subscribe(res =>{
      this.allModules = res;
    })
  }




}
