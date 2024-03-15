import { Injectable } from '@angular/core';

const TOKEN_KEY = 'access_token';
const USER_ID_KEY = 'user_id'; // تعريف مفتاح لحفظ معرف المستخدم





@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {


  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  removeToken(): void {
    localStorage.removeItem(TOKEN_KEY);
  }


  // تحديد وظيفة لحفظ معرف المستخدم
  saveUserId(userId: string): void {
    localStorage.setItem(USER_ID_KEY, userId);
  }

  // إضافة وظيفة لاسترجاع معرف المستخدم
  getUserId(): string | null {
    return localStorage.getItem(USER_ID_KEY);
  }
}
