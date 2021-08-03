import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {
  @Input() myinputMsg:any;
  @Output() filterTag:EventEmitter<any>= new EventEmitter();
  
  selectedIndex:any
  search:any
  item1:any
  newValue: any = []; 
  arr:any = []
  storedIndex:any = undefined
  errorMsg:boolean = false
  errorInput:boolean = false
  index:any
  constructor() { }

  ngOnInit(): void {
    this.search = new FormGroup({
      'search' : new FormControl(''),
    });
  }
  tags(i:any){
    if(this.selectedIndex == i) {
      this.selectedIndex = NaN 
    } else {
      this.selectedIndex = i
    }

    
  }
  OnInput(value:any,i:any) {
    console.log(value)
    console.log(i)
    this.index = i
    if(value.trim().length == 0){
      this.errorInput = true
      this.errorMsg = false
    } else {
      this.errorInput = false
      if(this.storedIndex != i){
        if(this.myinputMsg[i].tags == undefined){
        this.arr = []
        } else{
          this.arr = this.myinputMsg[i].tags
          console.log(this.arr)
        }
      }
      this.storedIndex = i 
      this.item1 = this.myinputMsg[i]
      if((this.arr).includes(value.trim())){
        this.errorMsg = true
      } else{
        this.errorMsg = false
        this.arr.push(value.trim())
        console.log(this.arr)
      }
      this.item1.tags = this.arr
      this.search.patchValue( {'search':null} );
      this.filterTag.emit(this.myinputMsg)
      console.log(this.myinputMsg)
    }
    
  }

}
