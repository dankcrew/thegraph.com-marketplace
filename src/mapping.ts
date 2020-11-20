import { BigInt } from "@graphprotocol/graph-ts"
import {
  Marketplace,
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
