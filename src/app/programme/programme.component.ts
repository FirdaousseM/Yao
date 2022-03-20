import { Component, OnInit} from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-programme',
  templateUrl: './programme.component.html',
  styleUrls: ['./programme.component.scss']
})
export class ProgrammeComponent implements OnInit{

  imageUrl!: string;
  nbModule!: number;

  allProgrammes:any;

  constructor(private programmeService : DataService) {}

  ngOnInit(): void {

    //this.nbModule = 5;

    this.getAllProgrammes();
  }

  getAllProgrammes(){
    this.programmeService.getAllProgrammesData().subscribe(res =>{
      this.allProgrammes = res;
    })
  }

}
