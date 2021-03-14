import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalVarService } from './global-var.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router : Router, public globalvar : GlobalVarService){
    this.halaman1 = true;
  }
  halaman1 = true;
  title = 'tugas-kelas';
  judul_note = "";
  isi_note = "";
  tgl_note = "";

  inputnote(){
    console.log("note input!")
    this.globalvar.setjudul(this.judul_note)
    this.globalvar.setisi(this.isi_note)
    this.globalvar.settanggal(this.tgl_note)
  }

  detailnote(){
    this.router.navigate(["/detail/"])
  }
}
