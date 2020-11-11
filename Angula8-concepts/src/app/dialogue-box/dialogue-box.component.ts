import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material'
@Component({
  selector: 'app-dialogue-box',
  templateUrl: './dialogue-box.component.html',
  styleUrls: ['./dialogue-box.component.scss']
})
export class DialogueBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dataText: any) { }
  private myName = "Reddy";
  ngOnInit() {
  }

}
