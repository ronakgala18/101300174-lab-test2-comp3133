import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Mission {
  mission_name: string;
  launch_year: string;
  details: string;
  mission_patch_small: string;
}

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionFilterComponent implements OnInit {
  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  years: string[] = [];
  selectedYear: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMissionData().subscribe(missions => {
      this.missions = missions;
      this.filteredMissions = missions;
      this.years = this.getMissionYears();
    });
  }

  getMissionData(): Observable<Mission[]> {
    return this.http.get<Mission[]>('https://api.spacexdata.com/v3/launches');
  }

  getMissionYears(): string[] {
    const years = new Set<string>();
    this.missions.forEach(mission => years.add(mission.launch_year));
    return Array.from(years).sort().reverse();
  }

  filterMissionsByYear(): void {
    if (this.selectedYear) {
      this.filteredMissions = this.missions.filter(mission => mission.launch_year === this.selectedYear);
    } else {
      this.filteredMissions = this.missions;
    }
  }

  clearFilters(): void {
    this.selectedYear = '';
    this.filteredMissions = this.missions;
  }
}
