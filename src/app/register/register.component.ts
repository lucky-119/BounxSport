import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public Clicked=false;
  public screenWidth;
  public screenHeight;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.screenHeight = window.outerHeight;
    this.screenWidth = window.outerWidth;
    this.change();
    localStorage.setItem('sessionKey','register');
  }

  clubclick(){
    this.Clicked=true;
    localStorage.setItem('sessionKey','clubreg');
    this.router.navigate(['clubreg'],{relativeTo:this.route});
  }

  coachclick(){
    this.Clicked=true;
    localStorage.setItem('sessionKey','coachreg');
    this.router.navigate(['coachreg'],{relativeTo:this.route});
  }

  change(){
    if(this.screenWidth<650)
    {
      document.getElementById('club').className='container1change';
      document.getElementById('coach').className='container2change';
      this.change2();
    }
    else
    {
      document.getElementById('club').className='container1';
      document.getElementById('coach').className='container2';
      document.getElementById('clubid').className='club1';
      document.getElementById('clubid2').className='club2';
      document.getElementById('coachid').className='coach1';
      document.getElementById('coachid2').className='coach2';
      this.change3();
    }

  }

  change2(){
    if(this.screenWidth>((592/327)*this.screenHeight))
    {
      document.getElementById('clubid').className='club1change';
      document.getElementById('clubid2').className='club2change';
      document.getElementById('coachid').className='coach1change';
      document.getElementById('coachid2').className='coach2change';
    }
    else
    {
      document.getElementById('clubid').className='club1';
      document.getElementById('clubid2').className='club2';
      document.getElementById('coachid').className='coach1';
      document.getElementById('coachid2').className='coach2';
    }
  }

  change3(){
    if(this.screenWidth>((1180/327)*this.screenHeight))
    {
      document.getElementById('clubid').className='club1change';
      document.getElementById('clubid2').className='club2change';
      document.getElementById('coachid').className='coach1change';
      document.getElementById('coachid2').className='coach2change';
    }
    else
    {
      document.getElementById('clubid').className='club1';
      document.getElementById('clubid2').className='club2';
      document.getElementById('coachid').className='coach1';
      document.getElementById('coachid2').className='coach2';
    }
  }

  onResize(event) {
      this.screenHeight = event.target.innerHeight;
      this.screenWidth = event.target.innerWidth;
      this.change();
  }

}
