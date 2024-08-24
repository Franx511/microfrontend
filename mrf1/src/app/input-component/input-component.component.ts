import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromShare from '@demo/libs';
@Component({
  selector: 'app-input-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-component.component.html',
  styleUrl: './input-component.component.css',
})
export class InputComponent {
  inputValue: string | undefined;
  constructor(private store: Store) {}

  onInputValue(event: any): void {
    const inputValue = event.target?.value as string;
    this.store.dispatch(
      fromShare.inputShareSuccess({ inputValue: inputValue })
    );
  }
}
