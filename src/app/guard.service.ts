import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router"
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class GuardService {
  constructor(private rt:Router){
  }
  canActivate(){
    if(localStorage.getItem("aut"))
    return true;
    else
    {
    this.rt.navigateByUrl("login")
    return false;
    }
  }
}
