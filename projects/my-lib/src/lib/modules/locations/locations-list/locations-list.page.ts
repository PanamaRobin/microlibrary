import { Component } from '@angular/core';
import { ServiceNameService } from '../../../my-lib.service';

@Component({
  templateUrl: './locations-list.page.html',
  styleUrls: ['./locations-list.page.scss'],
})
export class LocationsListPage {
  locations: any[] = [];
  constructor(private readonly rickMorty: ServiceNameService) {}

  async ngOnInit(): Promise<void> {
    this.rickMorty.getLocations().subscribe((response: any) => {
      this.locations = response.results;
      console.log(this.locations);
    });
  }
}
