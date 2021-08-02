import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../../../../core/service/api.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data : any[] = [];
  @Output() name = new EventEmitter<string>()
  @Output() avatar = new EventEmitter<string>()
  @Output() mobile = new EventEmitter<string>()
  @Output() email = new EventEmitter<string>()

  constructor() {}

  ngOnInit(): void {}

  onEdit(name : string, avatar : string, mobile : string, email : string) {
    this.name.emit(name)
    this.avatar.emit(avatar)
    this.mobile.emit(mobile)
    this.email.emit(mobile)
  }

}
