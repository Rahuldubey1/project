import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search:any
  @Output() myOutput:EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    this.search = new FormGroup({
      'search' : new FormControl(''),
      'tag' : new FormControl(''),
    });
  }
  onSubmit(){
  console.log(this.search.value)
  }
  OnInput(value:any) {
    // console.log(value.value)
    this.myOutput.emit(value.value)
  }

}
