import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-page',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage {

  @Input() title: string;
  @Input() desc: string;

  constructor() { }

  ngOnInit() {
  }

}
