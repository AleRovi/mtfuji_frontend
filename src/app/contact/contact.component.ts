import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  contacts: any[] = [
    { name: 'Sonia Mammone', citta: 'Roma', gitHub: 'SoniaMammone', email:  'sonia.mammone@gmail.com'},
    { name: 'Alberto Pelogotti', citta: 'Firenze', gitHub:'Ippela01' , email:'alberto.pelagotti@gmail.com'},
    { name: 'Alessandro Rovito', citta: 'Torino', gitHub: 'AleRovi', email: 'alerovi1997@gmail.com'},
    { name: 'Christina Soru', citta: 'Cagliari', gitHub: 'ChristianSoru', email:''},
    { name: 'Breno Scudo', citta: 'Roma', gitHub: 'BrenoScudo' , email: 'brenoscudo@hotmail.com'}
  ];

  selectedContact: any;

  constructor() { }

  ngOnInit(): void { }

  selectContact(contact: any): void {
    this.selectedContact = contact;
  }
}
