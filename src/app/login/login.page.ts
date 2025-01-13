import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correctMail: string = "test@test";
  correctPassword: string = "test";

  loginForm: FormGroup;
  isAlertOpen = false;
  alertButtons = ['OK'];
  alertMessage = '';

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      userMail: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    if (this.loginForm.invalid) {
      this.alertMessage = "Veuillez remplir tous les champs correctement.";
      this.isAlertOpen = true;
      return;
    }

    const userMail = this.loginForm.value.userMail;
    const userPassword = this.loginForm.value.userPassword;

    if (userMail === this.correctMail && userPassword === this.correctPassword) {
      this.alertMessage = "Connexion réussie.";
    } else {
      this.alertMessage = "Email ou mot de passe incorrect.";
    }
    console.log(userMail + "-" + userPassword);
    this.isAlertOpen = true;
    this.router.navigate(['/home'])

  }
}