import { Component } from '@angular/core';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  participants = [
    {
      name: 'Anna',
      id: 7,
      img: "https://ih1.redbubble.net/image.2109112436.7148/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
      currentMessage: ''
    },
    {
      name: 'Jack',
      id: 9,
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
      currentMessage: ''
    }
  ]



  receiveMessage(text: string, id: number) {
    const user = this.participants.find(i => i.id !== id)
    if (user) user.currentMessage = text;
  }

}
