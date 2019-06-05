import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewAuthorComponent } from './new/new.component';
import { AuthorEditComponent } from './edit/edit.component';
import { AuthorDeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  constructor(private http: HttpClient, private modalService: NgbModal) {}
  authors: any;

  currentAuthor: any;

  currentModal: any;

  ngOnInit() {
    this.currentAuthor = {
      id: -1,
      name: ''
    };
    this.getAllAuthors();
    this.currentModal = null;
  }

  getAllAuthors() {
    this.http
      .get(environment.api_endpoint + environment.get_all_authors)
      .subscribe(res => {
        this.authors = res;
      });
  }

  openAddModal() {
    const modalRef = this.modalService.open(NewAuthorComponent);
    modalRef.result
      .then(res => this.authors.push(res))
      .catch(err => console.log(err));
  }
  openModal(content) {
    this.currentModal = this.modalService.open(content);
  }

  showEditForm(author: { id: number; name: string }) {
    const modalRef = this.modalService.open(AuthorEditComponent);
    modalRef.componentInstance.currentAuthorId = author.id;
    modalRef.componentInstance.currentAuthorName = author.name;
    modalRef.result
      .then(res => (author.name = res.name))
      .catch(err => console.log(err));
  }

  confirmDelete(author: { id: number; name: string }) {
    const modalRef = this.modalService.open(AuthorDeleteComponent);
    modalRef.componentInstance.currentAuthorId = author.id;
    modalRef.componentInstance.currentAuthorName = author.name;
    modalRef.result
      .then(_ => this.getAllAuthors())
      .catch(err => console.log(err));
  }
}
