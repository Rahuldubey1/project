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
  savedValue:any
  saved:any
  backupData:any
  imp:any
  imp1:any
  constructor(private _service:ServicesService) { }
  GetData(data:any){
    if(data != '') {
      this.data = []
    // for (let i = 0; i < this.userData.length; i++) {
    //   if ((this.userData[i].firstName).toLowerCase().includes(data.toLowerCase()) || (this.userData[i].lastName).toLowerCase().includes(data.toLowerCase())) {
    //     this.data.push(this.userData[i]);
    //     console.log(this.data)
    //   }
    // }
    //   this.userData=this.data
    this.imp=this.filterData(data,1)
      console.log(this.imp)
      console.log(this.userData)
    } else {
      if(this.imp1 != undefined){
        this.userData = this.imp1
      } else{
        this.userInfo()
        this.imp = undefined
      }
    }
  }

  GetTag(data:any){
    if(data) {
      // for (let i = 0; i < this.userData.length; i++) {
      //   if(this.userData[i].tags == undefined){
      //   } else {
      //     for(let p = 0; p < this.userData[i].tags.length; p++){
      //       if ((this.userData[i].tags[p]).includes(data)) {
      //         this.data.push(this.userData[i]);
      //       }
      //     }
      //     if(this.data){
      //       for(let i=0; i < this.data.length; i++){
      //         if(this.data[i]?.email == this.data[i+1]?.email){
      //           this.data.splice(i+1,1)
      //         }
      //       }
      //     }
      //   }
      // }
      // this.userData=this.data
      this.imp1=this.filterData(data,2)
      console.log(this.imp1)
      console.log(this.userData)
    } else {
      
      if(this.imp != undefined){
        this.userData = this.imp
      } else{
        this.userInfo()
        this.imp1 = undefined

      }
    }
  }
  
  filterTag(data:any){
    this.userData = data
    this.backup = data
  }
  
  ngOnInit(): void {
    this.userInfo()
  }
  
  userInfo() {
    this._service.getData().subscribe(result=> {
      if(result) {
        this.userData = result.students
      }
    })
  }
  
  filterData(data:any,value:any) {
    console.log(data)
    console.log(value)
    this.data = []
    if(value == 1){
      for (let i = 0; i < this.userData.length; i++) {
        if ((this.userData[i].firstName).toLowerCase().includes(data.toLowerCase()) || (this.userData[i].lastName).toLowerCase().includes(data.toLowerCase())) {
          this.data.push(this.userData[i]);
        }
      }
      this.userData=this.data
      return this.userData
    } else {
      for (let i = 0; i < this.userData.length; i++) {
        if(this.userData[i].tags != undefined){
          for(let p = 0; p < this.userData[i].tags.length; p++){
            if ((this.userData[i].tags[p]).includes(data)) {
              this.data.push(this.userData[i]);
            }
          }
          if(this.data){
            for(let i=0; i < this.data.length; i++){
              if(this.data[i]?.email == this.data[i+1]?.email){
                this.data.splice(i+1,1)
              }
            }
          }
        }
      }
      this.userData=this.data
      return this.userData
    }
  }
}
