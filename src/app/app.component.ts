import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  template: `
    <h1>Angular Custom Pipe Demo</h1>
    
    <p><b>Number to Words Pipe</b></p>
    <input type="number" [(ngModel)]="num"/>
    
    <p>The number in words : {{num | numberToWords | titlecase}}</p>
  `,
  styles: [`
    h1 {
      color: #2c3e50;
      font-family: sans-serif;
      text-align: center;
      margin-bottom: 30px;
    }
    
    p {
      text-align: center;
      margin: 10px 0;
    }
    
    input {
      padding: 8px 12px;
      font-size: 16px;
      border: 2px solid #ddd;
      border-radius: 4px;
      width: 200px;
      text-align: center;
      margin: 10px auto;
      display: block;
    }
    
    input:focus {
      outline: none;
      border-color: #2c3e50;
      box-shadow: 0 0 5px rgba(44, 62, 80, 0.2);
    }
    
    b {
      color: #2c3e50;
    }
  `]
})
export class AppComponent {
  title = 'custom_pipe';
  num: number = 0;
}
