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
  constructor(public scrollProgressService: ScrollProgressService) {
    document.onscroll = (event) => {
      this.checkShowSectionNames();
    }
  }

  checkShowSectionNames() {
    const bodyRect = document.body.getClientRects()[0],
        sections = document.querySelectorAll(".section");
      
      if (Math.abs(bodyRect.top) < 840) {
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.add("show-names");
          console.log("set")
        }
      } else {
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove("show-names");
        }
      }
  }

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

    setTimeout(this.checkShowSectionNames, 100);
  }
}
