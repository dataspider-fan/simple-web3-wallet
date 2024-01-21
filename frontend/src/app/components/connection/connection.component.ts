import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss'],
})
export class ConnectionComponent implements OnInit {

  connectMessage = '接続する';
  returnMessage = '';
  walletMessage = '未受信';
  cardColor = 'light';

  constructor() { }

  async ngOnInit() {
    ;
  }

  async doConnect() {
    const waleltFunctions = (window as any).gatefunctions;
    if (typeof waleltFunctions !== 'undefined') {
      console.log('[UI] Wallet is installed!');
    }
    console.log('[UI] Wallet functions: ', waleltFunctions);
    const hello = await waleltFunctions.HelloWorld();
    console.log('[UI] HelloWorld: ', hello);
    this.cardColor = 'success';
    this.connectMessage = '接続しました'
    this.walletMessage = hello.data.returnMessage;

  }
}
