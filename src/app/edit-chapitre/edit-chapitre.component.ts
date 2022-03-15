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


  ngOnInit(): void {
    this.idDuModule = +this.route.snapshot.params['idMod'];

    if (+this.route.snapshot.params['idChap'] !== null)
      this.idDuChapitre = +this.route.snapshot.params['idChap'];


    this.getAllChapitreEditable()


    this.adresseActu = this.router.url;

  }

  getAllChapitreEditable() {
    this.chapitreService.getChapitreEditable(this.idDuModule).subscribe((res: any) => {
      this.chapitresDuMod = res;
    });
  }


  updateChapitre() {

    this.getUnChapitre();

    this.router.navigate(['/modules/'+ this.idDuModule +'/edit/content']);
    
    console.log(this.idDuChapitre);
    this.chapitreService.updateChapitre(this.unChapitre, this.idDuChapitre).subscribe((res: any) => {
    });



  }

  deleteChapitre() {
    
    this.router.navigate(['/modules/'+ this.idDuModule +'/edit/content']);

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

  affichageAllChapModifiable() {
    return this.adresseActu === '/modules/' + this.idDuModule + '/edit/content';
  }

}
