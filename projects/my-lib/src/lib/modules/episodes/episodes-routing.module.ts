import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpisodesListPage } from './episodes-list/episodes-list.page';

const routes: Routes = [
  {
    path: '',
    component: EpisodesListPage,
  },
  {
    path: 'info',
    loadChildren: () =>
      import('../../shared/pages/info/info.module').then(
        (m) => m.InfoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
