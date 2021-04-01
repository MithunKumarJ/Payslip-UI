import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-validate-form',
  templateUrl: './validate-form.component.html',
  styleUrls: ['./validate-form.component.css']
})
export class ValidateFormComponent implements OnInit {
  validateData: any;
  loader: boolean=false;
  employeform = this.formBuilder.group({
    eCode: '',
    nameAtEpfRecord: '',
    name: '',
    firstName: '',
    dateOfBirth: '',
    dateOfJoining: '',
    sex: '',
    plant: '',
    category: '',
    status: '',
    phone: '',
    pan: '',
    aadhaar: '',
    bank: '',
    bankAccountNumber: '',
    bankIfsc: '',
    esi: '',
    uan: ''
  });

  constructor(private route: ActivatedRoute,private configService:ConfigService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any)=>{
      this.validateData=params;
      this.loader=true;
      this.employeform.get("eCode")?.setValue(this.validateData.eCode);
      this.employeform.get("nameAtEpfRecord")?.setValue(this.validateData.nameAtEpfRecord);
      this.employeform.get("name")?.setValue(this.validateData.name);
      this.employeform.get("firstName")?.setValue(this.validateData.firstName);
      this.employeform.get("dateOfBirth")?.setValue(this.validateData.dateOfBirth);
      this.employeform.get("dateOfJoining")?.setValue(this.validateData.dateOfJoining);
      this.employeform.get("sex")?.setValue(this.validateData.sex);
      this.employeform.get("plant")?.setValue(this.validateData.plant);
      this.employeform.get("category")?.setValue(this.validateData.category);
      this.employeform.get("status")?.setValue(this.validateData.status);
      this.employeform.get("phone")?.setValue(this.validateData.phone);
      this.employeform.get("pan")?.setValue(this.validateData.pan);
      this.employeform.get("aadhaar")?.setValue(this.validateData.aadhaar);
      this.employeform.get("bank")?.setValue(this.validateData.bank);
      this.employeform.get("bankAccountNumber")?.setValue(this.validateData.bankAccountNumber);
      this.employeform.get("bankIfsc")?.setValue(this.validateData.bankIfsc);
      this.employeform.get("esi")?.setValue(this.validateData.esi);
      this.employeform.get("uan")?.setValue(this.validateData.uan);

    })
  }
  onSubmit(): void {
    var code=this.employeform.get("eCode")?.value;
    console.log("ecode:",code)
  }

}
