import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  image: string = "../../../assets/forest.jpeg"
  constructor() { }

  ngOnInit(): void {
  }



}
