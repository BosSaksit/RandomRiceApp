import { Component, OnInit } from '@angular/core';
import { CallApiService } from '../service/call-api.service';

@Component({
  selector: 'app-add-rice',
  templateUrl: './add-rice.page.html',
  styleUrls: ['./add-rice.page.scss'],
})
export class AddRicePage implements OnInit {

  dataRice:any = {
    "NameRice":null
  };
  constructor(public callapi:CallApiService) { }

  ngOnInit() {
  }

  addNewRice(){
    console.log(this.dataRice);
    this.callapi.AddRice(this.dataRice).subscribe(it =>{
      console.log("success");
      
    });
  }

}
