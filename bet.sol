contract mortal{

	address public owner;

	function mortal() {
		owner = msg.sender;
	}

	function kill(){
		suicide(owner);
	}

	modifier onlyOwner {
	if (msg.sender != owner){
		throw;
	}else{
			_
	}	
}


}

contract User is mortal{

	string public userName;

	function User(string _name){
		userName = _name;
	}

	mapping(address=>Service) public services;

	struct Service{
		bool active;
		uint lastUpdate;
		uint256 debt;
	}


	modifier onlyActivesSrviceProvider {
		if (!(services[msg.sender].active)){
			throw;
		}else{
			_
		}
	}

	modifier onlyEvery30Days{ 
		if ((services[msg.sender].lastUpdate + 30) > now){
			throw;
		}else{
			_
		}
	}

	modifier onlyPermited{
		if (((msg.sender != owner) || services[msg.sender].active == false)
			&& (services[msg.sender].debt !=0))
		{
			throw;
		}else{
			_
		}
	}

	function RegisterToService (
		address _serviceAddress
		 ) onlyOwner {

		if (services[_serviceAddress].active){
			throw;
		}else{
			Provider provider = Provider(_serviceAddress);
			if (provider.activeProvider() == true ){
				services[_serviceAddress] = Service({
				active: true,
				lastUpdate: now,
				debt: 0
				});
			}else{
				throw;
			}

		}
	}


	function setNewDebt(
		uint256 _newDebt) onlyActivesSrviceProvider onlyEvery30Days{
		services[msg.sender].debt = +_newDebt;
		services[msg.sender].lastUpdate = now;
	}

	function killService(address _serviceAddress){
		if (services[_serviceAddress].debt == 0){
			services[_serviceAddress].active = false;
			services[_serviceAddress].lastUpdate = now;
		}else{
			throw;
		}
	}

	function payTo(address _serviceAddress) onlyOwner{

		if (services[_serviceAddress].debt >0 && services[_serviceAddress].active){
			_serviceAddress.send(services[_serviceAddress].debt);
			services[_serviceAddress].debt = 0;
			services[_serviceAddress].lastUpdate = now;
			}else{
				throw;
			}
	}
}




//onlyServiceProvider()




contract Provider is mortal{

	string public providerName;
	string public providerDescription;
	bool public activeProvider;

	function Provider (string _providerName, string _providerDescription){
		providerName 		= _providerName;
		providerDescription = _providerDescription;
		activeProvider		= true;
	}

	function killService() onlyOwner {
		activeProvider = false;
	}

	function setNewDebt
	(address _userAddress,
	 uint256 _debt) onlyOwner {
		User user = User(_userAddress);
       
      // calling age contract method
      	user.setNewDebt(_debt);
		
	}
}