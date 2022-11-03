import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-left',
  templateUrl: './image-left.component.html',
  styleUrls: ['./image-left.component.css']
})
export class ImageLeftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() leftImageUrl = '';

}
