import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-footer',
  imports: [],
  templateUrl: './portfolio-footer.html',
  styleUrl: './portfolio-footer.scss',
})
export class PortfolioFooterComponent {
  public currentYear: number = new Date().getFullYear();
}
