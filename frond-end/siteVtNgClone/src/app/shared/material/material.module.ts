import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';




const materials = [
  MatButtonModule,
    MatCardModule,
    MatAutocompleteModule,
    MatBadgeModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    materials
  ],
  exports:[materials]
  
  
})
export class MaterialModule { }
