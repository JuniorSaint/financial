import { AuthService } from './core/auth/auth-shared/auth.service';
import { Title } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './core/user/user-shared/user-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private titleService: Title,

  ) {



  }

  ngOnInit() {

    this.router.events
    .pipe(
      filter( event => event instanceof NavigationEnd),
      map( _ => this.route),
      map( rout => {
        while(rout.firstChild) rout = rout.firstChild; return rout
      }),
      switchMap(rout => rout.data)
    )
    .subscribe( event => this.titleService.setTitle(event.Title))

  }


}



