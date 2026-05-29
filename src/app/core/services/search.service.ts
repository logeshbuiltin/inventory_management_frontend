import { Injectable } from '@angular/core';

// Ensure the Highlight API interfaces are correctly typed or bypassed if missing
declare var Highlight: any;
declare var CSS: any;

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() {}

  public applyHighlight(searchTerm: string): void {
    // If the browser does not support the CSS Custom Highlight API, skip gracefully.
    if (!('highlights' in CSS)) {
      console.warn('CSS Custom Highlight API not supported in this browser.');
      return;
    }

    // Always clear the previous highlight mapping first
    CSS.highlights.clear();

    if (!searchTerm || searchTerm.trim() === '') {
      return;
    }

    const searchLower = searchTerm.toLowerCase();
    const treeWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes: Node[] = [];

    let currentNode = treeWalker.nextNode();
    while (currentNode) {
      textNodes.push(currentNode);
      currentNode = treeWalker.nextNode();
    }

    const ranges: Range[] = [];

    textNodes.forEach(node => {
      const text = node.textContent?.toLowerCase() || '';
      let index = 0;

      while ((index = text.indexOf(searchLower, index)) !== -1) {
        const range = new Range();
        range.setStart(node, index);
        range.setEnd(node, index + searchTerm.length);
        ranges.push(range);
        index += searchTerm.length;
      }
    });

    if (ranges.length > 0) {
      try {
        const searchHighlight = new Highlight(...ranges);
        CSS.highlights.set('search-match', searchHighlight);
      } catch (e) {
        console.error('Failed to apply native highlight ranges:', e);
      }
    }
  }
}
