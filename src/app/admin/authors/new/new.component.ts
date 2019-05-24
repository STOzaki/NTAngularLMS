import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewAuthorComponent implements OnInit {

  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {
    this.currentAuthorName = '';
  }

  currentAuthorName: string;

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close('New Author modal closed');
  }

  createAuthor() {
    if (!this.currentAuthorName) {
      // TODO: show error in form
      return false;
    }
    return this.http.post(environment.api_endpoint + environment.single_author,
      {name: this.currentAuthorName},
      {headers: {'Content-Type': 'application/json'}}).subscribe((res) =>
        this.activeModal.close(res), (err) => console.log(err));
  }
}
