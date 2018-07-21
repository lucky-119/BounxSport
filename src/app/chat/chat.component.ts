import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public data:any =[];

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
  }


}
