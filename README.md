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

### _Made with ❤ by ASTRARIZON_
