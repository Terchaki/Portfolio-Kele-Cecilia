import { Component, Input } from '@angular/core';
import { Highlight } from '../../portfolio.models';

@Component({
  selector: 'app-portfolio-highlights',
  imports: [],
  templateUrl: './portfolio-highlights.html',
  styleUrl: './portfolio-highlights.scss'
})
export class PortfolioHighlightsComponent {
  @Input({ required: true }) items!: Highlight[];
}
