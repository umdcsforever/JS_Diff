# JS_Diff
>[Motive and Reference](https://github.com/kpdecker/jsdiff) <br />
>[Diff source code in C# and summary of algorithm](http://www.mathertel.de/Diff/)

## Typescript
### Basic
 - [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
 - [Modern Javascript](https://javascript.info/)
### Note
 - [Research key points](Note/README.md)

## TODO List
- [ ] Research on Difference Algorithm and its Variation
- [x] Construct basic running app on Angualr 
- [x] M.E.A.N Stack Environment Setup
- [x] Mongo DB
  - [x] [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - [x] [Moongoose](https://mongoosejs.com/)
- [x] [Express.js](https://github.com/expressjs/express)
  - [x] [Multer](https://github.com/expressjs/multer) : Node.js middleware for handling `multipart/form-data`.
- [x] Angular.js
- [x] Node.js
  - [x] [Body Parser](https://www.npmjs.com/package/body-parser)
  - [x] [Nodemon](https://www.npmjs.com/package/nodemon)
- [ ] Construct basic running app on React
- [ ] Install and use basic functions from Reference JS Diff
- [ ] Learn TypeScript MS 
  - [x] Read [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

## Study Materials
- [ ] background-attachment
- [ ] background-position
- [ ] text-transform
  - [ ] background-size: cover;
- [ ] html <footer>
- [ ] jquery setTimeout
#### Angular
- [ ] event binding
- [ ] two way binding
- [ ] ngModel : directive
- [ ] structural directive
- [ ] *ngFro
- [ ] *ngIf
- [ ] EventEmitter class
- [ ] #postForm="ngForm"
- [ ] Observable.
- [ ] rxjs
#### Typescript
- [ ] spread opertaor
- [ ] constructor(public x:type)
#### Node js npm install --save-dev nodemon
#### 2/9
- [ ] css: flex
- [ ] Subject
- [ ] elvis operator , ex) post?.title - check whether post exists before it tries to read property
- [ ] Spinner
- [ ] template drive approach vs reactive approach
- [ ] temp : let Angular infer everyhing 
- [ ] reactive: define everyhing in our TS code and tell Angular which of our defined controls, defined by us in TS maps to which input here.
#### 2/10
- [ ] FormGroup
- [ ] FormControl
- [ ] $event
- [ ] form.patchValue() 
- [ ] Promise: default js object
#### 2/11
- [ ] multer
#### 2/12
- [ ] next gen JS feature { ...object, x: hello}
- [ ] express.static()
- [ ] const path = require('path') in backend
#### 2/13
- [ ] import { AbstractControl } from '@angular/forms': AbstractControl
- [ ] rxjs: of <- quick and easy way of adding or creating an observable which will emit data immediately
#### 2/15
- [ ] onChangedPage($event) => event : PageEvent, some data about the current page 
- [ ] Css: rem vs px vs em, 1rem ~= 16px
- [ ] backtick: ` special JS feature which allows us to dynamically add values into a normal strnig
#### 2/16
- [ ] formcontrolName: matInput mat-form-field
- [ ] vscode: Ctrl+Shift+K = delete line same as sublime
- [ ] input validator: email required
- [ ] npm install --save mongoose-unique-validator: add this validation to logic in backend
- [ ] npm install --save bcrypt : package offers encryption funcs which we can use in Nodejs bcrypt: saltOrRound : simply means that higher the number here, the longer it will take but the safer it will be becuase it uses math to generate random number and geneare hash
- [ ] cyclic dependency
- [ ] JWT: Json Web Token , npm install --save jsonwebtoken
- [ ] vscode Shift+Alt+F format Json object
- [ ] token header, "Bearer ", use convention to indicate that you added such a token to authorization. value to that header which uses a word "anything" then the token.
#### 2/17
- [ ] route guard: angular add some interfaces your classes can implement which forces the classes to add certain methods which the @angular/router can execute before it loads a route to check whether it should proceed or do something else. something like protect route
- [ ] NodeJS.Timer
#### 2/18
- [ ] mongoose.Schema.Types.ObjectId : Mongoose manages it as a separate type.
#### 2/20
- [ ] tab operator : we can subscribe in the componenets and utilize an operator, allows us to execute some actions before the observable is done
- [ ] angular dialog
- [ ] catchError/throwError
- [ ] in app.module.ts : @ngModel({ entryComponents })
- [ ] constructor(@Inject()) {} : allows you to specify a special token that will be injected to Angular
- [ ] backend: controller optimization by separating functions by module.exports
