import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orderprocessor',
  templateUrl: './orderprocessor.component.html',
  styleUrls: ['./orderprocessor.component.css']
})
export class OrderprocessorComponent implements OnInit {
  @Input() stockSymbol: string = '';
  @Input() quantity: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
