import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {


  currentUser!: User;
  donneeUser!: any[];
  id!: number;

  constructor(private authService: TokenService, private actRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['idUser'];
    this.getUser();
  }

  getUser() {
    this.authService.getUserProfile(this.id).subscribe(res => {
      this.currentUser = res;
    });
  }

  deconnexion(): void{
    this.authService.deconnexion();
    this.router.navigate(['/login']);
  }

  
}

