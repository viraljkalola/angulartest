import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  //Loginform creation
  constructor(public fb: FormBuilder,
    private router: Router,
    private service: CrudService) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]],
    });
  }

  ngOnInit(): void {
  }

  get myForm() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return false;
    } else {
      return this.service.loginUser(this.loginForm.value).subscribe(
        (res: any) => {
          console.log(res.tokens.access.token);
          // localStorage.setItem('alvi',res.tokens.access.token);
          this.router.navigateByUrl('/dashboard');
        });
    }
  }
}
