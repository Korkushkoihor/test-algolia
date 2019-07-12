import { Component } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';


const searchClient = algoliasearch(
  '60JY2L0FT6',
  'ab04cf461f8d4c6d471fd0dd67b7e763'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  config = {
    indexName: 'demo_ecommerce',
    searchClient
  };
  title = 'algolia-test';
}
