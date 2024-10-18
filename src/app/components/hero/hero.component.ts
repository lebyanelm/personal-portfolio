import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollSmoother } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'ease.inOut' });

    // Blur fading effect
    gsap.to('.hero-container', {
      y: 100,
      filter: 'blur(20px)',
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });

    // Remove the scroll indicator
    gsap.to('.scroll-animation', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });

    // Animate the plaques also
    gsap.to('.plaque', {
      y: 100,
      opacity: 0,
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });
  }
}
