import {Component, OnInit} from '@angular/core';
import {ImageMapCoordinate} from './image-map/image-map.component';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss'],
})
export class PocComponent implements OnInit {
  image: string = '../../../assets/images/map.png';

  coordinates: ImageMapCoordinate[] = [
    {
      name: 'success',
      x: 640,
      y: 515,
      width: 10,
      height: 10,
    },
    {
      name: 'edit',
      x: 0,
      y: 100,
      width: 10,
      height: 10,
    },
  ];

  showImage: boolean;

  constructor() {}

  ngOnInit(): void {}

  getClick(coordinate: ImageMapCoordinate) {
    console.log(`Clicked on ${coordinate.name}`);
  }
}
