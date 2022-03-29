import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../service/data.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit{
  

  constructor(private router:Router, private userService:TokenService) { }

  user = new User;

  ngOnInit(): void {
  }

  //user = new User;



connexion() {
  
  this.userService.connexion(this.user);
}


}
