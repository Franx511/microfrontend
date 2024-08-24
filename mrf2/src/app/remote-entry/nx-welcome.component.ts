import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as fromShare from '@demo/libs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-nx-welcome',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>This is micro fe 2</h3>
    <h4>Micro fe 1 value is {{ inputValue }}</h4>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  inputValue: string = '';

  constructor(private store: Store) {}
  ngOnInit() {
    let $input = this.store.select(fromShare.selectShareInputValue);
    $input.subscribe((value) => {
      this.inputValue = value;
    });
  }
}
