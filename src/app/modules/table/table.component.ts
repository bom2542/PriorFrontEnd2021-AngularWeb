import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource = new MatTableDataSource<[]>();
  displayedColumns: string[] = ['position', 'username', 'password'];
  constructor() { }

  ngOnInit(): void {
    let mockData : any[] = [
      {position: 1, username: 'test', password: '1234'}
    ]
    this.dataSource = new MatTableDataSource(mockData)
  }

}
