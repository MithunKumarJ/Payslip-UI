import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./style.scss']
})
export class HomeComponent implements OnInit {
  masterCount: any;
  validateCount: any;
  masterResource: any;
  page = 0;
  pageSize = 25;
  count = 0;
  loader: boolean=false;
  getResource: any;

  constructor(private configService:ConfigService,private route:Router) { }

  ngOnInit(): void {
    this.configService.getMasterResource(this.page).subscribe((data:any)=>{
      this.masterResource=data.content;
      this.loader=true;
      this.count=data.total;
    })
  }
  handlePageChange(event: number): void {
    this.page = event;
    this.retrievePage();
  }
  retrievePage(){
    this.configService.getMasterResource(this.page).subscribe((data:any)=>{
      this.masterResource=data.content;
      console.log("Data:",data);
    })

  }
  EditMasterData(ecode:any){
    this.getResource=this.masterResource.filter((data:any)=>data.eCode===ecode)
    this.route.navigate(['validateform',this.getResource[0]],{skipLocationChange: true, replaceUrl: false})
  }
  }
  
  
  




