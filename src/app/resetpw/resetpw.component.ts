import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrls: ['./resetpw.component.css']
})
export class ResetpwComponent implements OnInit {

  public screenWidth;
  public screenHeight;
  public username;
  public popupmsg;
  public errormsg;
  public error=false;
  public pwchanged=false;

  constructor(private router: Router,private route: ActivatedRoute, private loginService: LoginService) { }

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

  ok(){
    this.error=false;
    if(this.pwchanged==true)
      this.router.navigate(['login']);
  }
  reset(password,cpassword){
    if(password!=cpassword){
      console.log('password not same');
      this.error=true;
      this.popupmsg="Error!";
      this.errormsg="Passwords don't match!";
    }
    else{
      this.loginService.changePassword(this.username,password).subscribe(data=>{
        if(data==false){
          console.log('Session Expired');
          this.error=true;
          this.popupmsg="Error!";
          this.errormsg="Session has expired! Please try again!";
          this.pwchanged=true;
        }
        else{
          console.log('Password Changed');
          this.error=true;
          this.popupmsg="Success!";
          this.errormsg="Password has been changed successfully!";
          this.pwchanged=true;
        }
      });
    }
  }
}
