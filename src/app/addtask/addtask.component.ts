// import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
// import { VirtualTimeScheduler } from 'rxjs';
// import { Task } from 'src/app/models/task.model';
import { TaskapiService } from '../services/taskapi.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
  
  // task: Task = {
  //   TaskName: '',
  //   Status: '',
  //   StartTime: '',
  //   EndTime: '',
  //   CreatedDate: '',
  //   ApprovalStatus: '',
  //   AssignedManager: '',
  //   Description: ''
  // }
  submitted = false;
  public succesMessage: string="";

  constructor(private taskservice: TaskapiService) { }

  ngOnInit(): void {
  }
  // post
  onSubmit(forms: any ,form: any){
    
    const data = { EmployeeName:forms.EmployeeName,
    Status:forms.Status,
    StartTime: forms.StartTime,
    EndTime: forms.EndTime,
    CreatedDate: forms.CreatedDate,
    ApprovalStatus: 'Pending',
    AssignedManager: 'Not Approval Status',
    Description:forms.Description};
    this.taskservice.create(data).subscribe((response)=>{
      console.log("value in response",response);
      this.succesMessage = "Added SuccessFully"
      form.reset();
    })
    console.log(data);
  }
  // clear form
  cancel(tasksForms: any) {
    tasksForms.reset();
  }

}
