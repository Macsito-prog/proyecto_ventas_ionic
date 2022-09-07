import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-la-florida',
  templateUrl: './la-florida.page.html',
  styleUrls: ['./la-florida.page.scss'],
})
export class LaFloridaPage implements OnInit {

  constructor(private alertController : AlertController) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Añadido correctamente',
      subHeader: 'Gracias por su compra',
      buttons: ['Cerrar'],
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
