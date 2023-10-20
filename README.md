# Pulsar Dev Toolbox 

The Pulsar Dev Toolbox was created with the core belief that security should be a fundamental part of any blockchain project. In the ever-evolving world of blockchain technology, understanding and securing smart contracts is of paramount importance.

# Features
##### Pulsar CoDev

Pulsar CoDev is designed to expedite the process of becoming familiar with the functionality and workflows of complex smart contracts, which often proves to be a challenging task. Powered by a Large Language Model, Pulsar Codev can not only generate a summary of a smart contract but also understand its intended behavior. If you encounter difficulties, you can directly communicate via the chat, and receive accurate answers in a matter of seconds.

##### Pulsar Inspector
Pulsar Inspector is a powerful tool that delves deep into the source code of smart contracts to identify vulnerabilities before they can be exploited by threat actors. It not only recognizes violations of best coding practices but also detects bugs, access control issues, and more. For every identified vulnerability, our solution provides a brief explanation of its significance, how it could be exploited, along with suggestions on how to fix them and possible implementations.

##### Pulsar TestFlow
Pulsar TestFlow is our test case generation tool, designed to help developers assess the robustness of their smart contracts against various scenarios. Often, it's challenging to cover all possible interactions of a smart contract, but with Pulsar TestFlow, this is no longer a problem. It simplifies the testing process, ensuring that your smart contracts can withstand real-world use cases.

# Roadmap
The Pulsar Dev Toolbox is just the beginning of Astrarizon's journey in the realm of security analysis for blockchain technology. We have exciting plans for the future, including the upcoming release of Pulsar Fuzzer. Stay tuned for more updates!


# Installation

This repo contains both the front-end and the microservice that acts as the backend to the frontend.

#### Building the Microservice
Install the dependencies and devDependencies, insert the OpenAi's ChatGPT secret key in ``"/microservice/config/config.devnet.yaml"``.

```
cd microservice
npm i
node run start:devnet
```

The Microservice runs on port 3000 by default.

#### Building the Frontend

Install the dependencies and devDependencies and start the front-end.

```
cd frontend
npm i
node run start
```


## Demos  
#### Home Page
![alt text](https://github.com/astrarizon/hackathon-devtool/blob/main/screencapture-localhost-3000-2023-10-20-12_18_27.png)
#### Pulsar CoDev

###### Summary Example [Invoice Contract](https://github.com/user/repo/blob/branch/other_file.md)
"This smart contract is developed for the MultiversX blockchain and is used for managing invoices. The contract allows users to add invoices and pay them using either EGLD or ESDT tokens.\n\nThe contract has the following functionality. Initialization: The `init` function is called during contract deployment and sets the initial fee and invoice ID. Adding an Invoice: The `add_invoice` function allows users to add a new invoice. It takes the creator's address, token identifier, nonce, and amount as parameters. The function creates a new `Invoice` struct with the provided details and stores it in the contract's storage. It also increments the invoice ID and returns the new invoice ID. Paying an Invoice: The `pay_invoice` function is used to pay an existing invoice. It takes the invoice ID, payment token, payment nonce, and payment amount as parameters. The function retrieves the invoice details from the storage using the invoice ID. It then verifies that the payment token, nonce, and amount match the invoice details. If the verification is successful, the function calculates the tax amount based on the fee set in the contract. If the tax amount is greater than zero, it transfers the tax amount to the contract owner's address using the payment token. Finally, it transfers the remaining amount (invoice amount minus tax) to the invoice creator's address using the payment token. The invoice is then cleared from the storage. Pay EGLD or ESDT: The `pay_egld_esdt` function is a helper function used to transfer EGLD or ESDT tokens to a specified receiver address. It takes the payment token, payment nonce, receiver address, and amount as parameters. If the amount is zero, the function returns early. If the payment token is EGLD, it uses the `send().direct_egld` function to transfer the amount directly to the receiver address. Otherwise, it uses the `send().direct_esdt` function to transfer the amount of the specified ESDT token to the receiver address.\n\n5. Get Fee: The `getFee` function is a view function that returns the current fee value. Get Invoice ID: The `getInvoiceId` function is a view function that returns the current invoice ID. Get Invoice: The `getInvoice` function is a view function that takes an invoice ID as a parameter and returns the corresponding invoice details.\n\nThe typical execution flow would be as follows. The contract is deployed, and the `init` function is called to set the initial fee and invoice ID. Users can call the `add_invoice` function to add a new invoice, providing the necessary details. Users can then call the `pay_invoice` function to pay an existing invoice, providing the invoice ID, payment token, nonce, and amount. The function verifies the payment details and transfers the appropriate amounts to the contract owner and the invoice creator. The invoice is cleared from the storage. Users can use the view functions (`getFee`, `getInvoiceId`, `getInvoice`) to retrieve information about the fee, invoice ID, and specific invoices.\n\nOverall, this smart contract provides a simple and efficient way to manage invoices on the MultiversX blockchain." 

#### Pulsar Inspector 
![alt text](https://github.com/astrarizon/hackathon-devtool/blob/main/Screenshot%20from%202023-10-20%2012-59-28.png)



#### Pulsar TestFlow Page
![alt text](https://github.com/astrarizon/hackathon-devtool/blob/main/Screenshot%20from%202023-10-20%2013-23-01.png)


### _Made with ❤ by ASTRARIZON_
