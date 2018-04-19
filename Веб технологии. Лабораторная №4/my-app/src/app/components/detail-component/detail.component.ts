import { Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'detail-component',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  private _array: Array<number>;
  private _min: number;
  private _max: number;
  difference: number = 0;
  @Input() set array(arr: Array<number>){
    this._array = arr;
    this._min = this._array[0];
    this._max = this._array[0];
    this._array.forEach(element => {
      if(this._min > element){
        this._min = element;
      }
      if(this._max < element){
        this._max = element;
      }
    });
    this.difference = this._max - this._min;
  }
  get array(){
    return this._array;
  }

  ngOnInit(){
    this.difference = 0;
  }
}
