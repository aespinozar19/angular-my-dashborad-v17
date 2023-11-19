import { Injectable, signal, inject, computed } from '@angular/core';
import type { User, UserResponse, UsersResponse } from '../interfaces/req-response.interface';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[],
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );
  private url: string = 'https://reqres.in/api/users';


  #state = signal<State>({
    loading: true,
    users: [],
  })

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {
    this.http.get<UsersResponse>(this.url)
      .pipe( delay( 1500 ) )
      .subscribe( res => {
        this.#state.set({
          loading: false,
          users: res.data,
        })
      });
  }

  getUserById( id: string ){
    return this.http.get<UserResponse>(`${ this.url }/${ id }`)
      .pipe(
        delay( 1500 ),
        map( resp => resp.data )
      )

  }


}
