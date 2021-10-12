import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(public photoService: PhotoService) {}
  snapPhotoToGallery(){
    this.photoService.addNewToGallery();
  }
 async ngOnInit(){
    await this.photoService.loadSaved();
    // console.log(this.photoService.photos)
      // alert("am here ooo");
      // console.log(this.photoService.addNewToGallery());
  }
}
