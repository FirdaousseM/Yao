import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Programme } from '../models/programme.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-programme',
  templateUrl: './edit-programme.component.html',
  styleUrls: ['./edit-programme.component.scss']
})
export class EditProgrammeComponent implements OnInit {

  donneeProgramme!: any;
  leProgramme = new Programme();
  idProgramme!: number;

  constructor(private ProgrammeService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.idProgramme = +this.route.snapshot.params['idProg'];


  }

  getProgrammeById() {
    this.ProgrammeService.getProgrammeById(this.idProgramme).subscribe(res => {
      this.donneeProgramme = res;
      this.leProgramme = this.donneeProgramme;
    });
  }

  updateProgramme() {
    
    this.ProgrammeService.updateProgramme(this.leProgramme, this.idProgramme).subscribe(res => {
    });

    this.router.navigate(['/programmes/' + this.idProgramme]);

  }

  deleteProgramme() {


    this.router.navigate(['/programmes']);

    this.ProgrammeService.deleteProgramme(this.idProgramme).subscribe(res => {
    });
  }

}
