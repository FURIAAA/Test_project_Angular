import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  customStyle = {
    selectButton: {
      "color": "black",
      "background-color": "purple",
    },
    clearButton: {
      "color": "black",
      "background-color": "yellow",
    },
    layout: {
      "background-color": "black",
      "color": "red",
      "font-size": "15px",
    },
    previewPanel: {
      "background-color": "red",
    }
  };

  condition: boolean = true;
  count_1: number = 1;
  //Два блока изменения
  fakeArray_1 = new Array(this.count_1);
  fakeArray_2 = new Array(this.count_1);
  //temp = new Array(1);

  //Массивы для гуляния по циклам
  biog: string;
  theme_name: string[] = new Array(10);
  rekvezit_text: string[] = new Array(10);
  org_name: string[] = new Array(10);
  position_text: string[] = new Array(10);
  data1_text: string[] = new Array(10);
  data2_text: string[] = new Array(10);
  file_input: string[] = new Array(10);


  toggle_1() {
    if (this.fakeArray_1.length < 10) {
      this.fakeArray_1.length += 1;
      this.condition = !this.condition;
    }
  }
  toggle_delete_1(i: number) {
    if (this.fakeArray_1.length > 0) {
      this.fakeArray_1.length -= 1;
      this.condition = !this.condition;
    }
  }
  toggle_2() {
    if (this.fakeArray_2.length < 10) {
      this.fakeArray_2.length += 1;
      this.condition = !this.condition;
    }
  }
  toggle_delete_2(ind: number) {
    if (this.fakeArray_2.length > 0) {
      this.fakeArray_2.length -= 1;
      this.condition = !this.condition;
    }
  }
  //else {
  //  this.temp[1] = this.fakeArray[this.fakeArray.length-1];
  //  this.fakeArray[i + 1] = this.fakeArray[i];
  ////  this.fakeArray[i] = this.temp[1];
  //  this.fakeArray.length -= 1;
  // this.condition = !this.condition;
  //}


}
