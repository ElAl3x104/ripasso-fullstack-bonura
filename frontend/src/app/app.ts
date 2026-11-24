import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { inject } from '@angular/core';
import { BranoService } from './services/brano-service';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
    constructor() {
    const brani$ = inject(BranoService).getBrani();
    brani$.subscribe(d => console.log('1°', d.length));
    brani$.subscribe(d => console.log('2°', d.length));
  }
}
