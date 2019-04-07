import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Organization } from '../../../models/organization';
import { MatSnackBar, MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition } from '@angular/material';

@Component({
  selector: 'app-profile-organization-add',
  templateUrl: './profile-organization-add.component.html',
  styleUrls: ['./profile-organization-add.component.scss']
})
export class ProfileOrganizationAddComponent implements OnInit {
  requestForm: FormGroup;
  error = '';
  topPosition: MatSnackBarVerticalPosition = 'top';
  rightPosition: MatSnackBarHorizontalPosition = 'right';
  organization: Organization;

  constructor(private fb: FormBuilder, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.organizationName = "TEST ORG NAME";

    this.requestForm = this.fb.group({
      organizationName:['', [Validators.required, Validators.maxLength(50)]]
    })
  }

  close() {
    this.router.navigate(['/profile']);
  }

  onSubmit() {
    console.log(this.organizationName);

    this.organizationService
      .register(
        this.requestForm.get('organizationName').value,
        'http://localhost:8000/api/v1/organizations/')
      .subscribe(
        organization => {
          this.snackBar.open('Request sent successfully. Please wait for administrator review.', 'X', {
            duration: 4000,
            verticalPosition: this.topPosition,
            horizontalPosition: this.rightPosition
          });

          this.router.navigate(['/profile']);
        },
        error => {
          this.error = error;
        }
      )
  }
}
