import { Component, Input, booleanAttribute } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  styles: ``,
  template: `
  <h1 class="text-3xl mb-5">
    {{ title }}
  </h1>
  `
  //  - {{withShadow}}
})
export class TitleComponent {

  @Input({ required: true }) title! : string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

}
