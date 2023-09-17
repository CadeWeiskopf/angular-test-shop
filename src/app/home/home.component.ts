import { Component, OnDestroy, OnInit } from '@angular/core';
import { testConstructor, products } from '../data/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  products = products;

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
