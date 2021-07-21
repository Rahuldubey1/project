import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../service/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userData:any
  value:any =[]
  data:any = []
  tagsList:any
  constructor(private _service:ServicesService) { }
  GetData(data:any){
    console.log(data)
    if(data != '') {
      this.data = []
    for (let i = 0; i < this.userData.length; i++) {
      if ((this.userData[i].firstName).toLowerCase().includes(data.toLowerCase()) || (this.userData[i].lastName).toLowerCase().includes(data.toLowerCase())) {
        this.data.push(this.userData[i]);
      }
    }
      this.userData=this.data
  } else {
    this.userInfo()
  }
  }
  GetTag(data:any){
    debugger
    if(data != '') {
      this.data = []
    for (let i = 0; i < this.userData.length; i++) {
      console.log(this.userData[i].tags)
      if ((this.userData[i].tags).includes(data)) {
        alert("1y")
        this.data.push(this.userData[i]);
      }
    }
      this.userData=this.data
  }
  }
  filterTag(data:any){
    this.userData = data
  console.log(this.userData)
  }
  ngOnInit(): void {
    this.userInfo()
  }
  userInfo(){
    this._service.getData().subscribe(result=> {
      if(result) {
        this.userData = result.students
      }
    })
  }
}
