import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-button',
  template: `
    <button type="{{ type }}" mat-raised-button [disabled]="loading || disabled" color="{{ color }}">
      <span *ngIf="!loading">{{ text }}</span>
      <mat-progress-spinner diameter="21" *ngIf="loading" color="{{ color }}" mode="indeterminate"></mat-progress-spinner>
    </button>
  `,
  styles: [
    `
      button { width: 100%; height: 100% }
      button mat-progress-spinner { margin: 8px auto; }
    `
  ]
})
export class LoadingButtonComponent {
  @Input() type = 'submit';
  @Input() color = 'primary';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() text = 'Submit';

  constructor() { }

}
