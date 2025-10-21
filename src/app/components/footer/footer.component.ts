import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'Footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {
  constructor(private alertController: AlertController) {}

  texto: string = '';

  mostrarAlerta(event: any): void {
   
    this.texto = event.target.value.toLowerCase();
  }
  async mostrarAlerta1(): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Cadastro feito com sucesso!',
      message: "Você receberá em seu email novidades sobre a série em breve!",
      buttons: ['OK'],
    });

    await alert.present();
  }
  ngOnInit() {
   
  }
  

}
