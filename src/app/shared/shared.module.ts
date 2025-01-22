import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, IonicModule],
    exports: [FooterComponent],
})

export class SharedModule { }