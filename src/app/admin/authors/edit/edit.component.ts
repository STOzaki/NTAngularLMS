import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class AuthorEditComponent implements OnInit {
  constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  @Input() currentAuthorId: number;
  @Input() currentAuthorName: string;

  ngOnInit() {}

  closeModal() {
    this.activeModal.close('Edit Author modal closed');
  }

  applyAuthorChanges() {
    if (!this.currentAuthorName) {
      // TODO: show error in form
      return false;
    }
    return this.http
      .put(
        environment.api_endpoint +
          environment.single_author +
          '/' +
          this.currentAuthorId,
        JSON.stringify({ name: this.currentAuthorName }),
        { headers: { 'Content-Type': 'application/json' } }
      )
      .subscribe(res => this.activeModal.close(res), err => console.log(err));
  }
}
