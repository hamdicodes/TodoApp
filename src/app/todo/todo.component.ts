import { TodoItem } from './../todoItem';
import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() {
//uygulama ilk yüklendiğinde verileri localStorage den alıp  model içine yükler...
    this.model.items = this.getItemsFormLS();

   }
  model = new Model();
  displayAll: boolean = false;
  inputText: string = "";

  addItem() {
   if (this.inputText != "") {
     let data = {description: this.inputText, action: false};
    this.model.items.push(data);
    let items = this.getItemsFormLS();
    items.push(data);
    localStorage.setItem("items", JSON.stringify(items));
    this.inputText = "";
   } else {
     alert("Bu alan boş bırakılamaz!");
   }
   }

   clearList() {
    this.model.items = [];
    localStorage.clear();
   }

   getItemsFormLS() {
     let items: TodoItem[] = [];

     let value = localStorage.getItem("items");

     if (value != null) {
       items = JSON.parse(value);
     }
     return items;
   }

   onActionChanged(item: TodoItem) {
      let items = this.getItemsFormLS();
      localStorage.clear();

      items.forEach(i => {
          if (i.description == item.description) {
            i.action = item.action;
          }
      });
      localStorage.setItem("items", JSON.stringify(items));
   }

  //private olan name'i dışarıya açar...
  getName() {
    return this.model.name;
  }
  getSocialNetwork() {
    return this.model.linkInstagram ;
  }
  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter(item => !item.action);
    }

  }
  dispalyCount() {
    return this.model.items.filter(i => i.action).length;
  }
  getButtonClasses(){
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0
    }
  }

  ngOnInit(): void {
  }

}
