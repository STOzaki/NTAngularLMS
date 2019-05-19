import { Component, OnInit } from '@angular/core';
import { PagerService } from '../../service/pager.service';
import { AdminService } from '../../service/admin.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private pagerService: PagerService,
    private adminService: AdminService,
    private modalService: NgbModal) {this.books=[]; }
    books:any;
    authors:any;
    publishers:any;
    authorsSize = 1;
    booksSize = 1;
    publishersSize = 1;
    pager: any={};
    pagedItems: any[];
    private modalReference: NgbModalRef;
    errorMsg: string = '';
    private closeResult: any;

    book = {
      id:'',
      title:'',
      author:{
        id:'',
        name:''},
      publisher:{
        id:'',
        name:'',
        address:'',
        phone:''}
    };

    editBook = {
      id:'',
      title:'',
      author:{
        id:'',
        name:''},
      publisher:{
        id:'',
        name:'',
        address:'',
        phone:''}
    };

    publisher = {
      id: '',
      name: '',
      address: '',
      phone: ''
    };

    author = {
      id:'',
      name:''
    }
    test:any;



  ngOnInit() {
    this.getAllBooks();
    this.getAllPublishers();
    this.getAllAuthors();
    this.setPage(1);
  }

  getAllBooks(){
    this.adminService.getAllBooks('').subscribe(res => {
      this.books = res;
      this.booksSize = this.books.length;
      this.setPage(1);
    });
  }

  getAllPublishers(){
    this.adminService.getAllPublishers('').subscribe(res => {
      this.publishers = res;
      this.publishersSize = this.publishers.length;
    });
  }

  getAllAuthors(){
    this.adminService.getAllAuthors('').subscribe(res => {
      this.authors = res;
      this.authorsSize = this.authors.length;
    });
  }

  deleteBook(id) {
    this.adminService.deleteBook(id).subscribe(res => {
      this.books = this.books.filter(it=>it.id!=id);
      this.booksSize = this.books.length;
      this.setPage(1);
    });
  }

  createBook() {
    this.adminService.createBook(this.book.title, this.book.author, this.book.publisher).subscribe(res=>{
      this.books.push(res);
      this.booksSize = this.books.length;
      this.setPage(1);
    });
    this.modalReference.close();
  }
  
  updateBook() {
    this.adminService.updateBook(this.editBook.id, this.editBook.title, this.editBook.author, this.editBook.publisher).subscribe(res=>{
      var index = this.books.findIndex(it=>it.id==this.editBook.id);
      this.books[index].title = this.book.title;
      this.books[index].author = this.book.author;
      this.books[index].publisher = this.book.publisher;
      this.setPage(1);
    })
    this.modalReference.close();
  }
  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.books.length, page);
    this.pagedItems = this.books.slice(
      this.pager.startIndex,
      this.pager.endIndex + 1
    );
  }
  open(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then(
      result => {
        this.errorMsg = '';
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.errorMsg = '';
        this.closeResult = `Dismissed '`;
      }
    );
  }
  edit(content, book){
    this.editBook = {
      id: book.id,
      title: book.title,
      author: book.author,
      publisher: book.publisher
    };
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then(
      result => {
        this.errorMsg = '';
        this.closeResult = `Closed with: ${result}`;
      },
      reason => {
        this.errorMsg = '';
        this.closeResult = `Dismissed '`;
      }
    );
  }
  close(content){
    this.modalReference.close();
  }
}
