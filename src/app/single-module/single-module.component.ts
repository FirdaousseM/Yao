import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-single-module',
  templateUrl: './single-module.component.html',
  styleUrls: ['./single-module.component.scss']
})
export class SingleModuleComponent implements OnInit {

  unModule!: any;

  requeteModule!: any[];

  idDemande!: number;

  chapitres!: any;

  constructor(private moduleService: DataService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.idDemande = +this.route.snapshot.params['id'];
    this.getModuleByID();
  }

  getModuleByID() {
    
    this.moduleService.getModuleById(this.idDemande).subscribe((res:any) =>{
      
      this.requeteModule = res;
    })


  }
}
