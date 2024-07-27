import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAdmin: boolean = true;
  isAuthenticated: boolean = false;  // Default not authenticated
  constructor() { }
}
