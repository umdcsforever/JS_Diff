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
#### 2/23 Performance
- [ ] RouterModule.forChilde(routes) : will be merged with the root router eventually and pass in the routes
- [ ] Route = [{path, loadChildren,] : path which starts in the current folder and then go into the child
- [ ] lazyLoading : load module only when we need it
- [ ] environment variables in environments/environment.ts: global variable which we can import in our files and we  can even change them for the prod and dev mode, localhost vs domain.com
- [ ] Node global variables, for NODEJS these global variables are injected into the running Node process and there we can access them on the spcial process: "process.env" resource: https://www.twilio.com/blog/2017/08/working-with-environment-variables-in-node-js.html
- [ ] Read about Nginx 
//Angular 7 Deep Dive
- [ ] Bootstrap3!!! npm install --save bootstrap@3
- [ ] decorator: ts feature which allow you to enhance your calsses , 
#### 2/26
- [ ] innerHTML vs innerText
#### 2/28
- [ ] The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.
- [ ] ng-template
- [ ] *ngIf="value; else #template" (Structural Directive)
- [ ] Unlike structural directives, attribute directives don't add or remove elements. They change the elements they were placed on.
- [ ] [ngStyle]="{backgroundColor: getColor()}"
  [ngClass]="{online: serverStatus === 'online'}"
 #### 3/1
- [ ] Emmet Abbreviation (https://docs.emmet.io/abbreviations/)
- [ ] Chrome Developer Tool Source! how to use
- [ ] Augury

#### 3/2
- [ ] @Input() decorator to allow a property to be used outside of the current component, any component hosting the current comp by using the selector can use this property
- [ ] @Output('alias')
- [ ] read about _ngcontnet-ejo-2 which is style encapsulation, the way it does it is that it simply gives the same attribute to all elements in a component
- [ ] read about shadow DOM
- [ ] encapsulation in @Component()
- [ ] @ViewChild('alias')
- [ ] Angular Lifecycle : ngOnChanges, ngOnInit (run after constructor), ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy
- [ ] @ContentChild
#### 3/3
- [ ] cannot have more than one structural directive on the same element.
- [ ] xxx.directive.ts , export class XxxDirective and @Directive ({ selector: '[appBasicHightlight]' })
- [ ] Renderer2: using this with directive is better approach because angular is not limited to running in the browser here, for service workers where they do not have accees to DOM, this is better practice to render accessing DOM
- [ ] [Renderer2 Class](https://angular.io/api/core/Renderer2)
- [ ] What is the difference btw Renderer 1, 2, and 3 and so on ??
- [ ] @HostBinding('style.backgroundColor') backgroundColor = 'transparent';
#### 3/4
- [ ] ng-template is element which itself is not rendered but allows us to define a template for angular to use once it determines that this template needs to be rendered
- [ ] @Input() set unless() : set makes the property a function but still property.
#### 3/5
- [ ] @Component({ providers:  [aService]}), there is providers key in @Component
- [ ] @Injectable({providedIn: 'root'}) export class MyService, this is Angular 6 feature which is same as @NgModule({providers: [MyService] }). This new feature is completely optional. This offers an advantage : Services can be loaded lazily by Angular and redundant code can be removed, leading to a better performance and loading speed. 
#### 3/8
- [ ] EventEmitter is also an observable so you can actully emit it and subscribe from child to parent Component using Service.
- [ ] Routes = [ { path: ''}], for the path, don't add slash at the beginnig.
- [ ] <router-outlet></router-outlet> : this element simply marks the place in our document where we want  the angular router to load the component of the currently selected route
- [ ] <a href=""> this will reload the app which the app state might reset, so use <a routerLink="/">
- [ ] routerLinkActive="CSSclassName"
- [ ] [routerLinkActiveOptions]="{exact: true}" reserved property tell angular this router active class ???
- [ ] ActivatedRoute: simply injects the currently active routes of four to component you load it
- [ ] { path: 'users/:id', component: UserComponent }, /: meaning dynamic variable id
- [ ] this.route.params.subscribe() route: ActivatedRoute : this is observable from 3rd party lib where it allows Ng to use asynchronous tasks, So. this fires whenever route.params is changed.
