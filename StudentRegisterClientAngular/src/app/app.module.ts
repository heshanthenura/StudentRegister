import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDataContainerComponent } from './components/student-data-container/student-data-container.component';
import { StudentDataItemComponent } from './components/student-data-item/student-data-item.component';
import { StudentDataFormComponent } from './components/student-data-form/student-data-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDataContainerComponent,
    StudentDataItemComponent,
    StudentDataFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
