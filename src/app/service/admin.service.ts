import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
// import { totalmem } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) {}
  getAllAuthors(query) {
    return this.http.get(
      environment.api_endpoint + environment.get_all_authors
    );
  }
  getAllPublishers(query) {
    return this.http.get(
      environment.api_endpoint + environment.get_all_publishers
    );
  }

  createPublisher(name, address, phone) {
    return this.http.post(
      environment.api_endpoint + environment.get_publisher,
      {
        name, address, phone
      }
    );
  }

  deletePublisher(id) {
    return this.http.delete(
      environment.api_endpoint + environment.get_publisher + id
    );
  }

  updatePublisher(id, name, address, phone) {
    return this.http.put(
      environment.api_endpoint + environment.get_publisher + id,
      {
        name, address, phone
      }
    );
  }

  getAllBooks(query) {
    return this.http.get(environment.api_endpoint + environment.get_all_books);
  }

  createBook(title, author, publisher) {
    return this.http.post(environment.api_endpoint + environment.get_book, {
      title, author, publisher
    });
  }

  deleteBook(id) {
    return this.http.delete(
      environment.api_endpoint + environment.get_book + id
    );
  }

  updateBook(id, title, author, publisher) {
    return this.http.put(environment.api_endpoint + environment.get_book + id, {
      title, author, publisher
    });
  }
}
