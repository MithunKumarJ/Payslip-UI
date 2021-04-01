import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  masterCount: any;
  validateCount: any;
  notification: any;
  constructor(private configService:ConfigService, router:Router) { }

  ngOnInit(): void {
    this.validateCount
    this.configService.getPayslipCount().subscribe((data: any)=>{
      this.masterCount = data.master;
      this.validateCount=data.validate; 
      if(this.validateCount==0){
        this.notification=false;
      }
      else{
        this.notification=true;
      }
    })
    
  }
  

}
