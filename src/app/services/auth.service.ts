import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

export interface IUser {
  email: string;
  password?: string;
}

@Injectable();
