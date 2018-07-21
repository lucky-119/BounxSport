import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CoachregService } from '../coachreg.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coachreg',
  templateUrl: './coachreg.component.html',
  styleUrls: ['./coachreg.component.css']
})
export class CoachregComponent implements OnInit {

  public screenWidth;
  public screenHeight;
  public Clicked=false;
  public x1=1;
  public length1=[1];
  public x2=1;
  public length2=[1];
  public x3=1;
  public length3=[1];
  public errormsg;
  public error=false;
  public re = /\S+@\S+\.\S+/;
  public registered:any;
  public v=0;
  public popupmsg = 'ERROR!';
  public info;

  constructor(private router: Router, private route: ActivatedRoute,private coachregService: CoachregService, private cdRef:ChangeDetectorRef) { }

  ngOnInit() {
    this.screenHeight = window.outerHeight;
    this.screenWidth = window.outerWidth;
    console.log(this.screenWidth);
    this.change();
    this.change2();
    this.change3();
    localStorage.setItem('sessionKey','coachreg');
  }

  public change()
  {
    if(this.screenWidth>((1300/730)*this.screenHeight))
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

  change3()
  {
    if(this.screenWidth<1000)
    {
      document.getElementById('name').className="name1";
      document.getElementById('user').style["left"]="50%";
      document.getElementById('user').style["transform"]="translate(-50%)";
    }
    else
    {
      document.getElementById('name').className="name2";
      document.getElementById('user').style["left"]="0%";
      document.getElementById('user').style["transform"]="translate(0%)";
    }
  }
  public change2()
  {
    if(this.screenWidth<600)
    {
      let overall = document.getElementById('overall');
      overall.className='overall2';
      let error = document.getElementById('error');
      if(error!=null)
        error.className='error2';
    }
    else
    {
      let overall = document.getElementById('overall');
      overall.className='overall';
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
      this.change3();
  }

  register(email,password,cpassword,image,fname,lname,male,female,dob,contact,add1,add2,city,state,postcode,country,bio,atheletich,remarks,minage,maxage,maxclass,minnoofplayers,maxnoofplayers)
  {
    let compulsory = [email,password,cpassword,fname,lname,dob,contact,add1,city,state,postcode,country,bio]
    let names = ["Email","Password","Confirm Password","First Name","Last Name","Date Of Birth","Contact","Address Line 1","City","State","Postcode","Country","Bio"]
    let flag=0;
    for(let i=0;i<compulsory.length;i++)
    {
      if(compulsory[i]=='')
      {
        this.errormsg=names[i] + " field needs to be filled";
        this.error=true;
        flag=1;
        break;
      }
    }
    if(!this.re.test(email) && email!='')
    {
        this.errormsg="Email Invalid";
        this.error=true;
        flag=1;
    }
    if(flag==0)
    {
      if(password!=cpassword)
      {
        this.errormsg="Passwords don't match";
        this.error=true;
        flag=1;
      }
      if(flag==0)
      {
        let gender;
        if(male==true)
          gender="male";
        else if(female==true)
          gender="female";
        this.Clicked=true;
        //Register to Database
        this.info='/register/coachreg/{ "username":"'+email+'","password":"'+password+'","fname":"'+fname+'","lname":"'+lname+'","gender":"'+gender+'","dob":"'+dob+'","contact":"'+contact+'","address1":"'+add1+'","address2":"'+add2+'","city":"'+city+'","state":"'+state+'","postcode":"'+postcode+'","country":"'+country+'","bio":"'+bio+
        '","atheletich":"'+atheletich+'","remarks":"'+remarks+'","minage":"'+minage+'","maxage":"'+maxage+'","maxclass":"'+maxclass+'","minnoofplayers":"'+minnoofplayers+'","maxnoofplayers":"'+maxnoofplayers+'","status":"inactive","vfcode":""}';
        console.log(this.info);
        this.coachregService.register(this.info).subscribe(info=>{
          console.log(info);
          this.Clicked=false;
          if(info==true){
            this.popupmsg='CONGRATS!';
            this.errormsg="You have been registered. An email has been sent to you with instructions to verify your email.";
            this.error=true;
            this.v=1;
            this.cdRef.detectChanges();
            this.screenHeight = window.outerHeight;
            this.screenWidth = window.outerWidth;
            console.log(this.screenWidth);
            this.change2();
          }
          else{
            this.errormsg="Email has already been registered. Please use another email";
            this.error=true;
            flag=1;
            this.cdRef.detectChanges();
            this.screenHeight = window.outerHeight;
            this.screenWidth = window.outerWidth;
            console.log(this.screenWidth);
            this.change2();
          }
        });

      }
    }
    this.cdRef.detectChanges();
    this.screenHeight = window.outerHeight;
    this.screenWidth = window.outerWidth;
    console.log(this.screenWidth);
    this.change2();
  }

  add1(){
    this.length1[this.x1]=this.x1+1;
    this.x1+=1;
  }

  add2(){
    this.length2[this.x2]=this.x2+1;
    this.x2+=1;
  }

  add3(){
    this.length3[this.x3]=this.x3+1;
    this.x3+=1;
  }

  close1(){
    this.x1-=1;
    this.length1.splice(this.x1);
  }

  close2(){
    this.x2-=1;
    this.length2.splice(this.x2);
  }

  close3(){
    this.x3-=1;
    this.length3.splice(this.x3);
  }

  ok(){
    this.error=false;
    if(this.v==1){
      this.router.navigate(['login']);
    }
  }
}
