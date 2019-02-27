import { Component, OnInit } from '@angular/core';
import { TugasKeduaService } from '../tugas-kedua.service';

@Component({
  selector: 'app-tugas-kedua',
  templateUrl: './tugas-kedua.component.html',
  styleUrls: ['./tugas-kedua.component.css']
})
export class TugasKeduaComponent implements OnInit {

  currentDate = Date.now();
  title = 'INI Tugas Pertama Biodata';

  name = 'Nama : Mery Kristiani';
  address = 'Alamat : Jln. Bunga Andong Barat No.07';
  hobby = 'Hobby saya';

  TugasKedua;
  // TugasKedua = [
  //   {NO: 1, Hobby: 'berlari', Keterangan: 'lari 1 jam tiap hari'},
  //   {NO: 2, Hobby: 'senam', Keterangan: 'senam tiap sore'},
  //   {NO: 3, Hobby: 'bermain musik', Keterangan: 'bermain musik saat waktu senggang'}
  // ]

  constructor(private service:TugasKeduaService) {
    this.TugasKedua = service.getTugasKedua();
   }

  ngOnInit() {
  }

}
