import {Component, HostListener, OnInit} from '@angular/core';
import {ImageMapCoordinate} from './image-map/image-map.component';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent implements OnInit {

  scrHeight: number = 0;
  scrWidth: number = 0;

  image: string = '../../../assets/images/map.png';

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  coordinates: ImageMapCoordinate[] = [
    {
      name: 'success',
      x: 10,
      y: 10,
      width: 0,
      height: 0,
    },
  ];

  showImage: boolean;

  constructor() {
    this.getScreenSize();
  }

  ngOnInit(): void {}

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
