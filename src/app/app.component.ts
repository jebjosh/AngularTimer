import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit() {}
  title = 'timer';

  hour: any = '0' + 0;
  minute: any = '0' + 0;
  seconds: any = '0' + 0;
  milliseconds: any = '0' + 0;
  newtime = '';
  timer: any;
  startTime() {
    this.timer = setInterval(() => {
      this.milliseconds++;
      this.milliseconds =
        this.milliseconds < 10 ? '0' + this.milliseconds : this.milliseconds;

      if (this.milliseconds == 100) {
        this.milliseconds = 0;
        this.seconds++;
        this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      }
      if (this.seconds == 60) {
        this.seconds = 0;
        this.minute++;
        this.minute = this.minute < 10 ? '0' + this.minute : this.minute;
      }
      if (this.minute == 60) {
        this.hour++;
        this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
        this.minute = 0;
      }
    }, 10);
  }

  stopTime() {
    clearInterval(this.timer);
  }

  resetTime() {
    this.hour = '0' + 0;
    this.minute = '0' + 0;
    this.seconds = '0' + 0;
    this.milliseconds = '0' + 0;
    this.newtime = this.hour.toPrecision(3);
  }
}
