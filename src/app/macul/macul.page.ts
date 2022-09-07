import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-macul',
  templateUrl: './macul.page.html',
  styleUrls: ['./macul.page.scss'],
})
export class MaculPage implements OnInit {

  constructor(private alertController : AlertController) { }

  async presentAlert(){
    const alert = this.alertController.create({
      header: 'Añadido correctamente',
      subHeader: 'Gracias por su compra',
      buttons: ['Cerrar'],
    });

   (await alert).present()
  }

  ngOnInit() {
  }

}
