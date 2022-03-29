import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-navbar-account',
  templateUrl: './navbar-account.component.html',
  styleUrls: ['./navbar-account.component.scss']
})
export class NavbarAccountComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute) { }

  authService!: TokenService; 
  donneeRequete!: any;
  currentUser = new User;

  ngOnInit(): void {
    if (this.actRoute.snapshot.paramMap.get('idUser') != null) {
      let id = this.actRoute.snapshot.paramMap.get('idUser');
      this.authService.getUserProfile(id).subscribe((res) => {
        this.currentUser = res;
        console.log(this.currentUser)
      });
    }
  }

  logout() {
    this.authService.deconnexion();
  }




}