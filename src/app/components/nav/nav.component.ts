import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, 
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {
  isSidenavOpen = false;

  closeSidenav() {
    this.isSidenavOpen = false;
  }
}
