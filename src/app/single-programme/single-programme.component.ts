import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-single-programme',
  templateUrl: './single-programme.component.html',
  styleUrls: ['./single-programme.component.scss']
})
export class SingleProgrammeComponent implements OnInit {

  constructor(private programmeService: DataService, private route: ActivatedRoute) { }

  unProgramme!: any;

  requeteProgramme!: any[];

  idDemande!: number;

  modules!: any;

  ngOnInit(): void {

    this.requeteProgramme = new Array();
    console.log(this.requeteProgramme);

    this.idDemande = +this.route.snapshot.params['idProg'];
    this.getProgrammeByID();
  }

  getProgrammeByID() {
    
    this.programmeService.getProgrammeById(this.idDemande).subscribe((res:any) =>{
      
      this.requeteProgramme = res;
    })


  }

}
