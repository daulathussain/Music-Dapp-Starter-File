# Building & Deploying a MERN STACK Blockchain Music Artists Social Media Dapp

Building & Deploying a MERN STACK Blockchain Music Artists Social Media Dapp

Decentralized applications (Dapps), as we explore the creation and deployment process of a MERN STACK Blockchain Music Artists Social Media Dapp. In this tutorial, we'll walk you through each step, from setting up your development environment to integrating blockchain technology for secure and transparent interactions. Join us as we combine the power of MongoDB, Express.js, React, Nextjs and Node.js with blockchain to revolutionize the way music artists connect with their audience. Whether you're a beginner or an experienced developer, this guide will equip you with the knowledge and skills to bring your Dapp ideas to life. Get ready to innovate and transform the social media landscape with blockchain technology

## Project Overview

![alt text](https://www.daulathussain.com/wp-content/uploads/2024/05/Building-Deploying-a-MERN-STACK-Blockchain-Music-Artists-Social-Media-Dapp.jpg)

## Instruction

Kindly follow the following Instructions to run the project in your system and install the necessary requirements

- [Final Source Code](URL)

#### Setup Video

- [Final Code Setup video](URL)

```https://code.visualstudio.com/download
  WATCH: Setup & Demo Of Project
```

#### Install Vs Code Editor

```https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### FIGMA DESIGN FILE

```https://www.figma.com/file/HutF73HZARM0ymnYKzbhw2/Untitled?type=design&node-id=0%3A1&mode=design&t=aUN0Sq6bgC8D89xp-1
 GET: https://www.figma.com/file/HutF73HZARM0ymnYKzbhw2/Untitled?type=design&node-id=0%3A1&mode=design&t=aUN0Sq6bgC8D89xp-1
```

#### MONGODB DATABASE

```https://www.mongodb.com/
 GET: DATABASE_URL
 GET: DATAMASE_PASSWORD
```

#### PInata IPFS

```https://www.pinata.cloud/
 GET: API_KEY
 GET:  SECRECT_KEY
```

## PInata IPFS IMAGE UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
            "Content-Type": "multipart/form-data",
          },
```

## PInata IPFS JSON DATA UPLOAD

```https://www.pinata.cloud/
 headers: {
            pinata_api_key: `YOUR_API_KEY`,
            pinata_secret_api_key: `YOUR_SECRECT_KEY`,
             "Content-Type": "application/json",
          },
```

#### Clone Starter File

```URL
  GET: Project Starter File Download
```

All you need to follow the complete project and follow the instructions which are explained in the tutorial by Daulat

## Final Code Instruction

If you download the final source code then you can follow the following instructions to run the Dapp successfully

#### Setup Video

```https://code.visualstudio.com/download
  WATCH: Setup & Demo Of Project
```

#### Final Source Code

```https://www.theblockchaincoders.com/SourceCode
  Download the Final Source Code
```

#### Install Vs Code Editor

```https://code.visualstudio.com/download
  GET: VsCode Editor
```

#### NodeJs & NPM Version

```https://nodejs.org/en/download
  NodeJs: v21.6.2 / latest version
  NPM: 10.5.0
```

#### Test Faucets

Alchemy will provide you with some free test faucets which you can transfer to your wallet address for deploying the contract

```https://faucet.polygon.technology/
  Get: Free Test Faucets
```

#### RemixID

We are using RemixID for deploying the contract and generation of the ABI in the project, but you can use any other tools like Hardhat, etc.

```https://remix-project.org
  OPEN: RemixID
```

#### Polygon Amoy

```https://www.oklink.com/amoy
  OPEN: Polygon Amoy
```

#### Formspree

```https://formspree.io/
  CREATE ACCOUNT: https://formspree.io/
  const [state, handleSubmit] = useForm("YOUR_KEY");
```

## Important Links

- [Get Pro Blockchain Developer Course](https://www.theblockchaincoders.com/pro-nft-marketplace)
- [Support Creator](https://bit.ly/Support-Creator)
- [All Projects Source Code](https://www.theblockchaincoders.com/SourceCode)

## Authors

- [@theblockchaincoders.com](https://www.theblockchaincoders.com/)
- [@consultancy](https://www.theblockchaincoders.com/consultancy)
- [@youtube](https://www.youtube.com/@daulathussain)

#### PACKAGE.JSON

```https://www.theblockchaincoders.com/SourceCode
  {
  "name": "music-dapp",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": " nodemon index.js",
    "build": "next build",
    "start": "NODE_ENV=production nodemon index.js",
    "lint": "next lint",
    "server": "node index.js",
    "prod": "NODE_ENV=production nodemon index.js"
  },
  "dependencies": {
    "@formspree/react": "^2.5.1",
    "@next/font": "14.0.3",
    "@stripe/stripe-js": "^1.54.2",
    "axios": "^1.6.8",
    "bcrypt": "^5.1.1",
    "cookie-parser": "^1.4.6",
    "dotenv": "^16.3.1",
    "ethers": "^5.5.1",
    "express": "^4.18.2",
    "js-cookie": "^3.0.5",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.0.3",
    "multer": "^1.4.5-lts.1",
    "next": "14.0.3",
    "nodemon": "^3.0.2",
    "path": "^0.12.7",
    "react": "18.2.0",
    "react-audio-player": "^0.17.0",
    "react-dom": "18.2.0",
    "react-dropzone": "^14.2.3",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^4.12.0",
    "stripe": "^14.16.0",
    "wavesurfer.js": "^7.7.5",
    "web3modal": "^1.9.5"
  }
}
```
