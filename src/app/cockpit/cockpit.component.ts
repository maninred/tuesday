import { Component, OnInit,Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  newServerName:string;
  newServerContent:string;

  @Output() Screated=new EventEmitter<{serverName :string , serverDesc: string}>();
  @Output() SPcreated=new EventEmitter<{serverName :string , serverDesc: string}>();

  ngOnInit() {
  }


  onAddServer() {
    this.Screated.emit(
      {
        serverName:this.newServerName,
        serverDesc: this.newServerContent});

  }

  onAddBlueprint() {
    this.SPcreated.emit(
      {
        serverName:this.newServerName,
        serverDesc: this.newServerContent});
  }
}
