import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import leaflet from 'leaflet';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';

@Component({
  selector: 'app-mobileguide',
  templateUrl: './mobileguide.page.html',
  styleUrls: ['./mobileguide.page.scss'],
})

export class MobileguidePage{

  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  constructor(
    public modalController: ModalController
  ) {
 
  }
 
  ionViewDidEnter() {
    this.loadmap();
  }
 
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);

    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let markerGroup = leaflet.featureGroup();
      let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
        alert('Dein Standort');
      });
      let marker2: any = leaflet.marker(['51.332293', '12.368625']).on('click', () => {
        // alert('Albertina');
        this.presentModal({
          title: 'Albertina',
          desc: 'Die Universit\u00e4tsbibliothek besteht aus der Hauptbibliothek \"Bibliotheca Albertina\" sowie 20 Zweigbibliotheken in der N\u00e4he der wissenschaftlichen Einrichtungen der Universit\u00e4t Leipzig. Die Albertina stellt dabei nicht nur die Hauptanlaufstelle von tausenden Studenten f\u00fcr ihre Recherchen und Studien dar, sondern ist auch ein wichtiger Bestandteil des studentischen Lebens der Stadt Leipzig. Ein atemberaubendes Flair, dass von dem Geb\u00e4ude und seiner Architektur ausgeht, sowie die vielen M\u00f6glichkeiten innerhalb des Bibliothekkomplexes, machen die Albertina zu der Bibliothek, die wir heute kennen.'
        });
      });
      markerGroup.addLayer(marker);
      markerGroup.addLayer(marker2);
      this.map.addLayer(markerGroup);
      }).on('locationerror', (err) => {
        alert(err.message);
    });
  }

  async presentModal(info) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        title: info['title'],
        desc: info['desc'],
      }
    });
    return await modal.present();
  }

}
