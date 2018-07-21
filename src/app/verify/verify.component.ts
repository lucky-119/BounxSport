import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  public screenWidth;
  public screenHeight;
  public username;
  public popupmsg;
  public errormsg;
  public error=false;
  public pwchanged=false;

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(data=>{
      this.username=data.username;
      console.log(this.username);
    });
    this.screenHeight = window.outerHeight;
    this.screenWidth = window.outerWidth;
    this.change();
    this.change2();
  }

  onResize(event) {
      this.screenHeight = event.target.innerHeight;
      this.screenWidth = event.target.innerWidth;
      this.change();
      this.change2();
  }

  public change(){
    if(this.screenWidth>((1280/725)*this.screenHeight))
    {
      let img2 = document.getElementById('bi');
      img2.className='back2';
    }
    else
    {
      let img2 = document.getElementById('bi');
      img2.className='back1';
    }
  }

  public change2(){
    if(this.screenWidth<600)
    {
      let overall = document.getElementById('overall');
      overall.className='overall2';
    }
    else
    {
      let overall = document.getElementById('overall');
      overall.className='overall';
    }
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }


}
