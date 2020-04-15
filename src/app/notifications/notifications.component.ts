import { NotificationService } from './../notification.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {



  constructor(private notifyService : NotificationService) { }

  showToasterSuccess(){
    this.notifyService.showSuccess('Data shown successfully !!')
    }

    showToasterError(){
        this.notifyService.showError('Something is wrong')
    }

    showToasterInfo(){
        this.notifyService.showInfo('This is info')
    }

    showToasterWarning(){
        this.notifyService.showWarning('This is warning')
    }

  ngOnInit(): void {

  }

}
