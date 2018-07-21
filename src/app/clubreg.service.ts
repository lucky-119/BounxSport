import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ClubregService {

  constructor(private http: HttpClient) { }

  register(info)
  {
    console.log('hello');
    return this.http.get(info);
  }

}
