import { Router } from '@angular/router';
import { AuthService } from './../auth/auth-shared/auth.service';
import { UserInterface } from './../user/user-shared/user-interface';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  authEnticated$!: Observable<boolean>;
  user$!: Observable<UserInterface>;
  subscription!: Subscription;

  constructor(
    private service: AuthService,
    private router: Router
  ) { }


  ngOnInit() {

 

  }

  logOut(){
    this.service.logOut();
    this.router.navigate(['login']);
  }

}
