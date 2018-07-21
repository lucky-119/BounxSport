import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CoachregService {

  constructor(private http: HttpClient) { }

  register(info)
  {
    return this.http.get(info);
  }
}
