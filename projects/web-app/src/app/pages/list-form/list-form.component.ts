import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { List } from '../../services/list/list';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'web-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  formGroup: FormGroup;
  submitted = false;
  isEdit: boolean;
  showAlert: boolean;
  listId: number;
  list$: Observable<List>;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listId = this.activatedRoute.snapshot.params.listId;

    this.formGroup = this.formBuilder.group({
      title: ['', Validators.required]
    });

    if (this.listId) {
      this.setFormValues();
      this.isEdit = true;
    } else {
      this.list$ = of({ title: '' });
      this.isEdit = false;
    }
  }

  setFormValues(): void {
    this.list$ = this.listService.getById(this.listId).pipe(
      tap((list) => {
        if (list) {
          this.formGroup.setValue({ title: list.title });
        }
      })
    );
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.formGroup.invalid) {
      return;
    }

    const neList: List = {
      id: this.listId,
      title: this.formGroup.value.title
    };

    this.listService.save(neList).subscribe(() => {
      if (this.isEdit) {
        this.submitted = false;
        this.showAlert = true;
        setTimeout(() => (this.showAlert = false), 3000);
      } else {
        this.router.navigate(['list']);
      }
    });
  }

  onDelete(id: number): void {
    this.submitted = true;

    this.listService.delete(id).subscribe(() => {
      this.submitted = false;
      this.router.navigate(['list']);
    });
  }
}
