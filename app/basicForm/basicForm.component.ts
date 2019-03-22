import { Component, OnInit, Host } from '@angular/core';

import { DataService } from '../shared/services/data.service';
import { IForm } from '../shared/interfaces';


@Component({
  selector: 'basic-template-driven-form',
  templateUrl: './basicForm.component.html'
})
export class BasicFormComponent implements OnInit {
  form: any;
  risks: string[];
  submitted: boolean = false;
  poststatus: boolean = false;
  errorMessage: string;
  //formData : IForm;
  postData : string;
  
  constructor(private dataService: DataService) { }
  //constructor (){}
  
  ngOnInit() {
    this.risks = ['1', '2', '3', '4', '5'];
  } 

  //save(form: IForm) {
  onSubmit(myForm){

    let newData = {
      opened_by : myForm.opened_by,
      requested_by : myForm.requested_by,
      cmdb_ci : myForm.cmdb_ci,
      risk : myForm.risk,
      assignment_group : "Ask Now Support",
      assigned_to : myForm.assigned_to,
      description : myForm.description,
      short_description : myForm.short_description,
      justification : myForm.justification,
      implementation_plan : myForm.implementation_plan,
      risk_impact_analysis : myForm.risk_impact_analysis,
      test_plan : myForm.test_plan,
      u_communication_plan : "communication plan",
      //start_date : myForm.start_date,
      start_date: "2017-05-31 23:43 GMT",
      state : "1"

    }
   
    this.dataService.updateRequest(newData)
        
        .subscribe(
          data => this.postData = data,
          //data =>this.postData = JSON.stringify(data),
          //data =>this.postData = JSON.stringify({change_number : data.number}),
          error=>alert(error),
          ()=>console.log('Finished Post')
        );
        //console.log(this.postData);
        this.submitted = true;
  }
}