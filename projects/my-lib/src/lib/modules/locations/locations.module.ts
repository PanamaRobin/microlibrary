import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsListPage } from './locations-list/locations-list.page';
import { IonicModule } from '@ionic/angular';
import { LocationsListRoutingModule } from './locations-routing.module';

@NgModule({
  declarations: [LocationsListPage],
  imports: [CommonModule, IonicModule, LocationsListRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LocationsModule {}
