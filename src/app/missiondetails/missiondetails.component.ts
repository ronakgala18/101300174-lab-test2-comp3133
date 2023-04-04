import { Mission } from './../models/mission.model';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexapiService } from '../network/spacexapi.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  constructor(private SpacexapiService: SpacexapiService, private route: ActivatedRoute, private titleService: Title) { }
  mission!: Mission;
  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.titleService.setTitle("SpaceX Mission Details");
      console.log(this.titleService.getTitle())

      const flightNumber = params['flightNumber'];
      this.getMissionDetails(flightNumber);

    });
  }

  getMissionDetails(flightNumber: string) {

    this.SpacexapiService.getMissionByFlightNumber(flightNumber).subscribe((mission: Mission) => {
      this.mission = mission;
    });

  }
}
