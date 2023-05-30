import { LightningElement,api} from 'lwc';
import findAccounts from '@salesforce/apex/GetRecord.findAccounts';
export default class ChildFile extends LightningElement {
     @api recordId;
    searchKeyword;
    records = [];

    handleInputChange(event) {
        this.searchKeyword = event.target.value;
    }

    handleFetchRecords() {
        findAccounts({ searchKeyword: this.searchKeyword})
            .then((result) => {
                this.records = result;
            })
            .catch((error) => {
                console.error('Error fetching records', error);
            });
    }

    // Rest of the code

get recordTableClass() {
         return 'slds-table slds-table_bordered slds-table_striped ' + this.getBackgroundColorClass();
         // return getBackgroundColorClass();
    }

    getBackgroundColorClass() {
        if (this.records && this.records.length > 0) {
            const firstRecord = this.records[0];
            if (firstRecord.Color__c === 'Blue') {
                return 'blue';
            } else if (firstRecord.Color__c === 'Yellow') {
                return 'yellow';
            } else if (firstRecord.Color__c === 'Pink') {
                return 'pink';
            }
        }
        return '';
    }

// Rest of the code


    // handlePrintPage() {
    //     this.template.querySelector('.print-button').style.display = 'none';
    //     window.print();
    //     this.template.querySelector('.print-button').style.display = 'block';
  // }
}