// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.0;


contract Dirt {
    string token_name = 'Dirt Token';
    string symbol = 'drt';

    uint256 public total_tokens = 10000000; //A million tokens
    address public owner;

    mapping(address => uint) public balances;

    event Transfer(address indexed _from, address indexed _to, uint amount );

    constructor(){
        owner = msg.sender;
        balances[msg.sender] = total_tokens;
    }

    function transfer(address _from, address _to, uint amount) external{
            require(amount >= balances[msg.sender],'You dont have enough tokens');
            balances[_from] -= amount;
            balances[_to] += amount;
            emit Transfer(_from, _to, amount);        
    }

    function getUserBalance(address _accNumber) public view returns(uint){
        return balances[_accNumber];
    }

    function addAccToMapping(address _accNumber) public returns(address){
        balances[_accNumber] = 0;
        return _accNumber;
    }

    function getOwner() public view returns(address){
        return owner;
    }
}