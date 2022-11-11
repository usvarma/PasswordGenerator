import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  password = "";
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  passwordLength = 0;

  onUseLettersChanged(){
    this.useLetters = !this.useLetters;
  }

  onUseNumbersChanged(){
    this.useNumbers = !this.useNumbers;
  }
  
  onUseSymbolsChanged(){
    this.useSymbols = !this.useSymbols;
  }
  
 onChangePasswordLength(event: any){
  var parsedLength = parseInt((event.target as HTMLInputElement).value);
  //console.log(`parsedLength is :${parsedLength}`)
  if(!isNaN(parsedLength))
    this.passwordLength = parsedLength;
 }

  onGenerateBtnClicked(){
    let validChars='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let validNumbers='0123456789';
    let validsymbols='~!@#$%^&*()_+`-={}[]|\:";<>?/.,';

    let charsToChooseFrom = '';

    if(this.useLetters)
      charsToChooseFrom += validChars;
    
    if(this.useNumbers)
      charsToChooseFrom += validNumbers;

    if(this.useSymbols)
      charsToChooseFrom += validsymbols;

    let generatedPassword = '';
    for(let i = 0; i< this.passwordLength; i++){
      let index = Math.floor(Math.random() * charsToChooseFrom.length);
      generatedPassword += charsToChooseFrom[index];
    }
    this.password = generatedPassword;
  }

  enableGenerateButton(){
    return this.passwordLength && (this.useLetters || this.useNumbers || this.useSymbols);
  }
}
