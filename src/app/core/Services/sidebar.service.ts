import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private openedSubject = new BehaviorSubject<boolean>(true);
  opened$ = this.openedSubject.asObservable();

  get isOpened(): boolean {
    return this.openedSubject.value;
  }

  toggle(): void {
    this.set(!this.openedSubject.value);
  }

  set(value: boolean): void {
    this.openedSubject.next(value);
    document.body.classList.toggle('sidebar-open', value);
  }

  close(): void {
    this.set(false);
  }

  open(): void {
    this.set(true);
  }
}
