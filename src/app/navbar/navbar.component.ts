import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(private userService: DataService) { }

  donneeRequete!: any;
  user!: User;
  
  ngOnInit(): void { 
    /*
    this.userService.getAccount().subscribe((res: any) => {
      this.donneeRequete = res;
    });

    console.log(this.donneeRequete);
    */
  }

}
