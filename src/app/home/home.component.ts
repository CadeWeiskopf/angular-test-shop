import { Component, OnDestroy, OnInit } from '@angular/core';
import { testConstructor } from '../data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {
    testConstructor();
  }

  ngOnInit(): void {
    console.log('oninit');
  }

  ngOnDestroy(): void {
    console.log('ondestroy');
  }
}
