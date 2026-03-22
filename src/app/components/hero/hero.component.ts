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
    gsap.to('.hero-text-main', {
      y: -40,
      filter: 'blur(20px)',
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });

    gsap.to('.section::after', {
      opacity: 1,
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top',
        end: 'bottom'
      },
    });

    // Remove the scroll indicator
    gsap.to('.scroll-animation', {
      y: 200,
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });

    // Scroll back top button
    gsap.fromTo(
      '.scroll-to-top',
      {
        y: 1000,
        scrollTrigger: {
          trigger: '#main-content',
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      },
      {
        y: -10,
        scrollTrigger: {
          trigger: '#main-content',
          start: 'top bottom',
          end: 'top center',
          scrub: true,
        },
      }
    );

    // Animate the plaques also
    gsap.to('.plaque', {
      y: -50,
      opacity: 0,
      scrollTrigger: {
        trigger: '#main-content',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
    });
  }

  scrollToMainContent() {
    const mainContent = document.getElementById('main-content');
    mainContent?.scrollIntoView({ behavior: 'smooth' });
  }
}
