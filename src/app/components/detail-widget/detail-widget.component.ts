import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';

interface Trip {
  user: string;
  origin: string;
  destination: string;
}
@Component({
  selector: 'app-detail-widget',
  templateUrl: './detail-widget.component.html',
  styleUrls: ['./detail-widget.component.scss']
})
export class DetailWidgetComponent implements OnInit {
  trip: Trip;
  constructor(private http: HttpClient ) {
   
  }

  getJSON(): Observable<any> {
    return this.http.get("../../../assets/data.json");
  }
  selectedStatus:number = 1;
  selectedTrip:number = 1;
  selectedAddress: string='';
  selectedAddress2: string='';
  ngOnInit() {
    this.getJSON().subscribe(data => {
      this.trip = data.trip;
      this.updateOriginPinPosition();
      this.updateDestinationPinPosition();
    });
  }
  updateSelectedStatus(newStatus: number){
    this.selectedStatus = newStatus;
  }
  updateSelectedTrip(newTrip: number){
    this.selectedTrip = newTrip;
  }
  updateOriginAddress(newAddress: string){
    this.trip.origin= newAddress;
    this.updateOriginPinPosition();
  }
  updateDestinationAddress(newAddress: string){
    this.trip.destination = newAddress;
    this.updateDestinationPinPosition();
  }
  updateOriginPinPosition(){
    let yCoord = Math.random()*500+300;
    let xCoord = Math.random()*800;
    let pinTop = `${yCoord}px`;
    let pinRight = `${xCoord}px`;
    document.getElementById('origin-pin-map').style.top = pinTop;
    document.getElementById('origin-pin-map').style.right = pinRight; 
  }

  updateDestinationPinPosition(){
    let yCoord = Math.random()*500+300;
    let xCoord = Math.random()*800;
    let pinTop = `${yCoord}px`;
    let pinRight = `${xCoord}px`;
    document.getElementById('destination-pin-map').style.top = pinTop;
    document.getElementById('destination-pin-map').style.right = pinRight; 
  }


}
