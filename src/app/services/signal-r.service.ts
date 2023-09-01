
//import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  constructor() {
    /*
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:51523/chart')
    .build();*/
  }

  private hubConnection: signalR.HubConnection;
  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
                            .withUrl('http://localhost:51523/chat')
                            .build();
    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch( (err:string) => console.log('Error while starting connection: ' + err))
  }

  public addTransferChartDataListener = () => {

    this.hubConnection.on('transferchartdata', (data:string) => {
      alert(data);
    });
  }

}
