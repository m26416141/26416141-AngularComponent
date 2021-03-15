import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from '../global-var.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private router : Router, public varglobal : GlobalVarService) {
    this.judul2 = varglobal.getjudul();
    this.isi2 = varglobal.getisi();
    this.tgl2 = varglobal.gettanggal();
  }

  halaman2; judul2; isi2; tgl2;

  ngOnInit(): void {
  }

}
