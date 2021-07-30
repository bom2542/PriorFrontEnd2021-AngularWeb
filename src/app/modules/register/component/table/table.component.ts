import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data : any[] = [];
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = ['firstname', 'surname', 'email', 'mobile'];
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data)
  }

}
