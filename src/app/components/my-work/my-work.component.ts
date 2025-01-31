import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss',
})
export class MyWorkComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const timeline = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: '.my-work',
        start: 'top top',
        end: ['+=', window.innerHeight * 4].join(''),
        scrub: true,
      },
      yoyo: true,
      repeat: -1,
    });
  }
}
