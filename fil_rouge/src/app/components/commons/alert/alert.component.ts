import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Status } from 'src/app/interfaces/status';
import { StatusService } from 'src/app/services/auth/status.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  sub : Subscription = new Subscription();

  notification : Status = {
    response : '',
    type : "info"
  }

  constructor(private statusService : StatusService) { }

  ngOnInit(): void {
    this.sub = this.statusService.notificationEnvoye$.subscribe((status) => {
      this.notification = status;
    })
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }

  closeAlert() : void{
    this.statusService.envoyerStatus({
      response : '',
      type : 'info'
    });
  }

}
