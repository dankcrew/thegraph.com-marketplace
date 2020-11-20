import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
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
} from "../generated/Contract/Contract"
import { ExampleEntity } from "../generated/schema"

export function handleExchangeRatesUpdated(event: ExchangeRatesUpdated): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.timestamp = event.params.timestamp
  entity.dataInUsd = event.params.dataInUsd

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

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
}

export function handleHalted(event: Halted): void {}

export function handleNewSubscription(event: NewSubscription): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleProductCreated(event: ProductCreated): void {}

export function handleProductDeleted(event: ProductDeleted): void {}

export function handleProductImported(event: ProductImported): void {}

export function handleProductOwnershipChanged(
  event: ProductOwnershipChanged
): void {}

export function handleProductOwnershipOffered(
  event: ProductOwnershipOffered
): void {}

export function handleProductRedeployed(event: ProductRedeployed): void {}

export function handleProductUpdated(event: ProductUpdated): void {}

export function handleResumed(event: Resumed): void {}

export function handleSubscribed(event: Subscribed): void {}

export function handleSubscriptionExtended(event: SubscriptionExtended): void {}

export function handleSubscriptionImported(event: SubscriptionImported): void {}

export function handleSubscriptionTransferred(
  event: SubscriptionTransferred
): void {}

export function handleTxFeeChanged(event: TxFeeChanged): void {}

export function handleWhitelistApproved(event: WhitelistApproved): void {}

export function handleWhitelistDisabled(event: WhitelistDisabled): void {}

export function handleWhitelistEnabled(event: WhitelistEnabled): void {}

export function handleWhitelistRejected(event: WhitelistRejected): void {}

export function handleWhitelistRequested(event: WhitelistRequested): void {}
