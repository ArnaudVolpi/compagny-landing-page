import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public textFadeOptions = ['vos projets', 'vos applications', 'votre site']
  public selectedTextFade = this.textFadeOptions[0];
  public countTextFade = 0;

  constructor() { }

  ngOnInit(): void {
    // Update Text every 2sec
    interval(2000).subscribe(x => {
      this.changeFadeText();
    });

  }

  changeFadeText() {
    if (this.countTextFade < 2) {
      this.countTextFade++;
    } else {
      this.countTextFade = 0;
    }
    this.selectedTextFade = this.textFadeOptions[this.countTextFade]

  }

}
