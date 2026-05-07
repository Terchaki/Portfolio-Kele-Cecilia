import { Component, Input } from '@angular/core';
import { JourneyItem } from '../../portfolio.models';

@Component({
  selector: 'app-portfolio-experience',
  imports: [],
  templateUrl: './portfolio-experience.html',
  styleUrl: './portfolio-experience.scss'
})
export class PortfolioExperienceComponent {
  @Input({ required: true }) items!: JourneyItem[];
}
