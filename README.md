<h1 align="center">Comparing Angular and React for Web App Development</h1>

## Menu

### 1.Overview

### 2.Project Generation

### 3.Project Structure

### 4.Technical Comparisons

- ### Iterating and Rendering
- ### Sending HTTP Requests

## 1. Overview

<img src="ss.png">

### In this article, I'll share my experience of building the same web app using two different frameworks, Angular and React. I'll provide a detailed comparison of my development journey with each framework, highlighting the pros and cons of both, to help you make an informed choice for your future web development projects

## 2.Project Generation

### I generated the Angular web app using Angular CLI version 16.2.5 and for the React project, I opted for Yarn due to issues encountered during the initial project creation with npm. Both projects are built using TypeScript, offering a robust and statically typed foundation for web development

- #### comman that I used to generate Angular project

```bash
ng new <Project Name>
```

### this took about no more than 2 mins to generate Angular project

- #### comman that I used to generate React project

```bash
yarn create react-app my-app --template typescript
```

### this took about 10 mins to generate React project. Maybe because of my internet

<h3 align="center"> 🟢 When comparing project generation winner is Angular 🟢</h3>

## 3.Project File Structure

### In the Angular project, component generation is a breeze with Angular CLI. It automatically generates an organized file structure for each component, including HTML, CSS, TypeScript, and a separate spec.ts file within a dedicated folder named after the component. This structured approach makes it easy to maintain and manage components

### On the React side of things, I adopted a slightly different approach. While component creation in React doesn't have the same level of automation as Angular, I utilized the ['ES7+ React/Redux/React-Native snippets']("https://www.google.com/search?q=ES7%2B+React%2FRedux%2FReact-Native+snippets&oq=ES7%2B+React%2FRedux%2FReact-Native+snippets&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzMxOGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8") extension available in Visual Studio Code. With this extension, I could streamline component generation using the `rafce` command, which efficiently generates the component's code and exports it with the component name. Although not as automated as Angular, this approach still ensures a well-organized project structure.

- #### This is the code that ['ES7+ React/Redux/React-Native snippets']("https://www.google.com/search?q=ES7%2B+React%2FRedux%2FReact-Native+snippets&oq=ES7%2B+React%2FRedux%2FReact-Native+snippets&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzMxOGowajGoAgCwAgA&sourceid=chrome&ie=UTF-8") extension generates using `rafce` command

```typescript
import React from 'react'

const <Compoenent Name> = () => {
  return (
    <div><Compoenent Name></div>
  )
}

export default <Compoenent Name>


```

### # as component name it take name of the file. as example if file name is `Test.ts` `<Compoenent Name>` will be `Test`

<h3 align="center">🟢 When comparing project file structure winner is Angular 🟢</h3>

## 4.Technical Comparisons

#### 1. Iterating and Rendering

### This is how make table in Angular

- #### [HTML file](https://github.com/heshanthenura/StudentRegister/blob/main/StudentRegisterClientAngular/src/app/components/student-data-container/student-data-container.component.html)

```html
<tbody>
  <tr *ngFor="let data of studentDataList">
    <td>{{ data.index }}</td>
    <td>{{ data.name }}</td>
  </tr>
</tbody>
```

- #### [TypeScript File](https://github.com/heshanthenura/StudentRegister/blob/main/StudentRegisterClientAngular/src/app/components/student-data-container/student-data-container.component.ts)

```typescript

// imports

@Component({...})
export class StudentDataContainerComponent implements OnInit {

  studentDataList: STUDENTDATA[] = [];

}
```

In Angular, we have the convenience of using directives like `*ngFor` to iterate through collections and generate HTML elements dynamically. This makes it straightforward to create loops, and many developers find it intuitive and easy to use. The `*ngFor` directive simplifies the process of rendering data, making it a powerful tool for displaying dynamic content in Angular applications

### This is how make table in React

- #### [TypeScript File](https://github.com/heshanthenura/StudentRegister/blob/main/student-register-client-react/src/Components/StudentDataContainer.tsx)

```typescript


const StudentDataContainer = () => {
  const [data, setData] = useState<STUDENTDATA[]>([]);
  return (

          <tbody>
            {data
              .slice()
              .reverse()
              .map((item: STUDENTDATA, index: number) => (
                <tr key={index}>
                  <td>{item.index}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
          </tbody>
)

```

On the other hand, in React, handling dynamic content involves using JavaScript's map function. While map is a flexible and versatile method, some developers may find it less suitable, especially those who prefer a more declarative and template-like approach to rendering UI components. The map function requires a bit more manual coding, including the need to specify a unique key for each element, and it may not provide the same level of abstraction and convenience as Angular's `*ngFor` directive
