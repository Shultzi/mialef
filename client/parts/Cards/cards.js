user.services();

services 	= []

for ( x=0 ; x < serviceProviders.length; x++) {
	if (user.services(serviceProviders[x])[0]){
	provider = web3.eth.contract(providerAbi).at(serviceProviders[x]);
	services.push({
		lastUpdate: new BigNumber(user.services(serviceProviders[x])[1]).toNumber(2),
		debt: 		web3.fromWei(user.services(serviceProviders[x])[2], "ether"),
		providerName: 			provider.providerName(),
		providerDescription: 	provider.providerDescription(),
		providerAdress: 		serviceProviders[x]
		});

	}
}

Template.Cards.helpers({
	services: 	services,
	userName: 	user.userName(),


});


