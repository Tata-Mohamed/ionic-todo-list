import { Component, OnInit } from '@angular/core';
import { Game } from '../game/models/game.model';
import { StatisticsService } from 'src/app/services/statisticsService/statistics.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  topGames: Game[] = [];
  leastPlayedGames: Game[] = [];

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.topGames = this.statisticsService.getTopGames();
    this.leastPlayedGames = this.statisticsService.getLeastPlayedGames();
  }

}
