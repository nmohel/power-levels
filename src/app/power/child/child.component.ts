import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name:string;
  @Input() multiplier:string;
  @Input() power:number;
  childPower:number

  ngOnChanges() {
    this.childPower = this.power * parseInt(this.multiplier)
  }

}
