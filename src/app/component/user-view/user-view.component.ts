import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  dataSource: any;

  displayedColumns: string[] = ['name', 'email', 'number', 'gender', 'city']


  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.GetAllUsers().subscribe(res => {

      this.dataSource = res;

      this.dataSource = this.dataSource['Message'];
      console.log(res);
    })
  }

}
