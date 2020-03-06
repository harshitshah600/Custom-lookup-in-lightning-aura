public class LookupService {
 @AuraEnabled
    public static list<sObject> getRecord(String objName,String searchText,String fieldReferences){
        try{
            searchText = '%'+ searchText +'%';
            string query= 'Select '+fieldReferences;
            query += ' From '+objName;
            query += ' Where '+fieldReferences + ' Like : searchText';
            system.debug('query: '+query);
            return database.query(query);
            
        }catch(Exception ex){
            system.debug('exception in getRecord: '+ex.getMessage());
            return null;
        }
        
    }
}