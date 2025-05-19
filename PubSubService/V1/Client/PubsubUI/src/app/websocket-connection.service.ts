import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class WebsocketConnectionService {

  private wssLink:string = "wss://testpubsubonly.webpubsub.azure.com/client/hubs/Hub?access_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJ3c3M6Ly90ZXN0cHVic3Vib25seS53ZWJwdWJzdWIuYXp1cmUuY29tL2NsaWVudC9odWJzL0h1YiIsImlhdCI6MTc0NzU4MjAzNCwiZXhwIjoxNzQ3NTg1NjM0fQ.ujUPHBehV5X7b4x-TKVSPiyv4gganI6AebqATnVapgo";
  constructor() { }

  public connect() : Observable<any> {
    var observable = new Observable<any>(subscriber => {
      var subject = webSocket(this.wssLink);
      subject.subscribe(
        msg => subscriber.next(msg),
        err => console.log(err),
        () => console.log("completed!")
      );
    });

    return observable;
  }
}
