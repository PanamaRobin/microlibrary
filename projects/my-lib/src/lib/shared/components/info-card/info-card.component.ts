import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../../modules/interfaces/model';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss'],
})
export class InfoCardComponent implements OnInit {

  @Input()
  character!: Character;
  
  constructor() { }

  ngOnInit() {}

}
