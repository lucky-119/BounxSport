import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { LoginService } from '../login.service'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public Clicked=false;
  public name;
  public Option=[true,false,false,false,false,false];
  public number=0;
  public sport="BasketBall";
  public s=false;
  public b=false;
  public bottom=true;
  public data:any =[];
  public screenHeight;
  public screenWidth;

  constructor(private router: Router,private route: ActivatedRoute, private loginService: LoginService, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('data'));
    this.name=this.data[0].fname+' '+this.data[0].lname;
    this.screenWidth=window.outerWidth;
  }

  public options(value){
    let i;
    console.log(value);
    for(i=0;i<6;i++)
    {
      if(i==value)
      {
        this.Option[i]=true;
      }
      else
      {
        this.Option[i]=false;
      }
      console.log(this.Option[i]);
    }
    if(value==4 || value==5 || value==2)
      this.bottom=false;
    else{
      this.bottom=true;
    }
    this.click2();
  }
  click()
  {
    this.Clicked=!this.Clicked;
    this.screenWidth=window.outerWidth;
    this.screenHeight=window.outerHeight;
    if(this.screenWidth<500)
    {
      document.getElementById('sidemenu').className='sidemenu22';
    }
    else
    {
      document.getElementById('sidemenu').className='sidemenu2';
    }


  }

  click2()
  {
    this.Clicked=!this.Clicked;
    document.getElementById('sidemenu').className='sidemenu1';
  }

  public search(){
    this.s=!this.s;
    this.b=false;
    this.cdRef.detectChanges();
    this.screenWidth=window.outerWidth;
    this.screenHeight=window.outerHeight;
    this.change();
  }


  public block(){
    this.b=!this.b;
    this.s=false;
    this.cdRef.detectChanges();
    this.screenWidth=window.outerWidth;
    this.screenHeight=window.outerHeight;
    this.change();
  }

  public logout(){
    localStorage.clear();
    this.router.navigate(['./login']);
  }

  onResize(event) {
    this.screenHeight = event.target.innerHeight;
    this.screenWidth = event.target.innerWidth;
    this.change();
  }

  public change(){
    if(this.screenWidth<500){
      let y = document.getElementById('bsearch');
      if(y!=null)
        y.className='bsearch2';
      y = document.getElementById('blockdate');
        if(y!=null)
          y.className='blockdate2';
      let x=document.getElementsByClassName('sidemenu2');
      if(x.length!=0)
        x[0].className='sidemenu22';
    }
    else{
      let y = document.getElementById('bsearch');
      if(y!=null)
        y.className='bsearch';
      y = document.getElementById('blockdate');
      if(y!=null)
          y.className='blockdate';
      let x =document.getElementsByClassName('sidemenu22');
      if(x.length!=0)
        x[0].className='sidemenu2';
    }
  }

  public sbooking(){
    this.s=false;
  }

  public blockdate(){
    this.b=false;
  }
}
