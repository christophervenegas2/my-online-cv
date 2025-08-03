import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: false
})
export class MainComponent implements OnInit {

  public paused = false;
  public pauseOnHover = true;
  public images = [1,2,3,4,5].map((n) => `../../../assets/photos/${n}.png`);

  constructor() {
  }

  ngOnInit(): void {
  }


  togglePaused() {

  }
}
