import { Component, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public isnothidden=false;
  public isnothiddenfw=false;
  public img;
  public id;
  public max=3;
  public Clicked=false;
  public data='Login Not Enabled at the moment';
  public screenWidth;
  public screenHeight;
  public log=true;
  public re = /\S+@\S+\.\S+/;
  public x:any =[];
  public forgetdata = "Your password reset link has been sent to your email. Please follow the instructions to create a new password.";
  public fw=false;
  public reset=false;
  public wrongcode=false;
  public error;
  public errormsg;
  public popupmsg;

  public change()
  {
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

  public change2()
  {
    if(this.screenWidth<600)
    {
      document.getElementById('container').className="logo2";
      let error = document.getElementById('error');
      console.log(error);
      if(error!=null)
        error.className='error2';
    }
    else
    {
      document.getElementById('container').className="logo";
      let error = document.getElementById('error');
      if(error!=null)
        error.className='error';
    }
  }

  onResize(event) {
      this.screenHeight = event.target.innerHeight;
      this.screenWidth = event.target.innerWidth;
      this.change();
      this.change2();
  }

  constructor(private router: Router, private route: ActivatedRoute, private loginService:LoginService, private cdRef:ChangeDetectorRef) {

  }

  ngOnInit() {
    let x = Math.floor(Math.random() * Math.floor(this.max));
    this.id=x+1;
    this.img="/assets/pics/BG_login_0"+this.id+'.jpg';
    this.screenWidth=window.outerWidth;
    this.screenHeight=window.outerHeight;
    this.change();
    this.change2();
    localStorage.clear();
    localStorage.setItem('sessionKey','login');
  }

  registerHere(){
    this.Clicked=true;
    this.router.navigate(['../register'],{relativeTo: this.route});
  }

  hide(){
    this.isnothidden=!this.isnothidden;
    this.isnothiddenfw=!this.isnothiddenfw;
    this.wrongcode=!this.wrongcode;
  }

  login(username,password){
    if(username=='')
    {
      this.data = "Email address is required!";
      this.isnothidden=true;
    }
    else if(!this.re.test(username))
    {
      this.isnothidden=true;
      this.data = "Email Invalid";
    }
    else if(password=='')
    {
      this.isnothidden=true;
      this.data = "Password is required!";
    }
    else
    {
      this.loginService.login(username,password).subscribe(data=>{
        console.log(data);
        if(!data)
        {
          this.data="To login successfully, please ensure that you have entered your email address and password correctly";
          this.isnothidden=true;
        }
        else if(data[0].status=='inactive')
        {
          this.popupmsg="Error!"
          this.errormsg="Please verify your email to login";
          this.error=true;
          this.cdRef.detectChanges();
          this.screenHeight = window.outerHeight;
          this.screenWidth = window.outerWidth;
          console.log(this.screenWidth);
          this.change2();
        }
        else
        {
          this.Clicked=true;
          localStorage.setItem('sessionKey','loggedin');
          localStorage.setItem('data',JSON.stringify(data));
          this.loginService.send(data);
          this.router.navigate(['../dashboard'],{relativeTo: this.route});
        }
    });
    }
  }

  forgetpw(){
    this.fw=true;
    this.log=false;
    this.reset=false;
  }

  loginn(){
    this.fw=false;
    this.log=true;
    this.reset=false;
  }

  resetpage(){
    this.fw=false;
    this.log=false;
    this.reset=true;
  }

  submit(email){
    this.loginService.forgotPassword(email).subscribe(data=>{
      if(data==true){
        this.reset=true;
        this.fw=false;
        this.log=false;
      }
      else{
        this.forgetdata="Email is not registered";
        this.isnothiddenfw=true;
      }
    });

  }

  submitreset(code){
    this.loginService.resetPassword(code).subscribe(data=>{
      if(!data){
        this.wrongcode=true;
      }
      else{
        this.router.navigate(['reset'],{queryParams: data});
      }
    });
  }

  ok(){
    this.error=false;
  }

}
