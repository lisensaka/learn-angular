import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { User } from '../shared/user.model';

@Component({
  selector: 'auth-component',
  templateUrl: './auth.component.html',
})
export class AuthComponent implements OnInit {
  isLoginMode = true;
  authForm = this.formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  error: string = '';
  //  new FormGroup({
  //     email: new FormControl('', [Validators.email, Validators.required]),
  //     password: new FormControl('', Validators.required),
  //   });

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }

    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    let authObservable: Observable<any>;

    if (this.isLoginMode) {
      authObservable = this.authService.doLogin(email, password);
      this.authForm.reset();
    } else {
      const user = new User('Lisen Saka', 'lisen@test.com', '123456', 'ADMIN');
      authObservable = this.authService.doSignUp(user);
    }

    authObservable.subscribe(
      (responseData) => {
        console.log(responseData);
        this.authService.isUserLoggedIn.next(true);
        this.router.navigate(['/recipes']);
      },
      (errorMessage) => {
        this.error = errorMessage;
      }
    );
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  ngOnInit(): void {}

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
}
