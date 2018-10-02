import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class tugasComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'Tidak ada server baru yang telah dibuat';
  username="";

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit() {
  }

  onCreationStatus(){
    this.serverCreationStatus = 'Server telah dibuat!';
  }

  onUpdateServerName(event: Event){
    this.username = (<HTMLInputElement>event.target).value;
  }

  onReset(){
    this.username='';
  }

}
