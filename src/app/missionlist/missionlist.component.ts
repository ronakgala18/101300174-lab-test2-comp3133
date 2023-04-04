import { SpacexapiService } from '../network/spacexapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];
  selectedYear: string = '';

  constructor(private SpacexapiService: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.getMissions();
  }

  getMissions() {
    this.SpacexapiService.getMissions().subscribe((missions: Mission[]) => {
      this.missions = missions;
    });
  }

  showMissionDetails(flightNumber: string) {
    this.router.navigate(['/missiondetails', flightNumber]);
  }

  filterMissions() {
    if (this.selectedYear === '') {
      this.getMissions();
    } else {
      this.SpacexapiService.filterMissionsByYear(this.selectedYear).subscribe((missions: Mission[]) => {
        this.missions = missions;
      });
    }
  }
}
