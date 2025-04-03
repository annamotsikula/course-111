import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  @Input({ required: true, alias: 'message' }) incomingMessage = '';
  @Input({ required: true }) name: string = '';
  @Input() img: string = "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
  @Output('receive') send = new EventEmitter<string>()

  outgoingMessage: string = '';

  ngOnChanges(changes: SimpleChanges) {
    const incoming = changes['incomingMessage']
    if (incoming && !incoming.firstChange) {
      this.chatHistory.push({ type: 'INCOMING', text: incoming.currentValue })
    }

  }

  chatHistory: {
    type: 'INCOMING' | 'OUTGOING',
    text: string
  }[] = []

  sendMessage() {
    if (this.outgoingMessage.length) {
      this.send.emit(this.outgoingMessage);
      this.chatHistory.push({ type: 'OUTGOING', text: this.outgoingMessage })
      this.outgoingMessage = ""
    }
  }



}
