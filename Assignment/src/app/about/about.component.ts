import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  color:string = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  changeStyle($event){
    console.log('mouse event');
    this.color = $event.type == 'mouseover' ? 'yellow' : 'red';
  }
}
