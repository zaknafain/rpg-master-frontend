import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-button',
  template: `
    <button type="{{ buttonType }}" mat-raised-button [disabled]="isLoading || isDisabled" color="{{ buttonColor }}">
      <span *ngIf="!isLoading">{{ alternateText }}</span>
      <mat-progress-spinner diameter="21" *ngIf="isLoading" color="{{ buttonColor }}" mode="indeterminate"></mat-progress-spinner>
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
  @Input('type') buttonType: string = 'submit';
  @Input('color') buttonColor: string = 'primary';
  @Input('disabled') isDisabled: boolean = false;
  @Input('loading') isLoading: boolean = false;
  @Input('text') alternateText: string = 'Submit';

  constructor() { }

}
