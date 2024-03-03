import { Component } from '@angular/core';
import { NgbModal, NgbTimepickerModule, NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { OurModalComponent } from '../our-modal/our-modal.component';


@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css'],
})
export class CountDownComponent 
{
  countdown: number = 10; // Initial countdown time in seconds
  intervalId: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        clearInterval(this.intervalId);
        this.openModal();
      }
    }, 1000);
  }

  openModal() {
    // Open modal when countdown is over
    const modalRef = this.modalService.open(OurModalComponent);
  }
}


