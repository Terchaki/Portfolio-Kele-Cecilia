import { Component, EventEmitter, Input, Output } from '@angular/core';

type Theme = 'light' | 'spotlight';

@Component({
  selector: 'app-portfolio-topbar',
  imports: [],
  templateUrl: './portfolio-topbar.html',
  styleUrl: './portfolio-topbar.scss'
})
export class PortfolioTopbarComponent {
  @Input({ required: true }) currentTheme!: Theme;

  @Output() readonly themeChange = new EventEmitter<Theme>();

  protected menuOpen = false;

  protected setTheme(theme: Theme): void {
    this.themeChange.emit(theme);
  }

  protected toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  protected closeMenu(): void {
    this.menuOpen = false;
  }
}
