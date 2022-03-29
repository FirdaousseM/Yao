import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { DataService } from '../service/data.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private actRoute: ActivatedRoute) { }

  authService!: TokenService; 
  donneeRequete!: any;
  currentUser = new User;

  ngOnInit(): void {

  }






}
