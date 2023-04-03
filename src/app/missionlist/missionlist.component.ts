import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions!: Mission[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.spacexdata.com/v3/launches').subscribe(data => {
      this.missions = data as any[];
    });
  }
}
