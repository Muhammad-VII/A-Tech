import { Component } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CardViewComponent, ChartComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
