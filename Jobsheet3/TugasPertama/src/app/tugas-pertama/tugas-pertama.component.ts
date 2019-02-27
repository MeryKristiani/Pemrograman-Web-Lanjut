import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas-pertama',
  templateUrl: './tugas-pertama.component.html',
  styleUrls: ['./tugas-pertama.component.css']
})
export class TugasPertamaComponent implements OnInit {

  title = 'ANGULAR';
  tiga = "3 Author";
  tigaa = ['Author1','Author2','Author3']
  
  getTigaa(){
  return this.tiga;
  }
  constructor() { }
  
  ngOnInit() {
  }
  
  }
