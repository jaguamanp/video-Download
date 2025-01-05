import { Component } from '@angular/core';
import { YoutubeService } from '../services/youtube.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  videoUrl: string = '';
  selectedFormat: string = 'mp3';

  constructor(
      private youtubeService: YoutubeService,
      private alertController: AlertController
  ) {}

  async download() {
      if (!this.videoUrl || !this.selectedFormat) {
          const toast = await this.alertController.create({
              message: 'Por favor, completa todos los campos.',
              buttons: ['OK']
          });
          toast.present();
          return;
      }

      this.youtubeService.downloadMedia(this.videoUrl, this.selectedFormat).subscribe(
          async (response) => {
                console.log(response);
              const blob = new Blob([response], { type: this.selectedFormat === 'mp3' ? 'audio/mp3' : 'video/mp4' });
              const url = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `media.${this.selectedFormat}`;
              a.click();
              window.URL.revokeObjectURL(url);

              const toast = await this.alertController.create({
                  message: 'Se descargo el archivo correctamente.',
                  buttons: ['OK']
              });
              toast.present();
          },
          async (error) => {
              const toast = await this.alertController.create({
                  message: 'Error en la descarga.',
                  buttons: ['OK']
              });
              toast.present();
          }
      );
  }
}
