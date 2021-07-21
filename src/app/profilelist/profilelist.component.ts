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
    this.index = i
    if(value == ""){
      this.errorInput = true
    } else {
      this.errorInput = false
      if(this.storedIndex != i){
        if(this.myinputMsg[i].tags == undefined){
        this.arr = []
        } else{
          this.arr = this.myinputMsg[i].tags
        }
      }
      this.storedIndex = i 
      this.item1 = this.myinputMsg[i]
      console.log(this.arr)
      if((this.arr).includes(value)){
        this.errorMsg = true
      } else{
        this.errorMsg = false
        this.arr.push(value)
      }
      this.item1.tags = this.arr
      console.log(this.myinputMsg)
      console.log(this.item1.tags)
      this.search.patchValue( {'search':null} );
      this.filterTag.emit(this.myinputMsg)
    }
    
  }

}
