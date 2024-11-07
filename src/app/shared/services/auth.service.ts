import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignJWT } from 'jose';
import {jwtDecode} from "jwt-decode";


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private tokenKey = 'authToken';
    private secretKey = new TextEncoder().encode('your-secret-key'); // Use a secure key

    constructor(private http: HttpClient, private router: Router) {}

    async login(userId: string) {
        const token = await this.createToken(userId);
        localStorage.setItem(this.tokenKey, token);
        this.router.navigate(['/home']);
    }

    async createToken(userId: string): Promise<string> {
        const payload = { userId, timestamp: new Date().getTime() };
        return new SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('1h')
            .sign(this.secretKey);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    decodeToken(token: string) {
        return jwtDecode(token);
    }

    logout() {
        localStorage.removeItem(this.tokenKey);
        this.router.navigate(['/login']);
    }

    isLoggedIn() {
        return !!this.getToken();
    }
}