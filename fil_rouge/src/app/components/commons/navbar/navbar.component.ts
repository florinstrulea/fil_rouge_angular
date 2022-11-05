import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthStatus } from 'src/app/interfaces/auth-status';
import { Auth } from 'src/app/services/auth/auth.service';
import { StatusService } from 'src/app/services/auth/status.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  sub : Subscription = new Subscription;
  curAuth? : AuthStatus;


  apiUrl : string = "";
  constructor(private authService : Auth, private statusService : StatusService) { 
    this.apiUrl = environment.apiUrl;
    console.log(this.apiUrl);
  }

  ngOnInit(): void {
    this.sub = this.authService.curUserObservable.subscribe((user) =>{
      this.curAuth = user;
    });

    if(sessionStorage.getItem("connected") === "true"){
      // On récupère les informations mises en cache
      this.authService.setAuthStatus({
        connected : true,
        user : JSON.parse(sessionStorage.getItem("user")!)
      });
      // On fait une requête vers l'API pour vérifier s'il y a eu des changements
      this.authService.getUser().subscribe((user) => {
        if(this.authService.isUser(user)){
          this.authService.setAuthStatus({
            connected : true,
            user : user
          })
        }
        else{
          sessionStorage.setItem("connected", "false");
          this.authService.setAuthStatus({
            connected : false,
            user : undefined
          });
        }
      });
    }
  }
  logout(){
    this.authService.logout().subscribe((message) => {
        this.statusService.envoyerStatus(message);
        this.authService.setAuthStatus({
          connected : false,
          user: undefined
        })
    })
  }

}
