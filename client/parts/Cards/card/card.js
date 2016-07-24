Template.Card.events({
 	'click .payThis': function(event){
     	console.log(this.providerAdress);
     	user.payTo.sendTransaction(this.providerAdress, 
     		{
 			from: currentAddress,
 			gas: 130000,
     		gasPrice: 2100000000000});
	}
});