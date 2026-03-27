import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.css'],
  standalone: false
})
export class AccountLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('bgVideo') video!: ElementRef<HTMLVideoElement>;

// enableSound(){
//   this.video.nativeElement.muted = false;

// }
// MuteSound(){
//   this.video.nativeElement.muted = true;
// }
 isMuted = true;

  toggleSound() {
    const vid = this.video.nativeElement;

    this.isMuted = !this.isMuted;
    vid.muted = this.isMuted;

    if (!this.isMuted) {
      vid.play();
    }
  }

}
