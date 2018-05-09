import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  onServer(event : {serverName :string , serverDesc: string}){
    this.serverElements.push({type:"server",name:event.serverName,content:event.serverDesc });

  }
  onBluePrintServer(event : {serverName :string , serverDesc: string}){
    this.serverElements.push({type:"blueprint",name:event.serverName,content:event.serverDesc });

  }
}
