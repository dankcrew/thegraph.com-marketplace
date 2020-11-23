# Streamr Marketplace at The Graph

- Makefile is a wrapper for running commands with Npm
- Makefile verifies correct Node runtime is ued

## Install Graph CLI
`kkn@kare-mbp ~/src/github.com/streamr-dev  %  npm install --global @graphprotocol/graph-cli`
## Initialize Graph
```
kkn@kare-mbp ~/src/github.com/streamr-dev  % graph init --from-contract 0x2b3f2887c697b3f4f8d9f818c95482e1a3a759a5 --network mainnet streamr-dev/streamr-marketplace thegraph.com-marketplace
✔ Fetching ABI from Etherscan
  Generate subgraph from ABI
  Write subgraph to directory
✔ Create subgraph scaffold
✔ Initialize subgraph repository
✔ Install dependencies with npm install
✔ Generate ABI and schema types with npm run codegen

Subgraph streamr-dev/streamr-marketplace created in thegraph.com-marketplace

Next steps:

  1. Run 'graph auth https://api.thegraph.com/deploy/ <access-token>'
     to authenticate with the hosted service. You can get the access token from
     https://thegraph.com/explorer/dashboard/.

  2. Type 'cd thegraph.com-marketplace' to enter the subgraph.

  3. Run 'npm run deploy' to deploy the subgraph to
     https://thegraph.com/explorer/subgraph/streamr-dev/streamr-marketplace.

Make sure to visit the documentation on https://thegraph.com/docs/ for further information.
```

## Login to Graph
```
kkn@kare-mbp ~/src/github.com/streamr-dev/thegraph-marketplace master  % graph auth https://api.thegraph.com/deploy/ <access-token>
Access token set for https://api.thegraph.com/deploy/
```

## Generate Code
```
kkn@kare-mbp ~/src/github.com/streamr-dev/thegraph.com-marketplace master U % make clean graph-codegen
rm -rf build generated
Running node v14.15.1 (npm v6.14.8)

> streamr-marketplace@ codegen /Users/kkn/src/github.com/streamr-dev/thegraph.com-marketplace
> graph codegen

  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Load contract ABI from abis/Marketplace.json
✔ Load contract ABIs
  Generate types for contract ABI: Marketplace (abis/Marketplace.json)
  Write types to generated/Marketplace/Marketplace.ts
✔ Generate types for contract ABIs
✔ Generate types for data source templates
✔ Load data source template ABIs
✔ Generate types for data source template ABIs
✔ Load GraphQL schema from schema.graphql
  Write types to generated/schema.ts
✔ Generate types for GraphQL schema

Types generated successfully
```
## Deploy Graph
```
kkn@kare-mbp ~/src/github.com/streamr-dev/thegraph.com-marketplace master  % make graph-deploy
Running node v14.15.1 (npm v6.14.8)

> streamr-marketplace@ deploy /Users/kkn/src/github.com/streamr-dev/thegraph.com-marketplace
> graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ streamr-dev/streamr-marketplace

  Skip migration: Bump mapping apiVersion from 0.0.1 to 0.0.2
  Skip migration: Bump mapping apiVersion from 0.0.2 to 0.0.3
  Skip migration: Bump mapping apiVersion from 0.0.3 to 0.0.4
  Skip migration: Bump mapping specVersion from 0.0.1 to 0.0.2
✔ Apply migrations
✔ Load subgraph from subgraph.yaml
  Compile data source: Marketplace => build/Marketplace/Marketplace.wasm
✔ Compile subgraph
  Copy schema file build/schema.graphql
  Write subgraph file build/Marketplace/abis/Marketplace.json
  Write subgraph manifest build/subgraph.yaml
✔ Write compiled subgraph to build/
  Add file to IPFS build/schema.graphql
                .. QmZV5EUdu55CyLL6vhy6UTNUjX2jgNgCDkhfdHzcUCGLX4
  Add file to IPFS build/Marketplace/abis/Marketplace.json
                .. QmREY8FsMXkg1jpzAAouCtGiZf7yJsn5adsYMohCw3XAJh
  Add file to IPFS build/Marketplace/Marketplace.wasm
                .. QmdHhw1wS5uhQVkhcmgRmjKPUXoV2ZoHCVRWxWggo6CuP5
✔ Upload subgraph to IPFS

Build completed: QmU3ruVCfaW3mXdU9gatAkEFhV2X7padJxREeZsDr8A4gd

Deployed to https://thegraph.com/explorer/subgraph/streamr-dev/streamr-marketplace

Subgraph endpoints:
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/streamr-dev/streamr-marketplace
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/streamr-dev/streamr-marketplace
```
