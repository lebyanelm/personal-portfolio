import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollProgressService } from './services/scroll-progress.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  @ViewChild('FliptextStory') fliptextStory!: ElementRef<HTMLDivElement>;

  title = 'personal-portfolio';
  constructor(public scrollProgressService: ScrollProgressService) {}

  ngAfterViewInit(): void {
    this.scrollProgressService.registerScrollMarkers(
      this.fliptextStory.nativeElement,
      4,
      'flip'
    );

    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({ ease: 'ease.inOut' });

    const timeline = gsap.timeline({
      scrollTrigger: {
        pin: true,
        trigger: '#fliptext-story',
        start: 'top top',
        end: ['+=', window.innerHeight * 3].join(''),
        scrub: true,
      },
      yoyo: true,
      repeat: -1,
    });

    // First storyline
    timeline.to('.fliptext-1', {
      scrollTrigger: {
        trigger: '.flip-marker-1',
        start: 'center center',
        scrub: true,
      },
      opacity: 1,
    });

    timeline.to('.fliptext-1', {
      scrollTrigger: {
        trigger: '.flip-marker-2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 0,
    });

    // Second storyline
    timeline.to('.fliptext-2', {
      scrollTrigger: {
        trigger: '.flip-marker-2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 1,
    });

    timeline.to('.fliptext-2', {
      scrollTrigger: {
        trigger: '.flip-marker-3',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 0,
    });

    // Third storyline
    timeline.to('.fliptext-3', {
      scrollTrigger: {
        trigger: '.flip-marker-3',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 1,
    });

    timeline.to('.fliptext-3', {
      scrollTrigger: {
        trigger: '.flip-marker-4',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 0,
    });

    // Fourth storyline
    timeline.to('.fliptext-4', {
      scrollTrigger: {
        trigger: '.flip-marker-4',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 1,
    });
  }
}
