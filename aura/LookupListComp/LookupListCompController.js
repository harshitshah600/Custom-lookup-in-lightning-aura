({
	getSelectedRecord : function(component, event, helper) {
        var index = event.currentTarget.id;
	    var selectedRecordEvnt = component.getEvent("selectedRecordEvent");
       selectedRecordEvnt.setParams({
            selectedRecord : component.get("v.recordList")[index]
        });
        
        selectedRecordEvnt.fire();
       // console.log(component.get("v.recordList")[index]);
	}
})