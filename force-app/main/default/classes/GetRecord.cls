public with sharing class GetRecord {
    
        @AuraEnabled(cacheable=true)
        public static List<Employee_Record__c> findAccounts(String searchKeyword) {
         
           String query = 'SELECT Id,Name ,Phone_c,Colorc, Emailc, Agec,Genderc,Pan_Numberc,Qualificationc,Addressc,Adhar_Numberc,display_colorc FROM Employee_Record_c WHERE Name LIKE \'%' + searchKeyword + '%\'';          
           System.debug(query);
           return Database.query(query);
          
          
           }
             
        }
