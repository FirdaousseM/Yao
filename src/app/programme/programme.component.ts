import { Component, OnInit} from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit{

  banniere!: string;
  titre!: string;
  nbModule!: number;
  description!: string;

  allProgrammes:any;

  constructor(private programmeService : DataService) {}

  ngOnInit(): void {

    this.banniere = "https://cdn.pixabay.com/photo/2015/04/19/08/33/flower-729512_960_720.jpg";
    this.titre = "apprendre le java";
    //this.nbModule = 5;
    this.description = "Ce programme vous initiera à la poo en java";

    this.getAllProgrammes();
  }

  getAllProgrammes(){
    this.programmeService.getAllProgrammesData().subscribe(res =>{
      this.allProgrammes = res;
    })
  }

}
