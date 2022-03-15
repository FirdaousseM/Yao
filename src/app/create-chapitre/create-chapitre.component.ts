import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Chapitre } from '../models/chapitre.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-create-chapitre',
  templateUrl: './create-chapitre.component.html',
  styleUrls: ['./create-chapitre.component.scss']
})
export class CreateChapitreComponent implements OnInit {
  
  unChapitre = new Chapitre;

  idDuModule!: number;

  constructor(private chapitreService: DataService, private route: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.idDuModule = this.route.snapshot.params['idMod'];
    this.unChapitre.id_module = this.idDuModule;
    console.log(this.idDuModule);
    console.log(this.unChapitre.id_module);

    this.getOrdreDoc();

  }


  getOrdreDoc(){

    var ordreDoc: number;

    this.chapitreService.getOrdreDoc(this.idDuModule).subscribe((res: any) => {
      ordreDoc = res;
      ordreDoc++;
      this.unChapitre.ordre_doc = ordreDoc;
    });

  }

  createChapitre() {


    this.chapitreService.createChapitre(this.unChapitre, this.idDuModule).subscribe((res: any) => {
    });

    this.router.navigate(['/modules/'+ this.idDuModule +'/edit/content']);

  }


}
