import { Component, Input } from '@angular/core';
import { ContactItem } from '../../portfolio.models';

@Component({
  selector: 'app-portfolio-contact',
  imports: [],
  templateUrl: './portfolio-contact.html',
  styleUrl: './portfolio-contact.scss'
})
export class PortfolioContactComponent {
  @Input({ required: true }) items!: ContactItem[];
}
