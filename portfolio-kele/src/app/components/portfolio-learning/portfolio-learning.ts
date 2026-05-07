import { Component, Input } from '@angular/core';
import { LearningItem } from '../../portfolio.models';

@Component({
  selector: 'app-portfolio-learning',
  imports: [],
  templateUrl: './portfolio-learning.html',
  styleUrl: './portfolio-learning.scss'
})
export class PortfolioLearningComponent {
  @Input({ required: true }) items!: LearningItem[];
}
