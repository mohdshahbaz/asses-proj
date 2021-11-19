import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { validateFullName } from 'src/shared/fullname.validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  submitted!: Boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, validateFullName]],
      email: [
        '',
        [
          Validators.email,
          Validators.pattern(/^[\w.+\-]+@gmail\.com$/),
          Validators.required,
        ],
      ],
      number: [
        '',
        [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)],
      ],
      city: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  get f() {
    return this.userForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.userForm.invalid) {
      return;
    }

    this.createUser();

  }

  createUser() {

    const postData = this.userForm.value;
    postData.number = postData.number.toString();

    this.userService.CreateUser(postData).subscribe(res => {
      if (res) {
        this.toastr.success('Data Saved!');
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    })
  }

}
