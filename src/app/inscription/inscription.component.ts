import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../service/data.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private userService: TokenService, private router:Router) { }


  user = new User;

  ngOnInit(): void {
    this.user.avatar = '../../assets/images/avatar/default.png'
  }

  inscription(): void{

    this.userService.inscription(this.user).subscribe(res =>{
      console.log(this.user);
      if (res.result) {
        this.router.navigate(['connexion']);
      }
    });

    this.router.navigate(['/']);
  }

}
