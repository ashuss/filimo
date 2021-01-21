import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  currentRate = 4;
  currentRate1 = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
