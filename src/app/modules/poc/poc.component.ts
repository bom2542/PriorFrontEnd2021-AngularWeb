import {Component, OnInit} from '@angular/core';
import {ImageMapCoordinate} from './image-map/image-map.component';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent implements OnInit {
  image: string =
    'https://image.shutterstock.com/image-vector/solar-system-sun-planets-vector-260nw-751091653.jpg';

  coordinates: ImageMapCoordinate[] = [
    {
      name: 'The sun',
      x: 0,
      y: 200,
      width: 95,
      height: 100,
    },
    {
      name: 'The sun',
      x: 0,
      y: 100,
      width: 95,
      height: 100,
    },
  ];

  showImage: boolean;

  constructor() {}

  ngOnInit(): void {}

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
