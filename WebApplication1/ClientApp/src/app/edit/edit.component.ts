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

  public Condition: boolean = true;
  public Count: number = 1;
  public LimitLength: number = 10;

  //Два блока для добавления информации
  public ThemeWork = new Array(this.Count);
  public Experience = new Array(this.Count);

  public Biography: string;

  //Массивы для гуляния по циклам
  public ThemeName: string[] = new Array(this.LimitLength);
  public Props: string[] = new Array(this.LimitLength);
  public NameOrganization: string[] = new Array(this.LimitLength);
  public PositionOrganization: string[] = new Array(this.LimitLength);
  public DataText1: string[] = new Array(this.LimitLength);
  public DataText2: string[] = new Array(this.LimitLength);
  public FileInput: string[] = new Array(this.LimitLength);


  AddTheme() {
    if (this.ThemeWork.length < this.LimitLength) {
      this.ThemeWork.length += 1;
      this.Condition = !this.Condition;
    }
  }
  DeleteTheme(i: number) {
    if (this.ThemeWork.length > 0) {
      this.ThemeWork.length -= 1;
      this.Condition = !this.Condition;
    }
  }
  AddExperience() {
    if (this.Experience.length < this.LimitLength) {
      this.Experience.length += 1;
      this.Condition = !this.Condition;
    }
  }
  DeleteExperience(ind: number) {
    if (this.Experience.length > 0) {
      this.Experience.length -= 1;
      this.Condition = !this.Condition;
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
