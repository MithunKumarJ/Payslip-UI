import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service'; 
@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css','./style.scss']
})
export class ValidateComponent implements OnInit {
loader: boolean=false;
page=0;
pageSize = 25;
count = 0;
validateResource: any;
active: boolean=false;
  getResource: any;
  constructor(private configService:ConfigService,private route:Router) { }

  ngOnInit(): void {
    this.configService.getValidateResoure(this.page).subscribe((data:any)=>{
      this.validateResource=data.content;
      this.count=data.total;     
      this.loader=true;
      this.active=true;
  })
}
handlePageChange(event: number): void {
  this.page = event;
  this.retrievePage();
}
retrievePage(){
  this.configService.getValidateResoure(this.page).subscribe((data:any)=>{
    this.validateResource=data.content;
  })
}
validateData(ecode:any)
{
this.getResource=this.validateResource.filter((data:any)=>data.eCode===ecode)
this.route.navigate(['validateform',this.getResource[0]],{skipLocationChange: true, replaceUrl: false})
}

}
