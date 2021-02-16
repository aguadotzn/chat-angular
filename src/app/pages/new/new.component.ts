import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'aag-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) { 
    this.userForm = this._formBuilder.group({
      username: ['', Validators.required ],
      email: ['', Validators.required ],
      name: this._formBuilder.group({
        firstname: [''],
        lastname: [''],
      })
    })
  }

  ngOnInit(): void {
  }

  public submit(): void {
  }
}
