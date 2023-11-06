import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';
import { Note } from '../note';
import { TaskEditComponent } from '../task-edit/task-edit.component';
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { CategorySelectorComponent } from '../category-selector/category-selector.component';
import { DoneCheckboxComponent } from '../done-checkbox/done-checkbox.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    CommonModule,
    TaskEditComponent,
    DeleteButtonComponent,
    CategorySelectorComponent,
    DoneCheckboxComponent,
    FormsModule,
  ],
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent {
  constructor(private service: SharedService) {}
  @Input() i: any;
  @Input() notes: any = [];
  @Input() note!: Note;
  @Input() category: any = [];
  @Output() updateData = new EventEmitter<{ value: string; id: string }>();
  @Output() deleteData = new EventEmitter<string>();
  @Output() categoryData = new EventEmitter<{ data: string; id: string }>();
  @Output() checkboxData = new EventEmitter<{ data: boolean; id: string }>();
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  @Output() updateNotes = new EventEmitter();

  pushUpdateData(data: { value: string; id: string }) {
    this.updateData.emit(data);
  }

  pushDeleteData(value: string) {
    this.deleteData.emit(value);
  }

  pushCategoryData(data: { data: string; id: string }) {
    this.categoryData.emit(data);
  }
  pushCheckboxData(data: { data: boolean; id: string }) {
    this.checkboxData.emit(data);
  }
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  updateCategories(choice: string, id: string) {
    // debugger;
    // console.log('Clicked!', choice, id);
    this.service
      .updateCategory(choice, id)
      .then((res) => {
        console.log(res);
        // this.getData();
        this.updateNotes.emit();
      })
      .catch((error) => {
        console.log(`There was an error! ${error}`);
      });
  }
}
