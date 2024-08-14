import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'dialog-button',
  templateUrl: 'dialog.component.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIcon],
  styleUrl: 'dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DialogButton {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-component',
  templateUrl: 'dialog-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatIcon, MatIconButton, MatFormFieldModule, FormComponent],
  styleUrl: 'dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContent {
[x: string]: any;
}