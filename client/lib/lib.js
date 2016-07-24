if(typeof web3 !== 'undefined'){
  web3 = new Web3(web3.currentProvider);
}
else{
web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8080"));
};

userAbi = [ { "constant": false, "inputs": [ { "name": "_newDebt", "type": "uint256" } ], "name": "setNewDebt", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_serviceAddress", "type": "address" } ], "name": "killService", "outputs": [], "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "services", "outputs": [ { "name": "active", "type": "bool", "value": false }, { "name": "lastUpdate", "type": "uint256", "value": "0" }, { "name": "debt", "type": "uint256", "value": "0" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "userName", "outputs": [ { "name": "", "type": "string", "value": "testing user" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0x34c79df4b7c7725e93e13a1589c05f3b101c6df6" } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_serviceAddress", "type": "address" } ], "name": "RegisterToService", "outputs": [], "type": "function" }, { "constant": false, "inputs": [ { "name": "_serviceAddress", "type": "address" } ], "name": "payTo", "outputs": [], "type": "function" }, { "inputs": [ { "name": "_name", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;name", "template": "elements_input_string", "value": "testing user" } ], "type": "constructor" } ];

providerAbi = [ { "constant": true, "inputs": [], "name": "providerName", "outputs": [ { "name": "", "type": "string", "value": "ISP" } ], "type": "function" }, { "constant": false, "inputs": [], "name": "kill", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "providerDescription", "outputs": [ { "name": "", "type": "string", "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } ], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xc14f30963a6a46cb35e82efe3bc7475a03fe7a2d" } ], "type": "function" }, { "constant": true, "inputs": [], "name": "activeProvider", "outputs": [ { "name": "", "type": "bool", "value": true } ], "type": "function" }, { "constant": false, "inputs": [ { "name": "_userAddress", "type": "address" }, { "name": "_debt", "type": "uint256" } ], "name": "setNewDebt", "outputs": [], "type": "function" }, { "constant": false, "inputs": [], "name": "killService", "outputs": [], "type": "function" }, { "inputs": [ { "name": "_providerName", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;provider Name", "template": "elements_input_string", "value": "ISP" }, { "name": "_providerDescription", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "&thinsp;<span class=\"punctuation\">_</span>&thinsp;provider Description", "template": "elements_input_string", "value": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." } ], "type": "constructor" } ];


user = web3.eth.contract(userAbi).at("0x11D757262Ef8B27D19E4EEc0b74dD54e8F038766");

//alef = web3.eth.contract([ { "constant": false, "inputs": [ { "name": "_childAddress", "type": "address" } ], "name": "parents", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "childName", "outputs": [ { "name": "", "type": "string", "value": "", "displayName": "" } ], "type": "function" } ]).at("0x1C98b4e1b1d665D2369f804a0b84946485Bc9632")




currentAddress 	= "0x34c79Df4b7c7725e93E13A1589c05f3B101C6DF6";

serviceProviders = ["0x150288d41902aC8C4B69Cf4Dd1dE3aB7D7B0aDAf",
					"0x935288A69723207A17AE8fce2926d9C0E058772D"]

users = ["User1",
		 "User2"]

Template.registerHelper('formatDateDay', (lastUpdate) => {
		console.log(lastUpdate);
	day = moment.unix(lastUpdate).format('DD');

	return day;
});


Template.registerHelper('formatDateMonth', (lastUpdate) => {
		console.log(lastUpdate);
	month = moment.unix(lastUpdate).format('MMM');

	return month;
});

//geth --testnet --unlock "0x34c79Df4b7c7725e93E13A1589c05f3B101C6DF6" --rpc --rpcaddr="localhost" --rpcport="8080" --rpccorsdomain="http://localhost:3000" console
/*
balance = web3.fromWei(web3.eth.getBalance("0x612c84DC76F43e1b024C27040a90747d27F62e4E"), "ether");

contractBalance = web3.fromWei(web3.eth.getBalance("0xd266e591F1d41ac808EE03C2d4DB6ffF348029F0"), "ether");

 
Template.body.helpers({
	Voters: [{name: "voters"}],
	balance: balance
});



*/


//0x34c79Df4b7c7725e93E13A1589c05f3B101C6DF6 - test
//0xC14f30963a6A46Cb35e82EFe3bC7475a03FE7A2D - number2
