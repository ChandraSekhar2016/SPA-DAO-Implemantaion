app.service("contactService",function(){
 
 this.contacts=[];

this.save=function(contact){
	this.contacts.push(contact);
};

this.getAll=function(){
return this.contacts;

};

return this;


});