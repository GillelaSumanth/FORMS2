import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FileComponent } from './file/file.component';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,FileComponent,CommonModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'forms';

  rows: number = 5; // Number of rows for the triangle

  getTriangleRows(): Array<number> {
    return Array(this.rows).fill(0).map((_, i) => i + 1);
  }

}
