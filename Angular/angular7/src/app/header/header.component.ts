import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  templateUrl: './header.component.html',
  selector: 'app-header',
  styleUrls: ['./header.component.css']

})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService) {}

  onSaveData(){
    this.dataStorageService.storeRecipes()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }
}
