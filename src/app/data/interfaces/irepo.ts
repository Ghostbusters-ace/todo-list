import { Observable } from 'rxjs';

//Le T signifie que l'interface est specifiable
export interface Irepo<T> {
  /**
   * Returns all of T Objects
   * @returns Array of T
   */
  findAll(): Observable<Array<T>>;

  /**
   * Return a T object based on its id
   * @param id number
   * @returns Observable<T>
   */
  findOne(id: number): Observable<T>;

  /**
   * Add a new data
   * @param datas
   * @returns Observable<T>
   */
  add(datas: T): Observable<T>;

  /**
   * Update the todo data
   * @param datas
   * @returns Observable<any>
   */
  update(datas: T): Observable<any>;

  /**
   * Remov if exists the todo object
   * @param datas
   * @returns Observable<any>
   */
  delete(datas: number | T): Observable<any>;
}
