({
	handleSearchEvnt : function(component, event, helper) {
		var searchText = event.getParam("searchText");
      //  component.set("v.searchText",searchText);
      var action = component.get("c.getRecord");
        action.setParams({
            objName : component.get("v.objName"),
            searchText :searchText,
            fieldReferences :component.get("v.searchField")
        });
        
        action.setCallback(this,function(response){
            var state = response.getState();
            if(state =='SUCCESS' || state=='DRAFT'){
                var fieldReference =component.get("v.searchField");
                var responseVal = response.getReturnValue();
                responseVal.forEach(function(item,index){
                    responseVal[index].Name = responseVal[index][fieldReference];
                });
                component.set("v.recordList",responseVal);
                console.log(response.getReturnValue())
            }
        });
     $A.enqueueAction(action);   
	},
    handleSelectedRecord : function(component, event, helper){
        
        var selectedRecord = event.getParam("selectedRecord");
       component.set("v.selectedRecord",selectedRecord);
       
    },
     handleRemove: function (cmp, event) {
         cmp.set("v.selectedRecord",null);
         cmp.set("v.recordList",null);
    }
})