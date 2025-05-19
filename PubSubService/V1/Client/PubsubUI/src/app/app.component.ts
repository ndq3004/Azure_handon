import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebsocketConnectionService } from './websocket-connection.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'PubsubUI';

  constructor(private service : WebsocketConnectionService) {

  }
  ngOnInit(): void {
    this.service.connect().subscribe((msg) => {
      console.log(msg);
    });
  }
}
