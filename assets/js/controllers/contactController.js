app.controller("contactController",function($scope,contactService){
	$scope.contact={firstName:" ",
			      lastName:" ",
			      email:"",
			      contactNo:" "};

	$scope.contacts=contactService.getAll();

	$scope.save=function(){
		
		contactService.save($scope.contact);

		$scope.contact={firstName:" ",
			      lastName:" ",
			      email:"",
			      contactNo:" "};


	};
});