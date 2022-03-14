import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapitre } from '../models/chapitre.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-edit-chapitre',
  templateUrl: './edit-chapitre.component.html',
  styleUrls: ['./edit-chapitre.component.scss']
})
export class EditChapitreComponent implements OnInit {

  constructor(private chapitreService: DataService, private route: ActivatedRoute, private router: Router) { }

  idDuModule!: number;
  idDuChapitre!: number;

  adresseActu!: String;

  chapitresDuMod!: any[];
  unChapitre!: any;

  chapitreForm = new FormGroup({
    titreForm: new FormControl(''),
    contenuForm: new FormControl(''),
  });

  ngOnInit(): void {
    this.idDuModule = +this.route.snapshot.params['idMod'];

    this.getAllChapitreEditable()

    this.chapitreForm.controls['titreForm'].disable();
    this.chapitreForm.controls['contenuForm'].disable();

    this.adresseActu = this.router.url;

  }

  getAllChapitreEditable() {
    this.chapitreService.getChapitreEditable(this.idDuModule).subscribe((res: any) => {
      this.chapitresDuMod = res;
    });



  }

  createChapitre() {
    this.chapitreService.createChapitre(this.unChapitre, this.idDuModule).subscribe((res: any) => {
    });
  }

  updateChapitre() {

    this.getUnChapitre();

    console.log(this.idDuChapitre);
    this.chapitreService.updateChapitre(this.unChapitre, this.idDuChapitre).subscribe((res: any) => {
    });



  }

  deleteChapitre() {
    this.getUnChapitre();
    this.chapitreService.deleteChapitre(this.idDuModule, this.idDuChapitre).subscribe((res: any) => {
    });
    
  }

  getUnChapitre() {
    this.idDuChapitre = +this.route.snapshot.params['idChap'];

    console.log(this.idDuModule);
    console.log(this.idDuChapitre);
    this.chapitreService.getChapitre(this.idDuModule, this.idDuChapitre).subscribe((res: any) => {
      this.unChapitre = res;
    });

    console.log(this.unChapitre.id);
  }

  chapEstModifiable(idChapActuelle: number) {

    if (this.route.snapshot.params['idChap'] !== null) {
      var idChap = this.route.snapshot.params['idChap'];
      if (idChap === idChapActuelle)
        return true;
    }
    return false;
  }

  setChapEstModifiable() {

    if (!this.chapitreForm.controls['titreForm'].disabled)
      this.chapitreForm.controls['titreForm'].disable();
    else
      this.chapitreForm.controls['titreForm'].enable();
    if (!this.chapitreForm.controls['contenuForm'].disabled)
      this.chapitreForm.controls['contenuForm'].disable();
    else
      this.chapitreForm.controls['contenuForm'].enable();

  }
}
