import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FilePickerModule } from 'angular-file-picker';
import { FileDropzoneModule } from 'angular-file-dropzone';
import { ImagePickerComponent } from './image-picker/image-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagePickerComponent
  ],
  imports: [
    BrowserModule,
    FilePickerModule,
    FileDropzoneModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
