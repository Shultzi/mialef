import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


/*
import './main.html';

//geth --testnet --unlock "0x421A02948386aBcEc98817AdE16b8529aa26c5Ec" --rpc --rpcaddr="localhost" --rpcport="8080" --rpccorsdomain="http://localhost:3000" console

balance = web3.fromWei(web3.eth.getBalance("0x612c84DC76F43e1b024C27040a90747d27F62e4E"), "ether");

contractBalance = web3.fromWei(web3.eth.getBalance("0xd266e591F1d41ac808EE03C2d4DB6ffF348029F0"), "ether");

 




*/


//0x612c84DC76F43e1b024C27040a90747d27F62e4E
//0x5d386B19FA4bcde898A55bA558020e118C485334
//0x1A41B7B7Bf60F435eadb60bf17733EB4482bf244
//0x421A02948386aBcEc98817AdE16b8529aa26c5Ec

Template.MainLayout.onRendered(function () {
  $(document).foundation();
});