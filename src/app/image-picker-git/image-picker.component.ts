import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.css']
})
export class ImagePickerComponent implements OnInit {
  public image: string;
  constructor() { }

  ngOnInit() {
  }

  /** Store the selected image in local storage */
  saveToLocal(){
    if(this.image && this.image.length){
      localStorage.setItem('currentImage', this.image);
       alert('Saved!');
    } else {
      alert('Please select an image!');
    }
  }

    /** Retrieve the image from local storage */
  retrieveFromLocal(){
    var currentImage = localStorage.getItem("currentImage");
    if(currentImage){
      this.image = currentImage;
    } else {
      alert('No image saved in local!');
    }
  }

    /** Clear image from local storage */
  clearLocal(){
    localStorage.removeItem('currentImage');
    alert('Cleared');
  }
}
