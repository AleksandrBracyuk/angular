import { Component, OnInit } from '@angular/core';
import { S1Service } from '../s1.service';

@Component({
  selector: 'app-a2',
  templateUrl: './a2.component.html',
  styleUrls: ['./a2.component.css']
})
export class A2Component implements OnInit {

  constructor(private s1: S1Service) { }

  ngOnInit() {
  }

  click() {
    console.log('click');
    this.s1.show();
  }

}
