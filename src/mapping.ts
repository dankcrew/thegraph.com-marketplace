import {
	log
 } from "@graphprotocol/graph-ts"
 import {
   ExchangeRatesUpdated,
   Halted,
   NewSubscription,
   OwnershipTransferred,
   ProductCreated,
   ProductDeleted,
   ProductImported,
   ProductOwnershipChanged,
   ProductOwnershipOffered,
   ProductRedeployed,
   ProductUpdated,
   Resumed,
   Subscribed,
   SubscriptionExtended,
   SubscriptionImported,
   SubscriptionTransferred,
   TxFeeChanged,
   WhitelistApproved,
   WhitelistDisabled,
   WhitelistEnabled,
   WhitelistRejected,
   WhitelistRequested
 } from "../generated/Marketplace/Marketplace"
 import {
   Product,
   ProductSubscription
 } from "../generated/schema"

 // It is also possible to access smart contracts from mappings. For
 // example, the contract that has emitted the event can be connected to
 // with:
 //
 // let contract = Contract.bind(event.address)
 //
 // The following functions can then be called on this contract to access
 // state variables and other data:
 //
 // - contract.currencyUpdateAgent(...)
 // - contract.dataPerUsd(...)
 // - contract.datacoin(...)
 // - contract.getPriceInData(...)
 // - contract.getProduct(...)
 // - contract.getSubscription(...)
 // - contract.getSubscriptionTo(...)
 // - contract.getWhitelistState(...)
 // - contract.halted(...)
 // - contract.hasValidSubscription(...)
 // - contract.owner(...)
 // - contract.pendingOwner(...)
 // - contract.products(...)
 // - contract.txFee(...)

 export function handleExchangeRatesUpdated(event: ExchangeRatesUpdated): void {}

 export function handleHalted(event: Halted): void {}

 export function handleNewSubscription(event: NewSubscription): void {}

 export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

 export function handleProductCreated(event: ProductCreated): void {
	 log.warning('handleProductCreated: id={} name={} blockNumber={}', [ event.params.id.toHexString(), event.params.name, event.block.number.toString() ]);
	 let id = event.params.id.toHex()
	 let p = new Product(id)
	 p.name = event.params.name
	 p.owner = event.params.owner
	 p.save()
 }

 export function handleProductDeleted(event: ProductDeleted): void {}

 export function handleProductImported(event: ProductImported): void {
	 log.warning('handleProductImported: id={} name={} blockNumber={}', [ event.params.id.toHexString(), event.params.name, event.block.number.toString() ]);
	 let id = event.params.id.toHex()
	 let p = new Product(id)
	 p.name = event.params.name
	 p.owner = event.params.owner
	 p.save()
 }

 export function handleProductOwnershipChanged(
   event: ProductOwnershipChanged
 ): void {}

 export function handleProductOwnershipOffered(
   event: ProductOwnershipOffered
 ): void {}

 export function handleProductRedeployed(event: ProductRedeployed): void {}

 export function handleProductUpdated(event: ProductUpdated): void {}

 export function handleResumed(event: Resumed): void {}

 export function handleSubscribed(event: Subscribed): void {
	 log.warning('handleSubscribed: productId={}, subscriber={} blockNumber={}', [ event.params.productId.toHexString(), event.params.subscriber.toHexString(), event.block.number.toString() ]);
	 let id = event.params.subscriber.toHexString() + "-" + event.params.productId.toHexString()
	 let s = new ProductSubscription(id)
	 s.subscriber = event.params.subscriber
	 s.product = event.params.productId.toHex()
	 s.save()
 }

 export function handleSubscriptionExtended(event: SubscriptionExtended): void {}

 export function handleSubscriptionImported(event: SubscriptionImported): void {
	 log.warning('handleSubscriptionImported: productId={}, subscriber={} blockNumber={}', [ event.params.productId.toHexString(), event.params.subscriber.toHexString(), event.block.number.toString() ]);
 }

 export function handleSubscriptionTransferred(
   event: SubscriptionTransferred
 ): void {}

 export function handleTxFeeChanged(event: TxFeeChanged): void {}

 export function handleWhitelistApproved(event: WhitelistApproved): void {}

 export function handleWhitelistDisabled(event: WhitelistDisabled): void {}

 export function handleWhitelistEnabled(event: WhitelistEnabled): void {}

 export function handleWhitelistRejected(event: WhitelistRejected): void {}

 export function handleWhitelistRequested(event: WhitelistRequested): void {}
