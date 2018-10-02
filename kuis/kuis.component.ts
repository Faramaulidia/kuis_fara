import { Component, OnInit } from '@angular/core';
// import { datamhs } from '../shared/datamhs';
import { datamhs } from 'src/app/kuis/shared/datamhs';


@Component({
  selector: 'app-kuis',
  templateUrl: './kuis.component.html',
  styleUrls: ['./kuis.component.css']
})
export class KuisComponent implements OnInit {
  nim ='';
  nama ='';
  kelas ='';
  daftarMhs:datamhs[] = [];
  mhs;
  constructor() { }

  ngOnInit() {
  }

  tambahMhs(){
    this.mhs = new datamhs(this.nim, this.nama, this.kelas); 
    this.daftarMhs.push(this.mhs);
    this.nim ='';
    this.nama ='';
    this.kelas ='';
  }


}
