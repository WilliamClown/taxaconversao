import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true, // Define este componente como standalone
  imports: [
    RouterModule,          // Para suporte ao roteamento
    MatSidenavModule,      // Menu lateral
    MatToolbarModule,      // Barra de ferramentas
    MatIconModule,         // Ícones
    MatListModule,         // Lista no menu
  ],
  templateUrl: './app.component.html', // Template principal da aplicação
  styleUrls: ['./app.component.css'],  // Estilos globais
})
export class AppComponent {
  isSmallScreen: boolean = false;
  isMenuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 768;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth <= 768;
    }
  }
  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
