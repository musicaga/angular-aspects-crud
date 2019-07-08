import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public loading = false;
  on = () => this.loading = true;
  off = () => this.loading = false;
}
