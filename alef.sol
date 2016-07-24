contract mortal{

	address public owner;

	function mortal() {
		owner = msg.sender;
	}

	function kill(address _givMoneyTo){
		suicide(_givMoneyTo);
	}


}

contract Provider {
	function getProviderName() returns (string){}
	function getProviderDescripton returns(string){}
}

contract Alef is mortal{

	string public userName;

	function alef(string _name){
		userName = _name;
	}

	mapping(address=>Service) public services;

	struct Service{
		string serviceName;
		bool active;
		uint signingDate;
		uint lastUpdate;
		string info;
		uint256 debt;
	}

	modifier onlyOwner {
		if (msg.sender != owner){
			throw;
		}else{
				_
		}	
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
		address _serviceAddress,
		string _serviceName,
		string _info
		 ) onlyOwner {

		if (services[_serviceAddress].active){
			throw;
		}else{
		services[_serviceAddress] = Service({
			serviceName: _serviceName,
			active: true,
			signingDate: now,
			lastUpdate: now,
			info: _info,
			debt: 0
			});

		}
	}


	function setNewDebt(

		uint256 _newDebt
		) onlyActivesSrviceProvider onlyEvery30Days{
		services[msg.sender].debt = +_newDebt;
		services[msg.sender].info = _info;
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


contract Child {
	bytes32 public name;
	uint256 public age;
	bool public active;

	function Child (bytes32 _name){
	name = _name;
	age = 3;
	active = true;
}
	function getName() returns (bytes32 name){
		return name;
	}

	function kill(){
		active = false;
	}
}

contract Parents {
	bytes32 public childName;
	uint256 public childAge;
	bool public active;
	Child child;
	function parents(address _childAddress){
		Child child = Child(_childAddress);
		childAge =  child.age();
		active = child.active();
	}
}


//0x34b2D6C1721996df48D8A36E74063a94335C7991
//0x90fDd172bA74eCbC4c8f6A7469723B9bf8289C2E
//0xC8e1FE3a0E3C661450d09A0FE317c2C5b7410950