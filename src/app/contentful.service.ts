// ./src/app/contentful.service.ts
import { Injectable } from '@angular/core';
// import Contentful createClient and type for `Entry`
import { createClient, Entry } from 'contentful';

// configure the service with tokens and content type ids
// SET YOU OWN CONFIG here
const CONFIG = {
  space: '3s4313xo0u0s',
  accessToken: '08594b5ad773999ce1122df7354b36f4d68b5f4e7cee56c6ad57c69ca6a3362f',

  contentTypeIds: {
    projects: 'projects'
  }
}

@Injectable()
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken
  });

  constructor() { }

  getProjects(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({
      content_type: CONFIG.contentTypeIds.projects
    }, query))
    .then(res => res.items);
  }
}
