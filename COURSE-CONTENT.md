# Cotiviti Angular Training - April Batch Course Content

## Prerequisites

* Language
  * HTML
  * JavaScript
  * TypeScript
* Tools & Environments
  * NodeJS Runtime Environment
  * Angular CLI
* IDE / Editors
  * VS Code
  * IntelliJ IDEA
  * Webstorm

## Commands

* Installing Angular CLI Globally
  * `npm i -g @angular/cli`
* Generating an Angular application
  * `ng new <project name>`
* Run Angular application
  * `ng serve` or `ng s`
  * `ng serve --port 4201` or `ng s --port 4201`
* Generate a component
  * `ng generate component <component name>` or `ng g c <component name>`
* Generate a module
  * `ng generate module <module name>` or `ng g m <module name>`
* Generate a service
  * `ng generate service <service name>` or `ng g s <service name>`

---

## Day 1

* Package Manager
  * NPM (Node Package Manager) - package-lock.json
  * YARN - yarn.lock
* [Semantic versioning (semver)](https://semver.org/)
  * `~8.2.14`
  * `^1.10.0`

* [What is Angular?](https://angular.io/guide/what-is-angular)
* Angular CLI
* First-party libraries
* Angular applications: The essentials
  * Components
  * Templates
  * Dependency Injection

Angular - What is Angular?

* Brief start
  * Components
    * Component class (*.ts)
    * Component template (*.html)
    * Component specific styles (*.css)
    * Component test class (*.spec.ts)
  * Services
  * Module and Routing Module
  * Decorator
    * @NgModule
    * @Component
    * @Directive
    * @Injectable
* Adding 3rd party dependency (Bootstrap)
* Template Interpolation {{}}

---

## Day 2

* Angular Template Syntax
  * `*ngFor`
  * `*ngIf`
  * `*ngSwitchCase`
* Property Binding [prop]
* Event Binding (event)
* Nesting Components
  * Parent-child communication using @Input decorator
  * Child-parent communication using @Output decorator
* Angular Module
* Angular Routing Module
* Redirecting routes
* Passing data through routes
  * state
  * queryParams
  * params

---

## Day 3

* Nested children routes
* Lazy-loaded routes or modules
* Angular Service and Dependency Injection

---

## Day 4

* Inbuilt Pipes (Async pipe)
* RxJS: Subject, Behavioral Subject, Observable and Subscription
* HttpClientModule
  * Fetching the mock data
  * Fetching data from the server

---

## Day 5

* Template-driven form: FormsModule
* Reactive form: ReactiveFormsModule
  * AbstractControl
  * FormGroup
  * FormControl
  * FormArray
  * FormBuilder
* Ng-container
* Ng-template
* Ng-content
* Route guards
* Http Interceptors
* [Go through Route guards and Http Interceptors implementation from this repo](https://github.com/elwyncrestha/ng-rms)
* State Management with NgRx Intro

---

## Day 6

* NgRx application | [Go through NgRx implementation from this repo](https://github.com/elwyncrestha/ng-batch202108)
