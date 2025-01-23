import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private logs = {
    email: 'test@test',
    password: 'test1',
  }

  constructor() { }

  login(email: string, password: string): boolean {
    if (email === this.logs.email && password === this.logs.password) {
      localStorage.setItem('user', JSON.stringify({ email }));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
  }
}
