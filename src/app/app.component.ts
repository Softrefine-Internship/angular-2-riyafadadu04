import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('styledDiv') styledDiv!: ElementRef;

  onBgColorChange(event: Event) {
    const color = (<HTMLInputElement>event.target).value;
    this.styledDiv.nativeElement.style.backgroundColor = color;
  }

  onTextColorChange(event: Event) {
    const color = (<HTMLInputElement>event.target).value;
    this.styledDiv.nativeElement.style.color = color;
  }
}
