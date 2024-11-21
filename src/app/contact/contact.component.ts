import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,FormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  show=false
  name:any;
message:any;
phone:any;
email:any;
sub(){
  let name1=this.name;
  let message=this.message;
  let phone=this.phone;
  let email=this.email;
 this.show=!this.show

}
 

}
