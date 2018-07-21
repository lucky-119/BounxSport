import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-mastercalendar',
  templateUrl: './mastercalendar.component.html',
  styleUrls: ['./mastercalendar.component.css']
})
export class MastercalendarComponent implements OnInit {

  public data:any =[];
  public screenWidth;
  public screenHeight;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
    this.screenWidth=window.outerWidth;
    this.screenHeight=window.outerHeight;
    this.change();
  }

  onResize(event){
    this.screenHeight = event.target.innerHeight;
    this.screenWidth = event.target.innerWidth;
    this.change();
  }

  public change(){
    if(this.screenWidth<500){
      let x=document.getElementsByTagName('iframe');
      x[0].src="https://tockify.com/bounx/upcoming";
      x[0].style.height="105%";
    }
    else
    {
      let x=document.getElementsByTagName('iframe');
      x[0].src="https://tockify.com/bounx/monthly";
      x[0].style.height="120%";
    }
  }
}
