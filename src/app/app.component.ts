import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  session:any;
  session2:any;
  openPages: any[]=[];
  constructor(private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {/*
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.session= localStorage.getItem('sessionKey');
        console.log(e.url);
        if(e.url=='/dashboard'){
          if(this.session=='loggedin')
          {
            this.router.navigate(['dashboard'],{relativeTo: this.route});
          }
          else{
              this.router.navigate(['login'],{relativeTo: this.route});
          }

        }
        else{
          this.router.navigate([e.url.slice(1,e.url.length)],{relativeTo: this.route});
          console.log(this.session);
        }
      }
    });*/
    console.log(this.route);
    this.session= localStorage.getItem('sessionKey');
    if(this.session=='loggedin')
    {
      this.router.navigate(['dashboard'],{relativeTo: this.route});
    }
    else{
        this.router.navigate(['login'],{relativeTo: this.route});
    }
  }
}
