import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  ViewChild,
  HostListener,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ScrollProgressService } from '../../services/scroll-progress.service';
import { Section } from '../../interfaces/section.interface';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-progress.component.html',
  styleUrl: './scroll-progress.component.scss',
})
export class ScrollProgressComponent implements AfterViewInit {
  currentProgress: number = 0;
  scrollButtonState: boolean = false;
  scrollHeight: number = 0;
  currentSection: string | null = null;
  scrollY: number = 0;
  private mutationObserver: MutationObserver | undefined;

  constructor(public scrollProgressService: ScrollProgressService) {}

  setScrollProgress() {
    // Reset the sections.
    this.scrollProgressService.resetSections();

    // Add a scroll listener and calculate the progress of the scroll in %.
    window.onscroll = () => {
      const progress =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      this.currentProgress = progress > 100 ? 100 : progress;

      const sections = this.scrollProgressService.sections.getValue();
      sections.forEach((section) => {
        const sectionRect = section.element.getBoundingClientRect(),
          isInView = window.scrollY >= sectionRect.top;
        if (isInView) {
          this.currentSection =
            section.element.getAttribute('data-section-name');
        }
      });
    };

    const sectionElements = document.querySelectorAll(
      'section[data-section-name]'
    );
    let totalWidthSum = 0;
    sectionElements.forEach((sectionElement, index) => {
      const sectionScrollRect = sectionElement.getBoundingClientRect(),
        sectionScrollPos = sectionScrollRect.top,
        sectionHeight = sectionScrollRect.height,
        sectionName: any = sectionElement.getAttribute('data-section-name'),
        section: Section = {
          element: sectionElement,
          name: sectionName,
          position: sectionScrollPos,
          height: (sectionHeight / this.scrollHeight) * 100,
        };

      totalWidthSum += section.height;
      let heightBefore = section.height;
      if (index == sectionElements.length - 1) {
        section.height = section.height + (totalWidthSum - 100);
        console.log(heightBefore, section.height, totalWidthSum);
      }

      this.scrollProgressService.addSection(section);
    });
  }

  ngAfterViewInit(): void {
    this.mutationObserver = new MutationObserver(() => {
      const currentScrollHeight = document.documentElement.scrollHeight;
      if (currentScrollHeight !== this.scrollHeight) {
        this.scrollHeight = currentScrollHeight;
        this.setScrollProgress();
      }
    });
    this.mutationObserver.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    this.scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    this.setScrollProgress();
  }
  scrollTo(to = 0) {
    window.scrollTo({ top: to, behavior: 'smooth' });
  }
}
