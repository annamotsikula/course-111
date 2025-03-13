import { Component } from '@angular/core';
import { Student } from '../core/interfaces/app.interface';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.scss'
})
export class UserDashboardComponent {
    userMaleInfo: Student = {
      name: 'John Doe',
      thumbnail: "https://static.vecteezy.com/system/resources/thumbnails/007/469/004/small_2x/graduated-student-in-simple-flat-personal-profile-icon-or-symbol-people-concept-illustration-vector.jpg",
      description: 'Current studying Angular!',
      address: {
        city: 'Tbilisi',
        zip: '214324',
        street: 'John Doe Street 1'
      }
    }
  
    userFemaleInfo: Student = {
      name: 'Kate Smith',
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Owxht5xCF6yRL77MLMWqGZx6dcjzuDeWrxs1eDahWjzQe40NM4XOqm8JANpYuxWVafU&usqp=CAU",
      description: 'Current studying Angular!',
      address: {
        city: 'Tbilisi',
        zip: '214324',
        street: 'John Doe Street 3'
      }
    }
    examHasPassed: boolean = false

    updatedUserList: string[] = []

    receiveSignal(name: string) {
      if(this.updatedUserList.includes(name)) return;
      this.updatedUserList.push(name);
    }
}
