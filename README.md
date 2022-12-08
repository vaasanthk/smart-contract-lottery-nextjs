# NextJS Smartcontract Lottery (Raffle)

This is a Smartcontract Lottery project.

![App](img/readme-app.png)

[Example App here!](https://fancy-dream-3458.on.fleek.co/)
[Example App on IPFS here!](ipfs://Qme4KacFx21y6pYuTC6veAU2usryXB3fNWqLkX3a2hMvDe)

Built with ❤️ using:
NextJS
Solidity
Chainlink
Moralis
web3uikit
Ethers
Hardhat
IPFS

-   [NextJS Smartcontract Lottery (Raffle)](#nextjs-smartcontract-lottery-raffle-fcc)
-   [Getting Started](#getting-started)

    -   [Requirements](#requirements)
    -   [Quickstart](#quickstart)

        -   [Optional Gitpod](#optional-gitpod)

    -   [Formatting in VSCode](#formatting-in-vscode)

-   [Useage](#useage)
-   [Deploying to IPFS](#deploying-to-ipfs)
-   [Deploy to IPFS using Fleek](#deploy-to-ipfs-using-fleek)
-   [Linting](#linting)
-   [Thank you!](#thank-you)

This project is apart of the Hardhat FreeCodeCamp video.

Video coming soon...

# Getting Started

## Requirements

-   [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
    -   You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
-   [Nodejs](https://nodejs.org/en/)
    -   You'll know you've installed nodejs right if you can run:
        -   `node --version` and get an ouput like: `vx.x.x`
-   [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
    -   You'll know you've installed yarn right if you can run:
        -   `yarn --version` and get an output like: `x.x.x`
        -   You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

## Quickstart

```
git clone https://github.com/vaasanthk/smart-contract-lottery-nextjs.git
cd smart-contract-lottery-nextjs
yarn
yarn dev
```

### Optional Gitpod

If you can't or don't want to run and install locally, you can work with this repo in Gitpod. If you do this, you can skip the `clone this repo` part.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/PatrickAlphaC/nextjs-smartcontract-lottery-fcc)

## Formatting in VSCode

To have VSCode extension prettier auto-format `.jsx` and `.tsx`, add the following to your settings.json file:

```
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

# Useage

1. Run your local blockchain with the lottery code

> In a different terminal / command line

```
git clone https://github.com/vaasanthk/hardhat-smartcontract-lottery.git
cd hardhat-smartcontract-lottery
yarn
yarn hardhat node
```

2. Add hardhat network to your metamask/wallet

-   Get the RPC_URL of your hh node (usually `http://127.0.0.1:8545/`)
-   Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
    -   Network Name: Hardhat-Localhost
    -   New RPC URL: http://127.0.0.1:8545/
    -   Chain ID: 31337
    -   Currency Symbol: ETH (or GO)
    -   Block Explorer URL: None

Ideally, you'd then [import one of the accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account) from hardhat to your wallet/metamask.

3. Run this code

Back in a different terminal with the code from this repo, run:

```
yarn dev
```

4. Go to UI and have fun!

Head over to your [localhost](http://localhost:3000) and play with the lottery!

# Deploying to IPFS

1. Build your static code.

```
yarn build
```

2. Export your site

```
yarn next export
```

> Note: Some features of NextJS & Moralis are not static, if you're deviating from this repo, you might run into errors.

3. Deploy to IPFS

-   [Download IPFS desktop](https://ipfs.io/#install)
-   Open your [IPFS desktop app](https://ipfs.io/)
-   Select `import` and chose the folder the above step just created (should be `out`)

4. Copy the CID of the folder you pinned

![IPFS](./img/readme-ipfs.png)

5. Get [IPFS companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en) for your browser (or use [Brave Browser](https://brave.com/))

6. Go to `ipfs://YOUR_CID_HERE` and see your ipfs deployed site!

# Deploy to IPFS using Fleek

You can also have [Fleek](https://fleek.co/) auto-deploy your website if you connect your github. Connect to fleek and follow along the docs there. You'll get an IPFS hash and a "regular" URL for your site.

Below link is the deployed website on Fleek
https://spring-brook-8549.on.fleek.co/

# Linting

To check linting / code formatting:

```
yarn lint
```

# Thank you!

[![Vasanth Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://mobile.twitter.com/Vasanth74405679)

