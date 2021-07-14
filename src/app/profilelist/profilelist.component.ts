import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profilelist',
  templateUrl: './profilelist.component.html',
  styleUrls: ['./profilelist.component.css']
})
export class ProfilelistComponent implements OnInit {
  @Input() myinputMsg:any;
  selectedIndex:any
  search:any
  item:any
  newValue: any = []; 
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
    this.item=i
    this.newValue.push(value)
    this.search.patchValue( {'search':null} );
  }

}
