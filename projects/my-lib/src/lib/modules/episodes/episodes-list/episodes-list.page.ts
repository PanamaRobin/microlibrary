import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RickMortyService } from '../../../services/rick-morty.service';
import { Episode } from '../../interfaces/model';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes-list.page.html',
  styleUrls: ['./episodes-list.page.scss'],
})
export class EpisodesListPage implements OnInit {
  public episodesList: Episode[] = [];
  constructor(
    private readonly rickMorty: RickMortyService,
    private readonly navController: NavController
  ) {}

  async ngOnInit(): Promise<void> {
    this.rickMorty.getEpisodes().subscribe((response: any) => {
      this.episodesList = response.results;
      console.log(this.episodesList);
    });
  }

  selectedEpisode(episode: Episode) {
    const state = {
      episode,
    };
    this.navController.navigateForward(`/episodes/info`, { state });
  }
}
