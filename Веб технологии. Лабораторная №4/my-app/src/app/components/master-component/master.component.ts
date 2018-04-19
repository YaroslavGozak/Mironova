import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  title = 'app';
  _inputArray: string;
  array: number[] = [];

  set inputArray(value: string){
    this._inputArray = value;
    let stringNumbers = value.split(',');
    this.array = [];
    stringNumbers.forEach(number => number = number.trim());
    stringNumbers = stringNumbers.filter(function(n){ return n != undefined && n != '' && !Number.isNaN(+n)}); 
    stringNumbers.forEach(number => this.array.push(+number));
    console.log("---");
    stringNumbers.forEach(element => console.log(element));
  }

  get inputArray(){
    return this._inputArray;
  }

}
