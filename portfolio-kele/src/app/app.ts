import { Component, signal } from '@angular/core';
import { portfolioContacts, portfolioHighlights, portfolioJourney, portfolioLearning } from './portfolio.data';
import { PortfolioContactComponent } from './components/portfolio-contact/portfolio-contact';
import { PortfolioExperienceComponent } from './components/portfolio-experience/portfolio-experience';
import { PortfolioFooterComponent } from './components/portfolio-footer/portfolio-footer';
import { PortfolioHeroComponent } from './components/portfolio-hero/portfolio-hero';
import { PortfolioHighlightsComponent } from './components/portfolio-highlights/portfolio-highlights';
import { PortfolioLearningComponent } from './components/portfolio-learning/portfolio-learning';
import { PortfolioProfileComponent } from './components/portfolio-profile/portfolio-profile';
import { PortfolioTopbarComponent } from './components/portfolio-topbar/portfolio-topbar';
import { Theme } from './portfolio.models';

@Component({
  selector: 'app-root',
  imports: [
    PortfolioTopbarComponent,
    PortfolioHeroComponent,
    PortfolioHighlightsComponent,
    PortfolioProfileComponent,
    PortfolioExperienceComponent,
    PortfolioLearningComponent,
    PortfolioContactComponent,
    PortfolioFooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly currentTheme = signal<Theme>('light');

  protected readonly highlights = portfolioHighlights;
  protected readonly journey = portfolioJourney;
  protected readonly learning = portfolioLearning;
  protected readonly contactItems = portfolioContacts;

  protected setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }
}
