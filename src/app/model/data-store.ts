import { BehaviorSubject, Observable, Subject } from 'rxjs';

export class DataStore<T> {
  private readonly _data: Subject<T>;
  readonly data$: Observable<T>;

  constructor(initialValue: T) {
    this._data = new BehaviorSubject<T>(initialValue);
    this.data$ = this._data.asObservable();
  }

  setValue(v: T): void {
    this._data.next(v);
  }

}
