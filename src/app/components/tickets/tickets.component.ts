import { Component } from '@angular/core';
import { CardViewComponent } from '../card-view/card-view.component';
import { ChartComponent } from '../chart/chart.component';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CardViewComponent, ChartComponent, TableModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent {

}
