import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Section } from '../interfaces/section.interface';

@Injectable({
  providedIn: 'root',
})
export class ScrollProgressService {
  // Define the type for the list sections
  public sections = new BehaviorSubject<Section[]>([]);
  constructor() {}

  // Add a section to the list
  addSection(item: Section): void {
    const currentItems = this.sections.getValue();
    this.sections.next([...currentItems, item]);
  }

  // Remove a section from the list
  removeSection(item: Section): void {
    const currentItems = this.sections.getValue();
    const updatedItems = currentItems.filter((i) => i !== item);
    this.sections.next(updatedItems);
  }

  resetSections() {
    this.sections.next([]);
  }

  registerScrollMarkers(
    container: HTMLElement,
    markersCount = 2,
    pre = 'an'
  ): void {
    // Initialize the custom markers to change the timeline
    for (let markerIndex = 0; markerIndex <= markersCount; markerIndex++) {
      const marker = document.createElement('span'),
        markerClass = pre + '-marker-' + (markerIndex + 1);
      marker.innerHTML = '<span>' + markerClass + '</span>';
      marker.className = 'scroll-marker ' + markerClass;
      marker.style.top = (window.innerHeight / 2) * markerIndex + 'px';
      container.appendChild(marker);
    }
  }
}
