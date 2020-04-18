import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  timer = 0;
  timerRef = null;
  @Output() timerEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGameStart(){
    this.timerRef = setInterval(() =>{
      this.timer++;
      this.timerEvent.emit(this.timer.toString());
    },1000);
  }

  onGameStop(){
    clearInterval(this.timerRef)
    this.timer = 0;
  }
}