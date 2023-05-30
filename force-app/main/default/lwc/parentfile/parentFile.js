import { LightningElement } from 'lwc';

export default class ParentFile extends LightningElement {
   

   handlePrintPage() {
        this.template.querySelector('.prnBtn').style.display = 'block';
          // this.template.querySelector('.winBtn').style.display = 'none';
          print();
          this.template.querySelector('.printDoc').style.display = 'none';
      }
  

      
}
