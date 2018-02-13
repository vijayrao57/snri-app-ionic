import { Component } from '@angular/core';
import { NavController,Platform } from 'ionic-angular';
import { ScannerProvider } from "../../providers/scanner";

declare var cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public scan:any;

  constructor(public navCtrl: NavController, public platform: Platform , public scanner: ScannerProvider) {
  }

  scanItem(){
    this.scanner.scaniten();
  }

  scanPanasonicItem(){
    this.platform.ready().then(() => {
    cordova.plugins.PanasonicScanner.activate({}, function(result) {
      alert("Scanned Successfully" + result)
    }, function(error) {
      alert("Error while scanning..." + error);
    });
    }).catch((err) => {
      alert(err);
    })
  }


}
