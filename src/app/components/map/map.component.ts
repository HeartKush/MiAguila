import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Trip {
  user: string;
  origin: string;
  destination: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  trip: Trip;
  constructor(private http: HttpClient ) {
   
  }

  getJSON(): Observable<any> {
    return this.http.get("../../../assets/data.json");
  }
  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.trip = data.trip;
      console.log(this.trip)
    });
  }

}
