import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Module } from '../models/module.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-module',
  templateUrl: './create-module.component.html',
  styleUrls: ['./create-module.component.scss']
})
export class CreateModuleComponent implements OnInit {

  constructor(private moduleService: DataService, private route: ActivatedRoute, private router: Router) { }

  moduleCree = new Module;
  idProg!: number;

  ngOnInit(): void {
    this.idProg = this.route.snapshot.params['idProg']; 
    
  }

  createModule(): void {

    this.moduleCree.id_programme = this.idProg;

    console.log("l'id programme regarde : "+this.moduleCree.id_programme);
    console.log("le programme regarde : "+this.moduleCree);


    this.moduleService.createModule(this.idProg, this.moduleCree).subscribe(res => {
    });
    
    this.router.navigate(['/programmes/' + this.idProg]);
                
  }
}
