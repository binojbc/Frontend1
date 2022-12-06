import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiservice.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-manage-data',
  templateUrl: './manage-data.component.html',
  styleUrls: ['./manage-data.component.css']
})
export class ManageDataComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private http:ApiService) { }
  id:any; // to store product_id
  employee_data:any;  // variable that take form data

  employeeForm = new FormGroup({
   
    UserName : new FormControl(),
    Email: new FormControl(),
    Department : new FormControl(),
    Designation: new FormControl(),
    EmergencyContact: new FormControl(),
    BloodGroup:new FormControl(),
    dob:new FormControl(),
    WorkLocation:new FormControl(),
    Address:new FormControl(),
    MaritalStatus:new FormControl(),
  });


  ngOnInit(): void {
      this.id=this.route.snapshot.paramMap.get('id'); // get the id from the url.
      this.collectDataFromId(this.id); // collect the data of that particular product.
  }
  
  collectDataFromId(p_id:number){
    this.http.getData(`employee/${this.id}/`).subscribe(data=>{
      //console.log(data);
      this.employee_data = data;
      // populate the form using the data from the server.
      this.employeeForm.setValue({
                                 
                                 'UserName':this.employee_data.UserName,
                                 'Email':this.employee_data.Email,
                                 'Department':this.employee_data.Department,
                                 'Designation':this.employee_data.Designation,
                                 'EmergencyContact':this.employee_data.EmergencyContact,
                                 'BloodGroup':this.employee_data.BloodGroup,
                                 'dob':this.employee_data.dob,
                                 'WorkLocation':this.employee_data.WorkLocation,
                                 'Address':this.employee_data.Address,
                                 'MaritalStatus':this.employee_data.MaritalStatus,

                                });
    });
  }
  dataToUpdate:any;   // variable to hold the updated data fro, form
  updateMyData(){
    this.dataToUpdate = this.employeeForm.value;
    // calling updateData service.
    this.http.updateData(`employee/${this.id}/`,this.dataToUpdate).subscribe(data=>{
      alert('Data updated');
    });
  }
}
