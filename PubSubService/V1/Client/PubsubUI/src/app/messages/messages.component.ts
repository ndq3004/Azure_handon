import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-messages',
  imports: [CommonModule, FormsModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent implements OnInit, OnDestroy, OnChanges {
  messages: string[] = [];
  message: string = '';
  inputMessage: string = '';
  inputType: string = 'text';
  isEditable: boolean = true;
  constructor() {
    // Initialize the messages array with some sample data
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3'
    ];    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("MessagesComponent changes detected", changes);
  }
  ngOnDestroy(): void {
    console.log("MessagesComponent destroyed");
  }

  ngOnInit(): void {
    console.log("MessagesComponent initialized");
  }

  pushMessage(input: HTMLInputElement) {
    if (this.inputMessage) {
      this.messages.push(this.inputMessage);
      this.inputMessage = '';
      input.focus();
    }
  }

  sendMessage() {
    if (this.message) {
      this.messages.push(this.message);
      this.message = '';
    }
  }

}
