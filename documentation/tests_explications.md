# Explanation of tests

* Run the tests with the command: `truffle test`
* The tests carried out with the Truffle framework are written in JavaScript and verify all the proposed functionalities.

##  Summary of tests provided for the Token part

It includes the following checks: 

* The name
* The symbol
* The decimals
* The total supply
* The ability to check the balance of a holder
* The ability to transfer tokens between addresses
* The ability to burn chips

Link to the tests : [LeafToken.test.js](https://github.com/Play2Plant/leaf-website/blob/documentation/test/LeafToken.test.js)

## Summary of tests provided for the NFT part

It includes the following checks:

* Should transfer
* Should mint
* Toggle claimability
* Use of safe transfer
* Have information on royalties
* The ability to withdraw
* The limit of 10 NFT mint

Link to the tests : [LeafNFT.test.js](https://github.com/Play2Plant/leaf-website/blob/documentation/test/LeafNFT.test.js)
