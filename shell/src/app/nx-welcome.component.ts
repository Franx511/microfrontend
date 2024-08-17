import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'mrf1/InputComponent';
@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule, InputComponent],
  template: `
    <h1>
      This is app shell
      <app-input-component></app-input-component>
    </h1>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {}
