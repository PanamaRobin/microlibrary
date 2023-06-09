import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EpisodesListPage } from './episodes-list/episodes-list.page';
import { ComponentsModule } from '../../shared/components/components.module';
import { EpisodesRoutingModule } from './episodes-routing.module';

@NgModule({
  declarations: [EpisodesListPage],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    EpisodesRoutingModule,
  ],
  exports: [EpisodesListPage],
})
export class EpisodesModule {}
