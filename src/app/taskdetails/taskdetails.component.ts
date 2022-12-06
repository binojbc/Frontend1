import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskapiService } from '../services/taskapi.service';

@Component({
  selector: 'app-taskdetails',
  templateUrl: './taskdetails.component.html',
  styleUrls: ['./taskdetails.component.css']
})
export class TaskdetailsComponent implements OnInit {

  public searchText: any='';
  constructor(private service:TaskapiService) { }

  TaskList:any=[];
  public dataById:any=[];
  public dataByIdCopy: any;
  public updatedData:any;
  public success: string="";
  ngOnInit(): void {
    this.refreshTaskList();
  }
  // get
  refreshTaskList(){
    this.service.getAll().subscribe(data=>{
      this.TaskList=data;
    });
    
  }
  // delete
  deleteFunction(del: any){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.service.delete(del).subscribe();
      this.refreshTaskList()
    }
    this.refreshTaskList();
  }

// get by id
  edit(id:any) { 
    // console.log(id)
    this.service.getDataById(id).subscribe((response)=>{
      this.dataById = response;
      console.log(this.dataById);
      this.dataByIdCopy = {...response};
      this.success=" ";
    })
  }
  // update
  onSubmits(tasksform: any) {
    this.service.update(this.dataById.EmployeeId, this.dataById).subscribe((response)=>{
      this.updatedData = response;
      // console.log(this.updatedData);
      tasksform.reset();
      this.refreshTaskList();
      this.success="Updated Successfully";
   })
  }
  // clear form
  cancel(tasksForms: any) {
    tasksForms.reset();
  }
  // after add refresh the page
  close() {
    this.refreshTaskList();
  }
  // status color
  public getColor(color: string): string{
    return (color =="Completed"  ? "#14C38E" : "#EB5353")
  }
  // approvel status color
  public approvalByColor(color: string): string{
    return (color =="Not Approval Status"  ? "#b62020" : "#000000")
  }

}
