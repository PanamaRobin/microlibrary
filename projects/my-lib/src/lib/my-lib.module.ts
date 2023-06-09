import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyLibRoutingModule } from './my-lib-routing.module';
import { CommonModule } from '@angular/common';
import { RickMortyService } from './services/rick-morty.service';

@NgModule({
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, MyLibRoutingModule],
  providers: [RickMortyService],
})
export class MyLibModule {}
