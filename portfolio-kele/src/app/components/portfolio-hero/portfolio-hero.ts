import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-hero',
  imports: [NgTemplateOutlet],
  templateUrl: './portfolio-hero.html',
  styleUrls: ['./portfolio-hero.scss'],
})
export class PortfolioHeroComponent {
  public widthSize: number = window.innerWidth;

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
  }

  private onResize(): void {
    this.widthSize = window.innerWidth;
  }

  get isMobile(): boolean {
    return this.widthSize < 1081;
  }
}
