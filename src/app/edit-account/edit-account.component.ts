import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.scss']
})
export class EditAccountComponent implements OnInit {

  donneeUser!: any;
  user = new User();
  idUser!: number;

  constructor(private ProgrammeService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idUser = +this.route.snapshot.params['idProg'];

  }

  getUser() {
    this.ProgrammeService.getProgrammeById(this.idUser).subscribe(res => {
      this.donneeUser = res;
      this.user = this.donneeUser;
    });
  }

  updateAccount() {
    
    /*
    this.ProgrammeService.updateProgramme(this.user, this.idUser).subscribe(res => {
    });

    this.router.navigate(['/programmes/' + this.idUser]);
    */
  }

  deleteAccount() {

    /*
    this.router.navigate(['/programmes']);

    this.ProgrammeService.deleteProgramme(this.idUser).subscribe(res => {
    });
    */
  }
}
