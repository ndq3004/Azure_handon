import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketConnectionService } from './websocket-connection.service';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title:string = 'PubsubUI';
  showSidebar = true;

  constructor(private service : WebsocketConnectionService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    console.log("AppComponent initialized");
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log("NavigationEnd event detected", event);
        this.showSidebar = this.router.url.includes('/about') || this.router.url.includes('/help') ? false : true;
      }
    });
    /** Connect to the WebSocket server */ 
    // this.service.connect().subscribe((msg) => {
    //   console.log(msg);
    // });
  }
}
