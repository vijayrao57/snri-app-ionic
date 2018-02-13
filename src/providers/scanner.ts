import { Injectable } from '@angular/core';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

/*
  Generated class for the ScannerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ScannerProvider {

  constructor(private _barcodescanner: BarcodeScanner) {
  }

  scaniten(){
    
    this._barcodescanner.scan().then(barcodeData => {
      alert("Scanned Successfully" + barcodeData);
    }).catch(err => {
      alert("Error" + err);
    })
  }

}
