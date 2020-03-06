({
	handleKeyUp : function(component, event, helper) {
		var searchText = component.find("enter-search").get("v.value");
        var evnt = component.getEvent("searchTextEvnt");
        evnt.setParams({
            searchText : searchText
        });
        evnt.fire();
	}
})