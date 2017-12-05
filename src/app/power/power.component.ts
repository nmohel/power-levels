import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

  initPow:number
  pow:number;

  ngOnInit() {
    this.initPow = 50;
    this.pow = 50;
  }
  update() {
    this.pow = this.initPow
  }

}
