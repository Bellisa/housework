import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { UserModel } from 'src/models';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  public loginForm: FormGroup;
  public responseError = '';
  constructor(private router: Router, private userService: UserService) { this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
}

isFormControlInvalid(controlName: string): boolean {
  const formControl = this.loginForm.get(controlName);

  return !formControl || (formControl.invalid || !formControl.value.trim()) && (formControl.touched || formControl.dirty);
}

login() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    console.log('email password', email, password)
    if (!email.trim() || !password.trim()) {
      return;
    }
    console.log('email password2', email, password)
    this.responseError = '';
    
    this.userService.getUser(email, password)
    .then((user) => {
      console.log('user', user)
        if(!user) {
          this.responseError = 'User not found';
          return ;
          
         }
         else {
          return this.userService.isAdmin() ? this.router.navigate(['/admin']) : this.router.navigate(['']);
         }
      }
    )
     
    //r
         
  }
}

}
