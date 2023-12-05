// SPDX-License-Identifier: MIT
pragma solidity >=0.8.1;


contract ZombieFactory {
    //events go at the top by convention
    event zombieCreation(uint zombieId, string name, uint dna);


    //these are state variables that will be permanently stored on the blockchain in the contract
    uint dnaDigits = 16;
    //we will use this to ensure the dna is 16 digits
    uint dnaModulus = 10 ** dnaDigits;

    struct Zombie {
        string name;
        uint dna;
    }

    //lets create an array for storing a list of zombies we can have a fixed or a dynamic array in solidity 
    // uint[10] fixedArray  uint[] dynamicArray
    //since state variables are permanently stored on the contract it can be useful to utilize dynamic arrays like a database
    //the public keyword here ensures that other contracts can read from this array but not write to it. The public keyword also automatically
    //creates a getter for the zombies array.
    Zombie[] public zombies;

    //lets create a function for creating a zombie. When passing a valueto a function you can define
    //a reference type. the memory keyword means that take the param value and any changes you
    //make to it inside the function would be reflected on the original value
    function _createZombie(string memory _name, uint _dna) private{
        zombies.push(Zombie(_name, _dna));
        uint id = zombies.length - 1;
        emit zombieCreation(id, _name, _dna);
    }

    //by default all functions are pubic which means that any contract can call these functions on your contract.abi
    // best practice is to make all functions private which means that functions inside the contract can only call these
    //functions and then make public only the ones you want to expose to the world
    //function modifiers are keywords that describe what the are modifying. View means that were only returning a state value,
    //pure means that the function does not even use any of the state variables

    //now we will create a function that will do some math and generate random dna, since it will be using the state data
    //we will set it to view
    //typecasting is very important in solidity. If we return a uint value for a uint8 it wont work. solidity has a builtin keccak256 which is basically sha1 which
    //expects a bytecode parameter and turns it into a hash. were going to use the zombie info inside of the hash function to generate a semi random dna
    //then typecast it to a uint
    function _generateRandomDna(string memory _str) private view returns(uint){
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

    //events are basically a way for our blockchain contract to communicate that something happened to our frontend
    //that might be listening for specific events




}