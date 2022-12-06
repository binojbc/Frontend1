import { Component, OnInit } from '@angular/core';
import { TaskapiService } from '../services/taskapi.service';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-managertask',
  templateUrl: './managertask.component.html',
  styleUrls: ['./managertask.component.css']
})
export class ManagertaskComponent implements OnInit {
  public searchText: any='';
  constructor(private service:TaskapiService,
    public appComponenet:AppComponent) { }

  TaskList:any=[];
  public dataById:any=[];
  public dataByIdCopy: any;
  public updatedData:any;
  public success: string="";
  
  managerName = this.appComponenet.managerName;
  ngOnInit(): void {
    this.refreshTaskList();
  }
  // name inputhing
  onNameChange(managerName:string){
    managerName=this.managerName;
  }
  // get all data
  refreshTaskList(){
    this.service.getAll().subscribe(data=>{
      this.TaskList=data;
    });
  }

  // get one data
  edit(id:any) { 
    // console.log(id)
    this.success = "";
    this.service.getDataById(id).subscribe((response)=>{
      this.dataById = response;
      console.log(this.dataById);
      this.dataByIdCopy = {...response};
    })
  }
  // update data
  onSubmits(tasksform: any) {
    
    this.service.update(this.dataById.EmployeeId, this.dataById).subscribe((response)=>{
      this.updatedData = response;
      console.log(this.updatedData);
      tasksform.reset();
      this.refreshTaskList();
      this.success="Uppdated Successfully";
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
  // color for status
  // public getColor(color: string): string{
  //   return (color =="Completed"  ? "#14C38E" : "#EB5353")
  // }


  // check approved or not
  public approvalStatus(status: string){
    if (status =="Pending"){
      return true;
    }
    else {
      return false;
    }
  }

    // approvel status color
    public approvalByColor(color: string): string{
      return (color =="Not Approval Status"  ? "#b62020" : "#000000")
    }
}
