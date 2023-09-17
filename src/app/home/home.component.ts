import { Component, OnInit } from '@angular/core';
import { IProduct } from '../data/server-requests';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];

  ngOnInit(): void {
    console.log('oninit');
  }
}
