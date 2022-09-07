import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-puente-alto',
  templateUrl: './puente-alto.page.html',
  styleUrls: ['./puente-alto.page.scss'],
})
export class PuenteAltoPage implements OnInit {

  constructor(private alertController : AlertController) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Añadido Correctamente',
      subHeader: 'Gracias por su compra.',
      buttons: ['Cerrar']
    })

    await alert.present()
  }

  ngOnInit() {
  }

}
