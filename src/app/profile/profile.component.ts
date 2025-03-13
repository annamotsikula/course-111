import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Student } from '../core/interfaces/app.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnChanges, AfterViewInit {

  userInput: string = ""

  @Input({ alias: 'user', required: true }) userInfo!: Student
  @Input() workshopDone: boolean = false
  @Input() examPassed: boolean = true;

  @Output() sendSignal: EventEmitter<string> = new EventEmitter()

  @ViewChild("elem") paragraphElement!: ElementRef<any>


  constructor() {}

  ngOnInit() {
    console.log(this.paragraphElement)

    // console.log('Component initialized', this.userInfo.name)
    this.userInfo = {
      name: 'John Smith',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB9oNAUYeeV_9VFP8EUaJd1YOvR44FN2flCw&s",
      description: 'Current mastering Angular!',
      address: {
        city: 'Tbilisi',
        zip: '214324',
        street: 'John Doe Street 4'
      }
    }
  }
  ngAfterViewInit(): void {
    console.log(this.paragraphElement.nativeElement);
    
    // <HTMLParagraphElement>(this.paragraphElement.nativeElement);
    (this.paragraphElement.nativeElement as HTMLParagraphElement).style.backgroundColor = 'purple'
    // this.paragraphElement.nativeElement
  }


  ngOnChanges(changes: SimpleChanges) {
    console.log('ONCHANGES WORKS!!!')
    console.log(changes);

  }
  updateMe() {
    console.log('Send my name:')
    this.sendSignal.emit(this.userInfo.name)
  }

  changeCity() {
    this.userInput === 'Tbilisi' ? null : this.sendSignal.emit(this.userInput)

  }

}
