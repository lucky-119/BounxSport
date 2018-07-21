import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClubregService } from '../clubreg.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clubreg',
  templateUrl: './clubreg.component.html',
  styleUrls: ['./clubreg.component.css']
})
export class ClubregComponent implements OnInit {

    public screenWidth;
    public screenHeight;
    public Clicked=false;
    public errormsg;
    public error=false;
    public re = /\S+@\S+\.\S+/;
    public info;
    public v=0;
    public popupmsg = 'ERROR!';

    constructor(private clubregService: ClubregService, private cdRef:ChangeDetectorRef) { }

    ngOnInit() {
      this.screenHeight = window.outerHeight;
      this.screenWidth = window.outerWidth;
      this.change();
      this.change2();
      localStorage.setItem('sessionKey','clubreg');
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
    }

    register(managername,phone,email,password,logo,clubname,description,website,map,add1,add2,city,state,postcode,country,timezone,facebook,twitter,google)
    {
      this.popupmsg='Error!';
      this.errormsg="Club registration hasn't been activated yet. Coach registration is active.";
      this.error=true;
      /*
      let compulsory = [managername, phone,email,password,logo,clubname,description,add1,city,state,postcode,country,timezone]
      let names = ["Manager Name","Phone","Email","Password","Logo","Club Name","Description","Address Line 1","City","State","Postcode","Country","Timezone"];
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
          flag=1;
      }
      if(flag==0)
      {
          this.Clicked=true;
          //Register to Database
          this.info='/register/clubreg/{"managername":"'+managername+'","phone":"'+phone+'","email":"'+email+
          '","password":"'+password+'","clubname":"'+clubname+'","description":"'+description+'","website":"'+website+
          '","add1":"'+add1+'","add2":"'+add2+'","city":"'+city+'","state":"'+state+'","postcode":"'+postcode+'","country":"'+country+'","facebook":"'+facebook+'","twitter":"'+twitter+
          '","google":"'+google+'"}';
          console.log(this.info);
          this.clubregService.register(this.info).subscribe(info=>{
            console.log(info);
            this.Clicked=false;
            if(info==true){
              this.popupmsg='CONGRATS!'
              this.errormsg="You have been registered.";
              this.error=true;
              this.v=1;
            }
            else{
              this.errormsg="Email has already been registered. Please use another email";
              this.error=true;
              flag=1;
            }

          });
      }*/
      this.cdRef.detectChanges();
      this.screenHeight = window.outerHeight;
      this.screenWidth = window.outerWidth;
      console.log(this.screenWidth);
      this.change2();
    }


    ok(){
      this.error=false;
    }

  }
