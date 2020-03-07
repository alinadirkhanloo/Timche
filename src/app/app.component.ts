import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'mdb-angular-free';
  ngOnInit() {
    AOS.init();
  }
}
