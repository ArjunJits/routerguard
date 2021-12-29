import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
txt1:string=""
txt2:string=""
  constructor() { }

  ngOnInit(): void {
  }
  funLogin(){
    if(this.txt1=="scott" && this.txt2=="scott123")
    {
      localStorage.setItem("aut","1")
    }
  }
}
