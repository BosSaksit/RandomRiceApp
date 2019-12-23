import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallApiService } from '../service/call-api.service';
import { setInterval } from 'timers';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  getriceall: any;
  count: number;
  nameRice: string;
  timee: number = 100;
  dd: any;
  stop: number = 0;
  constructor(public router: Router, public callapi: CallApiService) { }

  ionViewDidEnter() {
    this.getAllRice();
  }

  gotoAddRice() {
    this.router.navigate(['/add-rice']);
  }

  getAllRice() {
    this.getriceall = [];
    this.callapi.GetAllRice().subscribe(it => {
      this.getriceall = it;
      console.log(it);
      console.log(this.getriceall);

    });
  }

  stopRandom() { 
    this.getAllRice();
  }

  randomRice() { 
    this.timee = 100;
    this.dd = setInterval(() => {
      if (this.timee != 0) {
        this.timee = --this.timee;
        this.count = Math.floor(Math.random() * Object.keys(this.getriceall).length) + 0;
        this.nameRice = this.getriceall[this.count].nameRice;
      }
      if (this.count == 0) {
      
     } 
    }, 80)
  }
}
