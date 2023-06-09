import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LocationsListPage } from './locations-list/locations-list.page';

const routes: Routes = [
  {
    path: '',
    component: LocationsListPage,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsListRoutingModule {}
