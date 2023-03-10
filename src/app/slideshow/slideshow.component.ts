import { Component } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent {
  imagesArr = ['code_editor.jpg', 'coding_at_night.jpg', 'laptop.jpg'];
  headlinesArr = ['Bring engineering to the next level!', 'Born to code :)', 'Graduated at DA'];
  currentIndex = 0;
  showImage = true;

  ngOnInit() {
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.currentIndex++;
      this.currentIndex = this.currentIndex % this.imagesArr.length;
      this.showImage = false;

      setTimeout(() => {
        this.showImage = true;
      }, 1);
    }, 10000);
  }
}
