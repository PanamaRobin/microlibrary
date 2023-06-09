import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { LocationsModule } from './modules/locations/locations.module';
import { MyLibRoutingModule } from './my-lib-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, IonicModule, MyLibRoutingModule, LocationsModule],
})
export class MyLibModule {}
