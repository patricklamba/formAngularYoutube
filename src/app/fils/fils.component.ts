import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  // get this property accessible for all the component so that the parent can acces to child property
  @Input() filsProperty;
  // used to send event so that the father component can listen to the children modification
  @Output() sendRequestToData = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    console.log('VOICI le composant fils : ' + this.filsProperty);
  }

  // Methode to send an event
  sendEvent() {
    this.sendRequestToData.emit(
      `Please can I have some moneey :)`
    );
  }
}
