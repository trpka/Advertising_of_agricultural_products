import { Component, OnInit } from '@angular/core';
import { MessageDTO } from '../model/messageDTO';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: MessageDTO[];
  constructor() { }

  ngOnInit(): void {
  }

}
