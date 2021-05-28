import { Router } from '@angular/router';
import { AuthService } from './../auth/auth-shared/auth.service';
import { IUser } from './../user/user-shared/user-interface';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  autheticated$! : Observable<boolean>;
  user$!: Observable<IUser>

  subscription!: Subscription;

  constructor(
    private service: AuthService,
    private router: Router,
    private authService: AuthService
  ) {

    this.autheticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();

   }


  ngOnInit() {

 

  }

  logOut(){
    this.service.logOut();
    this.router.navigate(['login']);
  }

}
