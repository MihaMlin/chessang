import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RegisterDto} from "../interfaces/RegisterDto";

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private url: string = 'https://bash-chess.herokuapp.com';
  private opts: any = {withCredentials: true};

  constructor(private http: HttpClient) { }

  public registerUser = (info: RegisterDto) => {
    this.http.post(this.url + '/users', info, this.opts).subscribe();
  }
}
