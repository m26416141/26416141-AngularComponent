import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVarService {
  private dataJudul: String = "";
  private dataIsi: String = "";
  private dataTgl: String = "";
  private hal1: Boolean = true;
  private hal2: Boolean = false;
  constructor() { }

  public getjudul(){
    return this.dataJudul
  }

  public setjudul(judul : string){
    this.dataJudul = judul;
  }

  public getisi(){
    return this.dataIsi
  }

  public setisi(isi : string){
    this.dataIsi = isi;
  }

  public gettanggal(){
    return this.dataTgl
  }

  public settanggal(tgl : string){
    this.dataJudul = tgl;
  }

  public gethal1(){
    return this.hal1
  }

  public sethal1(hal){
    this.hal1 = hal;
  }

  public gethal2(){
    return this.hal2
  }

  public sethal2(hal){
    this.hal2 = hal;
  }
}
