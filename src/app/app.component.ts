import { Component } from '@angular/core';
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
export class AppComponent {}
