// export class TodoItem {
//   title: string;
//   description: string;
//   action: string;

//   constructor(title: string, description: string, action: string) {
//     this.title = title;
//     this.description = description;
//     this.action = action;
//   }
// }

// export class TodoItem {

//   constructor(public id: number, public title: string, public description: string, public action: string) {
//     this.title = title;
//     this.description = description;
//     this.action = action;
//   }
// }

export interface TodoItem {
  description: string;
  action: boolean;
}


