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
  backup:any
  nodata:boolean = false
  constructor(private _service:ServicesService) { }
  GetData(data:any){
    if(data != '') {
      this.data = []
    for (let i = 0; i < this.userData.length; i++) {
      if ((this.userData[i].firstName).toLowerCase().includes(data.toLowerCase()) || (this.userData[i].lastName).toLowerCase().includes(data.toLowerCase())) {
        this.data.push(this.userData[i]);
      }
    }
      this.userData=this.data
  } else {
    if(this.backup){
      this.userData = this.backup
    } else {
      this.userInfo()
    }
  }
  if(this.userData.length == 0){
    this.nodata = true
  } 
  if(data == ''){
    this.nodata = false
  }
  }
  GetTag(data:any){
    if(data != '') {
      this.data = []
      if(this.backup){
        this.userData = this.backup
      } else {
        this.userInfo()
      }
      for (let i = 0; i < this.userData.length; i++) {
        if(this.userData[i].tags == undefined){
        } else {
          for(let p = 0; p < this.userData[i].tags.length; p++){
            if ((this.userData[i].tags[p]).includes(data)) {
              console.log(this.userData[i].tags[p])
              this.data.push(this.userData[i]);
              console.log(this.data)
            }
          }
          if(this.data){
            for(let i=0; i < this.data.length; i++){
              if(this.data[i]?.email == this.data[i+1]?.email){
                console.log(this.data[i]?.email)
                console.log(this.data[i+1]?.email)
                this.data.splice(i+1,1)
                console.log(this.data)

              }
            }
          }
        }
      }
      this.userData=this.data
    } else {
    if(this.backup){
      this.userData = this.backup
    } else {
      this.userInfo()
    }
  }
  if(this.userData.length == 0){
    this.nodata = true
  } 
  if(data == ''){
    this.nodata = false
  }
  }
  filterTag(data:any){
    this.userData = data
    this.backup = data
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
