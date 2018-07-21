import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  constructor(private loginService: LoginService) { }
  public x=4;
  public details=[true,false,false,false];
  public x1=1;
  public length1=[1];
  public x2=1;
  public length2=[1];
  public x3=1;
  public length3=[1];
  public email="lakshayarora1@gmail.com";
  public fname="Lakshay";
  public lname="Arora";
  public data:any =[];
  public info:any;
  public error=false;
  public errormsg;
  public popupmsg="Success";
  public screenWidth;
  public screenHeight;
  public date;

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
    this.screenHeight = window.outerHeight;
    this.screenWidth = window.outerWidth;
    this.change();
    let date = this.data[0].dob;
    this.date = date.substring(0, 10);
    console.log(this.date);
  }

  update1(username,password,cpassword){
    if(password=='')
    {
      console.log('No password typed');
      this.popupmsg="Error!";
      this.errormsg="No password typed";
    }
    else if(password!=cpassword)
    {
      console.log("Passwords don't match");
      this.popupmsg="Error!";
      this.errormsg="Passwords don't match";
    }
    else{
      this.info='{"username": "'+username+'","password": "'+password+'"}';
      console.log(this.info);
      this.loginService.update(this.info).subscribe(data=>{
        this.data=data;
        console.log(this.data);
        this.loginService.send(data);
        localStorage.setItem('data',JSON.stringify(data));
      });
      this.popupmsg="Success";
      this.errormsg="Changes have been saved";
    }
    this.error=true;
  }


  update2(fname,lname,male,female,dob,contact,add1,add2,city,state,postcode,country,bio,atheletich,minage,maxage,maxclass,minnoofplayers,maxnoofplayers){
    let gender;
    console.log(male,female);
    if(male==true)
      gender="male";
    else if(female==true)
      gender="female";
    this.info='{"username": "'+this.data[0].username+'","fname": "'+fname+'","lname": "'+lname+'","gender": "'+gender+'","dob": "'+dob+'","contact": "'+contact+'","address1": "'+add1+'","address2": "'+add2+'","city": "'+city+'","state": "'+state+'","postcode": "'+postcode+'","country": "'+country+'","bio": "'+bio+'","atheletich":"'+atheletich+'","minage":"'
    +minage+'","maxage":"'+maxage+'","maxclass":"'+maxclass+'","minnoofplayers":"'+minnoofplayers+'","maxnoofplayers":"'+maxnoofplayers+'"}';
    console.log(this.info);
    var flag=0,flag2=0;
    var nc = ["atheletich",'minage','maxage','maxclass','minnoofplayers','maxnoofplayers'];
    for(var key in JSON.parse(this.info)){
      for(var x in nc)
      {
        if(key==nc[x])
        {
            flag2=1;
        }
      }
      if(flag2==1)
        break;
      console.log(key);
      console.log(JSON.parse(this.info)[key]);
      if(JSON.parse(this.info)[key]==''){
        this.popupmsg="Error";
        this.errormsg=key+" field is empty";
        flag=1;
        break;
      }
    }
    if(flag==0){
      this.loginService.update(this.info).subscribe(data=>{
        this.data=data;
        console.log(this.data);
        this.loginService.send(data);
        localStorage.setItem('data',JSON.stringify(data));
      });
      this.popupmsg="Success";
      this.errormsg="Changes have been saved";
    }
  this.error=true;
  }

  update3(rating,ntrp,atp,itf){
    this.info='{"username": "'+this.data[0].username+'","rating": "'+rating+'","ntrp": "'+ntrp+'","atp": "'+atp+'","itf": "'+itf+'"}';
    console.log(this.info);
    this.loginService.update(this.info).subscribe(data=>{
      this.data=data;
      console.log(this.data);
      this.loginService.send(data);
      localStorage.setItem('data',JSON.stringify(data));
    });
    this.popupmsg="Success";
    this.errormsg="Changes have been saved";
    this.error=true;
  }

  update4(){
    this.error=true;
    this.popupmsg="Success";
    this.errormsg="Changes have been saved";
  }


  ok(){
    this.error=false;
  }

  buttonClick(value){
    document.getElementById(value).className="headingButton2";
    this.details[value-1]=true;
    for(let i=1;i<=this.x;i++)
    {
      if(i!=value)
      {
        document.getElementById(i.toString()).className="headingButton";
        this.details[i-1]=false;
      }
    }

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

  onResize(event) {
      this.screenHeight = event.target.innerHeight;
      this.screenWidth = event.target.innerWidth;
      this.change();
  }

  change(){
    if(this.screenWidth<500)
    {
      document.getElementById('profile1').className='profile1change';
      document.getElementById('profile2').className='profile2change';
    }
    else{
      document.getElementById('profile1').className='profile1';
      document.getElementById('profile2').className='profile2';
    }
  }
}
