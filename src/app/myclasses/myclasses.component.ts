import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-myclasses',
  templateUrl: './myclasses.component.html',
  styleUrls: ['./myclasses.component.css']
})
export class MyclassesComponent implements OnInit {

  public data:any =[];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
  }
  buttonClick(value){
    if(value==1)
    {
      document.getElementById('1').className="headingButton2";
      document.getElementById('2').className="headingButton";
    }
    else if(value==2)
    {
      document.getElementById('1').className="headingButton";
      document.getElementById('2').className="headingButton2";
    }
  }
}
