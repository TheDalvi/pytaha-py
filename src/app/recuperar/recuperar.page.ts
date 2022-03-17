import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(public alerta: AlertController) { 
    
  }

  ngOnInit() {
  }


  async alertaBasica(){
    
    const miAlerta = await this.alerta.create({
      header: 'Titulo de la Alerta',
      message: 'Tres tristes tigres tragaban leche en un trigal',
      buttons: ['Entendido']
  
    });
    await miAlerta.present();
   }

}
