import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './websocket.service';
import { ChatService } from './chat.service';


export class Message {
  // author: string;
  // message: string;
  constructor(public author: string, public message: string) {
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, ChatService]
})
export class AppComponent implements OnInit {
  // private URL = 'ws://nodejs-websocket-demo.herokuapp.com';
  // private mensajes: string = '';
  // constructor(private chatService: ChatService) {
  //   chatService.messages.subscribe(msg => {
  //     // console.log('Response from websocket: ' + msg);
  //     this.mensajes += msg.message;
  //   });
  // }


  // sendMsg(message) {
  //   const msg = new Message('Jorge', message);
  //   console.log('new message from client to websocket: ', msg);
  //   this.chatService.messages.next(msg);
  //   // this.message.message = '';
  // }

  constructor(private websocketService: WebsocketService) { }

  ngOnInit(): void {
    // this.websocketService.connect(URL).subscribe(
    //   data => console.log(data),
    //   error => console.log(error)
    // );
    // const wsUrl: URL = new URL('ws://nodejs-websocket-demo.herokuapp.com');
    const el = document.getElementById('server-time');
    const ws = new WebSocket('ws://nodejs-websocket-demo.herokuapp.com');
    ws.onmessage = function(event) {
      console.log(event);
      el.innerHTML = 'Server time: ' + event.data;
  };
  }
}
