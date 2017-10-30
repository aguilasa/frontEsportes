import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Jogo } from '../models/jogo';
import { Fase } from '../models/fase';

const BASE = 'jogo/';

@Injectable()
export class JogoService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getJogosByFaseId(id: number) {
    return this.http.get(this.getUrlBase().concat(BASE).concat('fase/').concat(String(id)))
      .toPromise()
      .then(res => {
        return <Jogo[]>res.json()
      });
  }

  public genJogosByFase(id: number, jogos: Array<Jogo>) {
    return this.http.post(this.getUrlBase().concat(BASE).concat('fase/').concat(String(id)), jogos)
      .toPromise()
      .then(res => {
        return <Jogo[]>res.json()
      });
  }

}