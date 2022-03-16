import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Programme } from '../models/programme.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-programme',
  templateUrl: './create-programme.component.html',
  styleUrls: ['./create-programme.component.scss']
})
export class CreateProgrammeComponent implements OnInit {

  constructor(private programmeService: DataService, private route: ActivatedRoute, private router: Router) { }

  programmeCree = new Programme;
  idProg!: number;

  ngOnInit(): void {
    this.idProg = this.route.snapshot.params['idProg']; 
    
  }

  createProgramme(): void {


    this.programmeService.createProgramme(this.programmeCree).subscribe(res => {
    });
    
    this.router.navigate(['/programmes']);

  }
}
