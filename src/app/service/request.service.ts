import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { graphql } from './graphql.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService extends graphql {

  constructor(public override apollo : Apollo) {
    super(apollo);
  }
}
