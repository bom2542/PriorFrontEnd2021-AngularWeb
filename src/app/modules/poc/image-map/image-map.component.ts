import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Panzoom from '@panzoom/panzoom';

@Component({
  selector: 'app-image-map',
  templateUrl: './image-map.component.html',
  styleUrls: ['./image-map.component.scss']
})
export class ImageMapComponent implements AfterViewInit {

  @ViewChild('scene', { static: false }) scene: ElementRef;
  panZoomController;
  zoomLevels: number[];

  currentZoomLevel: number;

  @Input()
  src: string

  @Input()
  coordinates: ImageMapCoordinate[]

  @Input()
  canEdit: boolean

  @Output('onClick')
  onClick: EventEmitter<ImageMapCoordinate> = new EventEmitter();

  constructor() { }

  ngOnInit() {  }

  getCoordinateStyle(coordinate: ImageMapCoordinate): object {
    return {
      top: `${coordinate.y}px`,
      left: `${coordinate.x}px`,
      height: `${coordinate.height}px`,
      width: `${coordinate.width}px`
    };
  }

  onAreaClick(coordinate : any) {
    this.onClick.emit(coordinate);
  }

  onAreaContext(e: MouseEvent, coordinate: ImageMapCoordinate) {
    if(this.canEdit)
    {
      if(coordinate) {
        console.log('editing')

      }
      else {
        console.log('creating')
      }

      e.stopPropagation();
      return false;
    }
  }

  onAreaCreate(x: number, y: number): ImageMapCoordinate {
    const coordinate = new ImageMapCoordinate({x, y, width: 100, height: 100});
    return coordinate
  }

  onAreaEdit(coordinate: ImageMapCoordinate): ImageMapCoordinate {
    return coordinate;
  }

  zoom() {
    const isSmooth = false;
    const scale = this.currentZoomLevel;

    if (scale) {
      const transform = this.panZoomController.getTransform();
      const deltaX = transform.x;
      const deltaY = transform.y;
      const offsetX = scale + deltaX;
      const offsetY = scale + deltaY;

      if (isSmooth) {
        this.panZoomController.smoothZoom(0, 0, scale);
      } else {
        this.panZoomController.zoomTo(offsetX, offsetY, scale);
      }
    }
  }

  zoomToggle(zoomIn: boolean) {
    const idx = this.zoomLevels.indexOf(this.currentZoomLevel);
    if (zoomIn) {
      if (typeof this.zoomLevels[idx + 1] !== 'undefined') {
        this.currentZoomLevel = this.zoomLevels[idx + 1];
      }
    } else {
      if (typeof this.zoomLevels[idx - 1] !== 'undefined') {
        this.currentZoomLevel = this.zoomLevels[idx - 1];
      }
    }
    if (this.currentZoomLevel === 1) {
      this.panZoomController.moveTo(0, 0);
      this.panZoomController.zoomAbs(0, 0, 1);
    } else {
      this.zoom();
    }
  }

  ngAfterViewInit() {
    this.zoomLevels = [0.1, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
    this.currentZoomLevel = this.zoomLevels[4];
    // Panzoom(document.querySelector('#scene'));
    this.panZoomController = Panzoom(this.scene.nativeElement);
  }

}

export class ImageMapCoordinate {
  x: number = 0
  y: number = 0
  width: number = 100
  height: number = 100
  name?: string

  constructor(init?: Partial<ImageMapCoordinate>) {
    Object.assign(this, init);
  }

}
