/* eslint-disable */
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { BridgeValidator } from "./types";
import { Any } from "../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../binary";
import {
  isSet,
  DeepPartial,
  Exact,
  bytesFromBase64,
  base64FromBytes,
  Rpc,
} from "../../helpers";
import { JsonSafe } from "../../json-safe";
export const protobufPackage = "gravity.v1";
/**
 * MsgSetOrchestratorAddress
 * this message allows validators to delegate their voting responsibilities
 * to a given key. This key is then used as an optional authentication method
 * for sigining oracle claims
 * VALIDATOR
 * The validator field is a cosmosvaloper1... string (i.e. sdk.ValAddress)
 * that references a validator in the active set
 * ORCHESTRATOR
 * The orchestrator field is a cosmos1... string  (i.e. sdk.AccAddress) that
 * references the key that is being delegated to
 * ETH_ADDRESS
 * This is a hex encoded 0x Ethereum public key that will be used by this validator
 * on Ethereum
 */
export interface MsgSetOrchestratorAddress {
  validator: string;
  orchestrator: string;
  ethAddress: string;
}
export interface MsgSetOrchestratorAddressResponse {}
/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
  nonce: bigint;
  orchestrator: string;
  ethAddress: string;
  signature: string;
}
export interface MsgValsetConfirmResponse {}
/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * BRIDGE_FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 * CHAIN_FEE:
 * the fee paid to the chain for handling the request, which must be a
 * certain percentage of the AMOUNT, as determined by governance.
 * This Msg will be rejected if CHAIN_FEE is insufficient.
 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount: Coin;
  bridgeFee: Coin;
  chainFee: Coin;
}
export interface MsgSendToEthResponse {}
/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
  sender: string;
  denom: string;
}
export interface MsgRequestBatchResponse {}
/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: bigint;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmBatchResponse {}
/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
  invalidationId: string;
  invalidationNonce: bigint;
  ethSigner: string;
  orchestrator: string;
  signature: string;
}
export interface MsgConfirmLogicCallResponse {}
/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
  eventNonce: bigint;
  ethBlockHeight: bigint;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
}
export interface MsgSendToCosmosClaimResponse {}
/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwards {
  /** How many queued forwards to clear, be careful about gas limits */
  forwardsToClear: bigint;
  /** This message's sender */
  executor: string;
}
export interface MsgExecuteIbcAutoForwardsResponse {}
/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
  eventNonce: bigint;
  ethBlockHeight: bigint;
  batchNonce: bigint;
  tokenContract: string;
  orchestrator: string;
}
export interface MsgBatchSendToEthClaimResponse {}
/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
  eventNonce: bigint;
  ethBlockHeight: bigint;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: bigint;
  orchestrator: string;
}
export interface MsgERC20DeployedClaimResponse {}
/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
  eventNonce: bigint;
  ethBlockHeight: bigint;
  invalidationId: Uint8Array;
  invalidationNonce: bigint;
  orchestrator: string;
}
export interface MsgLogicCallExecutedClaimResponse {}
/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: bigint;
  valsetNonce: bigint;
  ethBlockHeight: bigint;
  members: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestrator: string;
}
export interface MsgValsetUpdatedClaimResponse {}
/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: bigint;
  sender: string;
}
export interface MsgCancelSendToEthResponse {}
/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
  subject?: Any;
  signature: string;
  sender: string;
}
export interface MsgSubmitBadSignatureEvidenceResponse {}
export interface EventSetOperatorAddress {
  message: string;
  address: string;
}
export interface EventValsetConfirmKey {
  message: string;
  key: string;
}
export interface EventBatchCreated {
  message: string;
  batchNonce: string;
}
export interface EventBatchConfirmKey {
  message: string;
  batchConfirmKey: string;
}
export interface EventBatchSendToEthClaim {
  nonce: string;
}
export interface EventClaim {
  message: string;
  claimHash: string;
  attestationId: string;
}
export interface EventBadSignatureEvidence {
  message: string;
  badEthSignature: string;
  badEthSignatureSubject: string;
}
export interface EventERC20DeployedClaim {
  token: string;
  nonce: string;
}
export interface EventValsetUpdatedClaim {
  nonce: string;
}
export interface EventMultisigUpdateRequest {
  bridgeContract: string;
  bridgeChainId: string;
  multisigId: string;
  nonce: string;
}
export interface EventOutgoingLogicCallCanceled {
  logicCallInvalidationId: string;
  logicCallInvalidationNonce: string;
}
export interface EventSignatureSlashing {
  type: string;
  address: string;
}
export interface EventOutgoingTxId {
  message: string;
  txId: string;
}
export interface EventSendToEthFeeCollected {
  sender: string;
  sendAmount: string;
  feeAmount: string;
}
function createBaseMsgSetOrchestratorAddress(): MsgSetOrchestratorAddress {
  return {
    validator: "",
    orchestrator: "",
    ethAddress: "",
  };
}
export const MsgSetOrchestratorAddress = {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddress",
  encode(
    message: MsgSetOrchestratorAddress,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetOrchestratorAddress {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetOrchestratorAddress {
    const obj = createBaseMsgSetOrchestratorAddress();
    if (isSet(object.validator)) obj.validator = String(object.validator);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    if (isSet(object.ethAddress)) obj.ethAddress = String(object.ethAddress);
    return obj;
  },
  toJSON(
    message: MsgSetOrchestratorAddress,
  ): JsonSafe<MsgSetOrchestratorAddress> {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSetOrchestratorAddress>, I>>(
    object: I,
  ): MsgSetOrchestratorAddress {
    const message = createBaseMsgSetOrchestratorAddress();
    message.validator = object.validator ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    return message;
  },
};
function createBaseMsgSetOrchestratorAddressResponse(): MsgSetOrchestratorAddressResponse {
  return {};
}
export const MsgSetOrchestratorAddressResponse = {
  typeUrl: "/gravity.v1.MsgSetOrchestratorAddressResponse",
  encode(
    _: MsgSetOrchestratorAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSetOrchestratorAddressResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOrchestratorAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSetOrchestratorAddressResponse {
    const obj = createBaseMsgSetOrchestratorAddressResponse();
    return obj;
  },
  toJSON(
    _: MsgSetOrchestratorAddressResponse,
  ): JsonSafe<MsgSetOrchestratorAddressResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgSetOrchestratorAddressResponse>, I>,
  >(_: I): MsgSetOrchestratorAddressResponse {
    const message = createBaseMsgSetOrchestratorAddressResponse();
    return message;
  },
};
function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return {
    nonce: BigInt(0),
    orchestrator: "",
    ethAddress: "",
    signature: "",
  };
}
export const MsgValsetConfirm = {
  typeUrl: "/gravity.v1.MsgValsetConfirm",
  encode(
    message: MsgValsetConfirm,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        case 4:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgValsetConfirm {
    const obj = createBaseMsgValsetConfirm();
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    if (isSet(object.ethAddress)) obj.ethAddress = String(object.ethAddress);
    if (isSet(object.signature)) obj.signature = String(object.signature);
    return obj;
  },
  toJSON(message: MsgValsetConfirm): JsonSafe<MsgValsetConfirm> {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || BigInt(0)).toString());
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirm>, I>>(
    object: I,
  ): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};
function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}
export const MsgValsetConfirmResponse = {
  typeUrl: "/gravity.v1.MsgValsetConfirmResponse",
  encode(
    _: MsgValsetConfirmResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgValsetConfirmResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgValsetConfirmResponse {
    const obj = createBaseMsgValsetConfirmResponse();
    return obj;
  },
  toJSON(_: MsgValsetConfirmResponse): JsonSafe<MsgValsetConfirmResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirmResponse>, I>>(
    _: I,
  ): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
};
function createBaseMsgSendToEth(): MsgSendToEth {
  return {
    sender: "",
    ethDest: "",
    amount: Coin.fromPartial({}),
    bridgeFee: Coin.fromPartial({}),
    chainFee: Coin.fromPartial({}),
  };
}
export const MsgSendToEth = {
  typeUrl: "/gravity.v1.MsgSendToEth",
  encode(
    message: MsgSendToEth,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.chainFee !== undefined) {
      Coin.encode(message.chainFee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendToEth {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ethDest = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.chainFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendToEth {
    const obj = createBaseMsgSendToEth();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.ethDest)) obj.ethDest = String(object.ethDest);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    if (isSet(object.bridgeFee))
      obj.bridgeFee = Coin.fromJSON(object.bridgeFee);
    if (isSet(object.chainFee)) obj.chainFee = Coin.fromJSON(object.chainFee);
    return obj;
  },
  toJSON(message: MsgSendToEth): JsonSafe<MsgSendToEth> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bridgeFee !== undefined &&
      (obj.bridgeFee = message.bridgeFee
        ? Coin.toJSON(message.bridgeFee)
        : undefined);
    message.chainFee !== undefined &&
      (obj.chainFee = message.chainFee
        ? Coin.toJSON(message.chainFee)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendToEth>, I>>(
    object: I,
  ): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    if (object.bridgeFee !== undefined && object.bridgeFee !== null) {
      message.bridgeFee = Coin.fromPartial(object.bridgeFee);
    }
    if (object.chainFee !== undefined && object.chainFee !== null) {
      message.chainFee = Coin.fromPartial(object.chainFee);
    }
    return message;
  },
};
function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}
export const MsgSendToEthResponse = {
  typeUrl: "/gravity.v1.MsgSendToEthResponse",
  encode(
    _: MsgSendToEthResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSendToEthResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSendToEthResponse {
    const obj = createBaseMsgSendToEthResponse();
    return obj;
  },
  toJSON(_: MsgSendToEthResponse): JsonSafe<MsgSendToEthResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendToEthResponse>, I>>(
    _: I,
  ): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
};
function createBaseMsgRequestBatch(): MsgRequestBatch {
  return {
    sender: "",
    denom: "",
  };
}
export const MsgRequestBatch = {
  typeUrl: "/gravity.v1.MsgRequestBatch",
  encode(
    message: MsgRequestBatch,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRequestBatch {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRequestBatch {
    const obj = createBaseMsgRequestBatch();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: MsgRequestBatch): JsonSafe<MsgRequestBatch> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(
    object: I,
  ): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};
function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}
export const MsgRequestBatchResponse = {
  typeUrl: "/gravity.v1.MsgRequestBatchResponse",
  encode(
    _: MsgRequestBatchResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgRequestBatchResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgRequestBatchResponse {
    const obj = createBaseMsgRequestBatchResponse();
    return obj;
  },
  toJSON(_: MsgRequestBatchResponse): JsonSafe<MsgRequestBatchResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(
    _: I,
  ): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
};
function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return {
    nonce: BigInt(0),
    tokenContract: "",
    ethSigner: "",
    orchestrator: "",
    signature: "",
  };
}
export const MsgConfirmBatch = {
  typeUrl: "/gravity.v1.MsgConfirmBatch",
  encode(
    message: MsgConfirmBatch,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.nonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.uint64();
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConfirmBatch {
    const obj = createBaseMsgConfirmBatch();
    if (isSet(object.nonce)) obj.nonce = BigInt(object.nonce.toString());
    if (isSet(object.tokenContract))
      obj.tokenContract = String(object.tokenContract);
    if (isSet(object.ethSigner)) obj.ethSigner = String(object.ethSigner);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    if (isSet(object.signature)) obj.signature = String(object.signature);
    return obj;
  },
  toJSON(message: MsgConfirmBatch): JsonSafe<MsgConfirmBatch> {
    const obj: any = {};
    message.nonce !== undefined &&
      (obj.nonce = (message.nonce || BigInt(0)).toString());
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(
    object: I,
  ): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    if (object.nonce !== undefined && object.nonce !== null) {
      message.nonce = BigInt(object.nonce.toString());
    }
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};
function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}
export const MsgConfirmBatchResponse = {
  typeUrl: "/gravity.v1.MsgConfirmBatchResponse",
  encode(
    _: MsgConfirmBatchResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgConfirmBatchResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgConfirmBatchResponse {
    const obj = createBaseMsgConfirmBatchResponse();
    return obj;
  },
  toJSON(_: MsgConfirmBatchResponse): JsonSafe<MsgConfirmBatchResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatchResponse>, I>>(
    _: I,
  ): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
};
function createBaseMsgConfirmLogicCall(): MsgConfirmLogicCall {
  return {
    invalidationId: "",
    invalidationNonce: BigInt(0),
    ethSigner: "",
    orchestrator: "",
    signature: "",
  };
}
export const MsgConfirmLogicCall = {
  typeUrl: "/gravity.v1.MsgConfirmLogicCall",
  encode(
    message: MsgConfirmLogicCall,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.invalidationId !== "") {
      writer.uint32(10).string(message.invalidationId);
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgConfirmLogicCall {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmLogicCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.string();
          break;
        case 2:
          message.invalidationNonce = reader.uint64();
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgConfirmLogicCall {
    const obj = createBaseMsgConfirmLogicCall();
    if (isSet(object.invalidationId))
      obj.invalidationId = String(object.invalidationId);
    if (isSet(object.invalidationNonce))
      obj.invalidationNonce = BigInt(object.invalidationNonce.toString());
    if (isSet(object.ethSigner)) obj.ethSigner = String(object.ethSigner);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    if (isSet(object.signature)) obj.signature = String(object.signature);
    return obj;
  },
  toJSON(message: MsgConfirmLogicCall): JsonSafe<MsgConfirmLogicCall> {
    const obj: any = {};
    message.invalidationId !== undefined &&
      (obj.invalidationId = message.invalidationId);
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || BigInt(0)
      ).toString());
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConfirmLogicCall>, I>>(
    object: I,
  ): MsgConfirmLogicCall {
    const message = createBaseMsgConfirmLogicCall();
    message.invalidationId = object.invalidationId ?? "";
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = BigInt(object.invalidationNonce.toString());
    }
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    return message;
  },
};
function createBaseMsgConfirmLogicCallResponse(): MsgConfirmLogicCallResponse {
  return {};
}
export const MsgConfirmLogicCallResponse = {
  typeUrl: "/gravity.v1.MsgConfirmLogicCallResponse",
  encode(
    _: MsgConfirmLogicCallResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgConfirmLogicCallResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmLogicCallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgConfirmLogicCallResponse {
    const obj = createBaseMsgConfirmLogicCallResponse();
    return obj;
  },
  toJSON(
    _: MsgConfirmLogicCallResponse,
  ): JsonSafe<MsgConfirmLogicCallResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgConfirmLogicCallResponse>, I>>(
    _: I,
  ): MsgConfirmLogicCallResponse {
    const message = createBaseMsgConfirmLogicCallResponse();
    return message;
  },
};
function createBaseMsgSendToCosmosClaim(): MsgSendToCosmosClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
  };
}
export const MsgSendToCosmosClaim = {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaim",
  encode(
    message: MsgSendToCosmosClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSendToCosmosClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToCosmosClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.ethBlockHeight = reader.uint64();
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.ethereumSender = reader.string();
          break;
        case 6:
          message.cosmosReceiver = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendToCosmosClaim {
    const obj = createBaseMsgSendToCosmosClaim();
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    if (isSet(object.ethBlockHeight))
      obj.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    if (isSet(object.tokenContract))
      obj.tokenContract = String(object.tokenContract);
    if (isSet(object.amount)) obj.amount = String(object.amount);
    if (isSet(object.ethereumSender))
      obj.ethereumSender = String(object.ethereumSender);
    if (isSet(object.cosmosReceiver))
      obj.cosmosReceiver = String(object.cosmosReceiver);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    return obj;
  },
  toJSON(message: MsgSendToCosmosClaim): JsonSafe<MsgSendToCosmosClaim> {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethereumSender !== undefined &&
      (obj.ethereumSender = message.ethereumSender);
    message.cosmosReceiver !== undefined &&
      (obj.cosmosReceiver = message.cosmosReceiver);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendToCosmosClaim>, I>>(
    object: I,
  ): MsgSendToCosmosClaim {
    const message = createBaseMsgSendToCosmosClaim();
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    if (object.ethBlockHeight !== undefined && object.ethBlockHeight !== null) {
      message.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    }
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};
function createBaseMsgSendToCosmosClaimResponse(): MsgSendToCosmosClaimResponse {
  return {};
}
export const MsgSendToCosmosClaimResponse = {
  typeUrl: "/gravity.v1.MsgSendToCosmosClaimResponse",
  encode(
    _: MsgSendToCosmosClaimResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSendToCosmosClaimResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToCosmosClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSendToCosmosClaimResponse {
    const obj = createBaseMsgSendToCosmosClaimResponse();
    return obj;
  },
  toJSON(
    _: MsgSendToCosmosClaimResponse,
  ): JsonSafe<MsgSendToCosmosClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSendToCosmosClaimResponse>, I>>(
    _: I,
  ): MsgSendToCosmosClaimResponse {
    const message = createBaseMsgSendToCosmosClaimResponse();
    return message;
  },
};
function createBaseMsgExecuteIbcAutoForwards(): MsgExecuteIbcAutoForwards {
  return {
    forwardsToClear: BigInt(0),
    executor: "",
  };
}
export const MsgExecuteIbcAutoForwards = {
  typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwards",
  encode(
    message: MsgExecuteIbcAutoForwards,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.forwardsToClear !== BigInt(0)) {
      writer.uint32(8).uint64(message.forwardsToClear);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgExecuteIbcAutoForwards {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteIbcAutoForwards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardsToClear = reader.uint64();
          break;
        case 2:
          message.executor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecuteIbcAutoForwards {
    const obj = createBaseMsgExecuteIbcAutoForwards();
    if (isSet(object.forwardsToClear))
      obj.forwardsToClear = BigInt(object.forwardsToClear.toString());
    if (isSet(object.executor)) obj.executor = String(object.executor);
    return obj;
  },
  toJSON(
    message: MsgExecuteIbcAutoForwards,
  ): JsonSafe<MsgExecuteIbcAutoForwards> {
    const obj: any = {};
    message.forwardsToClear !== undefined &&
      (obj.forwardsToClear = (message.forwardsToClear || BigInt(0)).toString());
    message.executor !== undefined && (obj.executor = message.executor);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgExecuteIbcAutoForwards>, I>>(
    object: I,
  ): MsgExecuteIbcAutoForwards {
    const message = createBaseMsgExecuteIbcAutoForwards();
    if (
      object.forwardsToClear !== undefined &&
      object.forwardsToClear !== null
    ) {
      message.forwardsToClear = BigInt(object.forwardsToClear.toString());
    }
    message.executor = object.executor ?? "";
    return message;
  },
};
function createBaseMsgExecuteIbcAutoForwardsResponse(): MsgExecuteIbcAutoForwardsResponse {
  return {};
}
export const MsgExecuteIbcAutoForwardsResponse = {
  typeUrl: "/gravity.v1.MsgExecuteIbcAutoForwardsResponse",
  encode(
    _: MsgExecuteIbcAutoForwardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgExecuteIbcAutoForwardsResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse {
    const obj = createBaseMsgExecuteIbcAutoForwardsResponse();
    return obj;
  },
  toJSON(
    _: MsgExecuteIbcAutoForwardsResponse,
  ): JsonSafe<MsgExecuteIbcAutoForwardsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgExecuteIbcAutoForwardsResponse>, I>,
  >(_: I): MsgExecuteIbcAutoForwardsResponse {
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    return message;
  },
};
function createBaseMsgBatchSendToEthClaim(): MsgBatchSendToEthClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    batchNonce: BigInt(0),
    tokenContract: "",
    orchestrator: "",
  };
}
export const MsgBatchSendToEthClaim = {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaim",
  encode(
    message: MsgBatchSendToEthClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.batchNonce !== BigInt(0)) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgBatchSendToEthClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSendToEthClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.ethBlockHeight = reader.uint64();
          break;
        case 3:
          message.batchNonce = reader.uint64();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgBatchSendToEthClaim {
    const obj = createBaseMsgBatchSendToEthClaim();
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    if (isSet(object.ethBlockHeight))
      obj.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    if (isSet(object.batchNonce))
      obj.batchNonce = BigInt(object.batchNonce.toString());
    if (isSet(object.tokenContract))
      obj.tokenContract = String(object.tokenContract);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    return obj;
  },
  toJSON(message: MsgBatchSendToEthClaim): JsonSafe<MsgBatchSendToEthClaim> {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
    message.batchNonce !== undefined &&
      (obj.batchNonce = (message.batchNonce || BigInt(0)).toString());
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBatchSendToEthClaim>, I>>(
    object: I,
  ): MsgBatchSendToEthClaim {
    const message = createBaseMsgBatchSendToEthClaim();
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    if (object.ethBlockHeight !== undefined && object.ethBlockHeight !== null) {
      message.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    }
    if (object.batchNonce !== undefined && object.batchNonce !== null) {
      message.batchNonce = BigInt(object.batchNonce.toString());
    }
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};
function createBaseMsgBatchSendToEthClaimResponse(): MsgBatchSendToEthClaimResponse {
  return {};
}
export const MsgBatchSendToEthClaimResponse = {
  typeUrl: "/gravity.v1.MsgBatchSendToEthClaimResponse",
  encode(
    _: MsgBatchSendToEthClaimResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgBatchSendToEthClaimResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSendToEthClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgBatchSendToEthClaimResponse {
    const obj = createBaseMsgBatchSendToEthClaimResponse();
    return obj;
  },
  toJSON(
    _: MsgBatchSendToEthClaimResponse,
  ): JsonSafe<MsgBatchSendToEthClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgBatchSendToEthClaimResponse>, I>>(
    _: I,
  ): MsgBatchSendToEthClaimResponse {
    const message = createBaseMsgBatchSendToEthClaimResponse();
    return message;
  },
};
function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: BigInt(0),
    orchestrator: "",
  };
}
export const MsgERC20DeployedClaim = {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaim",
  encode(
    message: MsgERC20DeployedClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.decimals !== BigInt(0)) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgERC20DeployedClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.ethBlockHeight = reader.uint64();
          break;
        case 3:
          message.cosmosDenom = reader.string();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.decimals = reader.uint64();
          break;
        case 8:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgERC20DeployedClaim {
    const obj = createBaseMsgERC20DeployedClaim();
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    if (isSet(object.ethBlockHeight))
      obj.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    if (isSet(object.cosmosDenom)) obj.cosmosDenom = String(object.cosmosDenom);
    if (isSet(object.tokenContract))
      obj.tokenContract = String(object.tokenContract);
    if (isSet(object.name)) obj.name = String(object.name);
    if (isSet(object.symbol)) obj.symbol = String(object.symbol);
    if (isSet(object.decimals))
      obj.decimals = BigInt(object.decimals.toString());
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    return obj;
  },
  toJSON(message: MsgERC20DeployedClaim): JsonSafe<MsgERC20DeployedClaim> {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
    message.cosmosDenom !== undefined &&
      (obj.cosmosDenom = message.cosmosDenom);
    message.tokenContract !== undefined &&
      (obj.tokenContract = message.tokenContract);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined &&
      (obj.decimals = (message.decimals || BigInt(0)).toString());
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgERC20DeployedClaim>, I>>(
    object: I,
  ): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    if (object.ethBlockHeight !== undefined && object.ethBlockHeight !== null) {
      message.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    }
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = BigInt(object.decimals.toString());
    }
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};
function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}
export const MsgERC20DeployedClaimResponse = {
  typeUrl: "/gravity.v1.MsgERC20DeployedClaimResponse",
  encode(
    _: MsgERC20DeployedClaimResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgERC20DeployedClaimResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgERC20DeployedClaimResponse {
    const obj = createBaseMsgERC20DeployedClaimResponse();
    return obj;
  },
  toJSON(
    _: MsgERC20DeployedClaimResponse,
  ): JsonSafe<MsgERC20DeployedClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgERC20DeployedClaimResponse>, I>>(
    _: I,
  ): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
};
function createBaseMsgLogicCallExecutedClaim(): MsgLogicCallExecutedClaim {
  return {
    eventNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    invalidationId: new Uint8Array(),
    invalidationNonce: BigInt(0),
    orchestrator: "",
  };
}
export const MsgLogicCallExecutedClaim = {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaim",
  encode(
    message: MsgLogicCallExecutedClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.ethBlockHeight);
    }
    if (message.invalidationId.length !== 0) {
      writer.uint32(26).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== BigInt(0)) {
      writer.uint32(32).uint64(message.invalidationNonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgLogicCallExecutedClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLogicCallExecutedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.ethBlockHeight = reader.uint64();
          break;
        case 3:
          message.invalidationId = reader.bytes();
          break;
        case 4:
          message.invalidationNonce = reader.uint64();
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgLogicCallExecutedClaim {
    const obj = createBaseMsgLogicCallExecutedClaim();
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    if (isSet(object.ethBlockHeight))
      obj.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    if (isSet(object.invalidationId))
      obj.invalidationId = bytesFromBase64(object.invalidationId);
    if (isSet(object.invalidationNonce))
      obj.invalidationNonce = BigInt(object.invalidationNonce.toString());
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    return obj;
  },
  toJSON(
    message: MsgLogicCallExecutedClaim,
  ): JsonSafe<MsgLogicCallExecutedClaim> {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
    message.invalidationId !== undefined &&
      (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined
          ? message.invalidationId
          : new Uint8Array(),
      ));
    message.invalidationNonce !== undefined &&
      (obj.invalidationNonce = (
        message.invalidationNonce || BigInt(0)
      ).toString());
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgLogicCallExecutedClaim>, I>>(
    object: I,
  ): MsgLogicCallExecutedClaim {
    const message = createBaseMsgLogicCallExecutedClaim();
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    if (object.ethBlockHeight !== undefined && object.ethBlockHeight !== null) {
      message.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    }
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    if (
      object.invalidationNonce !== undefined &&
      object.invalidationNonce !== null
    ) {
      message.invalidationNonce = BigInt(object.invalidationNonce.toString());
    }
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};
function createBaseMsgLogicCallExecutedClaimResponse(): MsgLogicCallExecutedClaimResponse {
  return {};
}
export const MsgLogicCallExecutedClaimResponse = {
  typeUrl: "/gravity.v1.MsgLogicCallExecutedClaimResponse",
  encode(
    _: MsgLogicCallExecutedClaimResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgLogicCallExecutedClaimResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgLogicCallExecutedClaimResponse {
    const obj = createBaseMsgLogicCallExecutedClaimResponse();
    return obj;
  },
  toJSON(
    _: MsgLogicCallExecutedClaimResponse,
  ): JsonSafe<MsgLogicCallExecutedClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgLogicCallExecutedClaimResponse>, I>,
  >(_: I): MsgLogicCallExecutedClaimResponse {
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    return message;
  },
};
function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: BigInt(0),
    valsetNonce: BigInt(0),
    ethBlockHeight: BigInt(0),
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: "",
  };
}
export const MsgValsetUpdatedClaim = {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaim",
  encode(
    message: MsgValsetUpdatedClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.eventNonce !== BigInt(0)) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.valsetNonce !== BigInt(0)) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (message.ethBlockHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.ethBlockHeight);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgValsetUpdatedClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = reader.uint64();
          break;
        case 2:
          message.valsetNonce = reader.uint64();
          break;
        case 3:
          message.ethBlockHeight = reader.uint64();
          break;
        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardAmount = reader.string();
          break;
        case 6:
          message.rewardToken = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgValsetUpdatedClaim {
    const obj = createBaseMsgValsetUpdatedClaim();
    if (isSet(object.eventNonce))
      obj.eventNonce = BigInt(object.eventNonce.toString());
    if (isSet(object.valsetNonce))
      obj.valsetNonce = BigInt(object.valsetNonce.toString());
    if (isSet(object.ethBlockHeight))
      obj.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    if (Array.isArray(object?.members))
      obj.members = object.members.map((e: any) => BridgeValidator.fromJSON(e));
    if (isSet(object.rewardAmount))
      obj.rewardAmount = String(object.rewardAmount);
    if (isSet(object.rewardToken)) obj.rewardToken = String(object.rewardToken);
    if (isSet(object.orchestrator))
      obj.orchestrator = String(object.orchestrator);
    return obj;
  },
  toJSON(message: MsgValsetUpdatedClaim): JsonSafe<MsgValsetUpdatedClaim> {
    const obj: any = {};
    message.eventNonce !== undefined &&
      (obj.eventNonce = (message.eventNonce || BigInt(0)).toString());
    message.valsetNonce !== undefined &&
      (obj.valsetNonce = (message.valsetNonce || BigInt(0)).toString());
    message.ethBlockHeight !== undefined &&
      (obj.ethBlockHeight = (message.ethBlockHeight || BigInt(0)).toString());
    if (message.members) {
      obj.members = message.members.map((e) =>
        e ? BridgeValidator.toJSON(e) : undefined,
      );
    } else {
      obj.members = [];
    }
    message.rewardAmount !== undefined &&
      (obj.rewardAmount = message.rewardAmount);
    message.rewardToken !== undefined &&
      (obj.rewardToken = message.rewardToken);
    message.orchestrator !== undefined &&
      (obj.orchestrator = message.orchestrator);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaim>, I>>(
    object: I,
  ): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    if (object.eventNonce !== undefined && object.eventNonce !== null) {
      message.eventNonce = BigInt(object.eventNonce.toString());
    }
    if (object.valsetNonce !== undefined && object.valsetNonce !== null) {
      message.valsetNonce = BigInt(object.valsetNonce.toString());
    }
    if (object.ethBlockHeight !== undefined && object.ethBlockHeight !== null) {
      message.ethBlockHeight = BigInt(object.ethBlockHeight.toString());
    }
    message.members =
      object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    return message;
  },
};
function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}
export const MsgValsetUpdatedClaimResponse = {
  typeUrl: "/gravity.v1.MsgValsetUpdatedClaimResponse",
  encode(
    _: MsgValsetUpdatedClaimResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgValsetUpdatedClaimResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    const obj = createBaseMsgValsetUpdatedClaimResponse();
    return obj;
  },
  toJSON(
    _: MsgValsetUpdatedClaimResponse,
  ): JsonSafe<MsgValsetUpdatedClaimResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaimResponse>, I>>(
    _: I,
  ): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
};
function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return {
    transactionId: BigInt(0),
    sender: "",
  };
}
export const MsgCancelSendToEth = {
  typeUrl: "/gravity.v1.MsgCancelSendToEth",
  encode(
    message: MsgCancelSendToEth,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.transactionId !== BigInt(0)) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgCancelSendToEth {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = reader.uint64();
          break;
        case 2:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelSendToEth {
    const obj = createBaseMsgCancelSendToEth();
    if (isSet(object.transactionId))
      obj.transactionId = BigInt(object.transactionId.toString());
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(message: MsgCancelSendToEth): JsonSafe<MsgCancelSendToEth> {
    const obj: any = {};
    message.transactionId !== undefined &&
      (obj.transactionId = (message.transactionId || BigInt(0)).toString());
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEth>, I>>(
    object: I,
  ): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = BigInt(object.transactionId.toString());
    }
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}
export const MsgCancelSendToEthResponse = {
  typeUrl: "/gravity.v1.MsgCancelSendToEthResponse",
  encode(
    _: MsgCancelSendToEthResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgCancelSendToEthResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCancelSendToEthResponse {
    const obj = createBaseMsgCancelSendToEthResponse();
    return obj;
  },
  toJSON(_: MsgCancelSendToEthResponse): JsonSafe<MsgCancelSendToEthResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEthResponse>, I>>(
    _: I,
  ): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
};
function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return {
    subject: undefined,
    signature: "",
    sender: "",
  };
}
export const MsgSubmitBadSignatureEvidence = {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidence",
  encode(
    message: MsgSubmitBadSignatureEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSubmitBadSignatureEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitBadSignatureEvidence {
    const obj = createBaseMsgSubmitBadSignatureEvidence();
    if (isSet(object.subject)) obj.subject = Any.fromJSON(object.subject);
    if (isSet(object.signature)) obj.signature = String(object.signature);
    if (isSet(object.sender)) obj.sender = String(object.sender);
    return obj;
  },
  toJSON(
    message: MsgSubmitBadSignatureEvidence,
  ): JsonSafe<MsgSubmitBadSignatureEvidence> {
    const obj: any = {};
    message.subject !== undefined &&
      (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    message.sender !== undefined && (obj.sender = message.sender);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<MsgSubmitBadSignatureEvidence>, I>>(
    object: I,
  ): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    if (object.subject !== undefined && object.subject !== null) {
      message.subject = Any.fromPartial(object.subject);
    }
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    return message;
  },
};
function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}
export const MsgSubmitBadSignatureEvidenceResponse = {
  typeUrl: "/gravity.v1.MsgSubmitBadSignatureEvidenceResponse",
  encode(
    _: MsgSubmitBadSignatureEvidenceResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): MsgSubmitBadSignatureEvidenceResponse {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse {
    const obj = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return obj;
  },
  toJSON(
    _: MsgSubmitBadSignatureEvidenceResponse,
  ): JsonSafe<MsgSubmitBadSignatureEvidenceResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial<
    I extends Exact<DeepPartial<MsgSubmitBadSignatureEvidenceResponse>, I>,
  >(_: I): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
};
function createBaseEventSetOperatorAddress(): EventSetOperatorAddress {
  return {
    message: "",
    address: "",
  };
}
export const EventSetOperatorAddress = {
  typeUrl: "/gravity.v1.EventSetOperatorAddress",
  encode(
    message: EventSetOperatorAddress,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventSetOperatorAddress {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOperatorAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSetOperatorAddress {
    const obj = createBaseEventSetOperatorAddress();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventSetOperatorAddress): JsonSafe<EventSetOperatorAddress> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSetOperatorAddress>, I>>(
    object: I,
  ): EventSetOperatorAddress {
    const message = createBaseEventSetOperatorAddress();
    message.message = object.message ?? "";
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseEventValsetConfirmKey(): EventValsetConfirmKey {
  return {
    message: "",
    key: "",
  };
}
export const EventValsetConfirmKey = {
  typeUrl: "/gravity.v1.EventValsetConfirmKey",
  encode(
    message: EventValsetConfirmKey,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.key !== "") {
      writer.uint32(18).string(message.key);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventValsetConfirmKey {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetConfirmKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventValsetConfirmKey {
    const obj = createBaseEventValsetConfirmKey();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.key)) obj.key = String(object.key);
    return obj;
  },
  toJSON(message: EventValsetConfirmKey): JsonSafe<EventValsetConfirmKey> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventValsetConfirmKey>, I>>(
    object: I,
  ): EventValsetConfirmKey {
    const message = createBaseEventValsetConfirmKey();
    message.message = object.message ?? "";
    message.key = object.key ?? "";
    return message;
  },
};
function createBaseEventBatchCreated(): EventBatchCreated {
  return {
    message: "",
    batchNonce: "",
  };
}
export const EventBatchCreated = {
  typeUrl: "/gravity.v1.EventBatchCreated",
  encode(
    message: EventBatchCreated,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.batchNonce !== "") {
      writer.uint32(18).string(message.batchNonce);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventBatchCreated {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchCreated();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.batchNonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBatchCreated {
    const obj = createBaseEventBatchCreated();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.batchNonce)) obj.batchNonce = String(object.batchNonce);
    return obj;
  },
  toJSON(message: EventBatchCreated): JsonSafe<EventBatchCreated> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.batchNonce !== undefined && (obj.batchNonce = message.batchNonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBatchCreated>, I>>(
    object: I,
  ): EventBatchCreated {
    const message = createBaseEventBatchCreated();
    message.message = object.message ?? "";
    message.batchNonce = object.batchNonce ?? "";
    return message;
  },
};
function createBaseEventBatchConfirmKey(): EventBatchConfirmKey {
  return {
    message: "",
    batchConfirmKey: "",
  };
}
export const EventBatchConfirmKey = {
  typeUrl: "/gravity.v1.EventBatchConfirmKey",
  encode(
    message: EventBatchConfirmKey,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.batchConfirmKey !== "") {
      writer.uint32(18).string(message.batchConfirmKey);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventBatchConfirmKey {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchConfirmKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.batchConfirmKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBatchConfirmKey {
    const obj = createBaseEventBatchConfirmKey();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.batchConfirmKey))
      obj.batchConfirmKey = String(object.batchConfirmKey);
    return obj;
  },
  toJSON(message: EventBatchConfirmKey): JsonSafe<EventBatchConfirmKey> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.batchConfirmKey !== undefined &&
      (obj.batchConfirmKey = message.batchConfirmKey);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBatchConfirmKey>, I>>(
    object: I,
  ): EventBatchConfirmKey {
    const message = createBaseEventBatchConfirmKey();
    message.message = object.message ?? "";
    message.batchConfirmKey = object.batchConfirmKey ?? "";
    return message;
  },
};
function createBaseEventBatchSendToEthClaim(): EventBatchSendToEthClaim {
  return {
    nonce: "",
  };
}
export const EventBatchSendToEthClaim = {
  typeUrl: "/gravity.v1.EventBatchSendToEthClaim",
  encode(
    message: EventBatchSendToEthClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventBatchSendToEthClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBatchSendToEthClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBatchSendToEthClaim {
    const obj = createBaseEventBatchSendToEthClaim();
    if (isSet(object.nonce)) obj.nonce = String(object.nonce);
    return obj;
  },
  toJSON(
    message: EventBatchSendToEthClaim,
  ): JsonSafe<EventBatchSendToEthClaim> {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBatchSendToEthClaim>, I>>(
    object: I,
  ): EventBatchSendToEthClaim {
    const message = createBaseEventBatchSendToEthClaim();
    message.nonce = object.nonce ?? "";
    return message;
  },
};
function createBaseEventClaim(): EventClaim {
  return {
    message: "",
    claimHash: "",
    attestationId: "",
  };
}
export const EventClaim = {
  typeUrl: "/gravity.v1.EventClaim",
  encode(
    message: EventClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.claimHash !== "") {
      writer.uint32(18).string(message.claimHash);
    }
    if (message.attestationId !== "") {
      writer.uint32(26).string(message.attestationId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.claimHash = reader.string();
          break;
        case 3:
          message.attestationId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventClaim {
    const obj = createBaseEventClaim();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.claimHash)) obj.claimHash = String(object.claimHash);
    if (isSet(object.attestationId))
      obj.attestationId = String(object.attestationId);
    return obj;
  },
  toJSON(message: EventClaim): JsonSafe<EventClaim> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.claimHash !== undefined && (obj.claimHash = message.claimHash);
    message.attestationId !== undefined &&
      (obj.attestationId = message.attestationId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventClaim>, I>>(
    object: I,
  ): EventClaim {
    const message = createBaseEventClaim();
    message.message = object.message ?? "";
    message.claimHash = object.claimHash ?? "";
    message.attestationId = object.attestationId ?? "";
    return message;
  },
};
function createBaseEventBadSignatureEvidence(): EventBadSignatureEvidence {
  return {
    message: "",
    badEthSignature: "",
    badEthSignatureSubject: "",
  };
}
export const EventBadSignatureEvidence = {
  typeUrl: "/gravity.v1.EventBadSignatureEvidence",
  encode(
    message: EventBadSignatureEvidence,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.badEthSignature !== "") {
      writer.uint32(18).string(message.badEthSignature);
    }
    if (message.badEthSignatureSubject !== "") {
      writer.uint32(26).string(message.badEthSignatureSubject);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventBadSignatureEvidence {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.badEthSignature = reader.string();
          break;
        case 3:
          message.badEthSignatureSubject = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventBadSignatureEvidence {
    const obj = createBaseEventBadSignatureEvidence();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.badEthSignature))
      obj.badEthSignature = String(object.badEthSignature);
    if (isSet(object.badEthSignatureSubject))
      obj.badEthSignatureSubject = String(object.badEthSignatureSubject);
    return obj;
  },
  toJSON(
    message: EventBadSignatureEvidence,
  ): JsonSafe<EventBadSignatureEvidence> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.badEthSignature !== undefined &&
      (obj.badEthSignature = message.badEthSignature);
    message.badEthSignatureSubject !== undefined &&
      (obj.badEthSignatureSubject = message.badEthSignatureSubject);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventBadSignatureEvidence>, I>>(
    object: I,
  ): EventBadSignatureEvidence {
    const message = createBaseEventBadSignatureEvidence();
    message.message = object.message ?? "";
    message.badEthSignature = object.badEthSignature ?? "";
    message.badEthSignatureSubject = object.badEthSignatureSubject ?? "";
    return message;
  },
};
function createBaseEventERC20DeployedClaim(): EventERC20DeployedClaim {
  return {
    token: "",
    nonce: "",
  };
}
export const EventERC20DeployedClaim = {
  typeUrl: "/gravity.v1.EventERC20DeployedClaim",
  encode(
    message: EventERC20DeployedClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.token !== "") {
      writer.uint32(10).string(message.token);
    }
    if (message.nonce !== "") {
      writer.uint32(18).string(message.nonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventERC20DeployedClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = reader.string();
          break;
        case 2:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventERC20DeployedClaim {
    const obj = createBaseEventERC20DeployedClaim();
    if (isSet(object.token)) obj.token = String(object.token);
    if (isSet(object.nonce)) obj.nonce = String(object.nonce);
    return obj;
  },
  toJSON(message: EventERC20DeployedClaim): JsonSafe<EventERC20DeployedClaim> {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventERC20DeployedClaim>, I>>(
    object: I,
  ): EventERC20DeployedClaim {
    const message = createBaseEventERC20DeployedClaim();
    message.token = object.token ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};
function createBaseEventValsetUpdatedClaim(): EventValsetUpdatedClaim {
  return {
    nonce: "",
  };
}
export const EventValsetUpdatedClaim = {
  typeUrl: "/gravity.v1.EventValsetUpdatedClaim",
  encode(
    message: EventValsetUpdatedClaim,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.nonce !== "") {
      writer.uint32(10).string(message.nonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventValsetUpdatedClaim {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventValsetUpdatedClaim {
    const obj = createBaseEventValsetUpdatedClaim();
    if (isSet(object.nonce)) obj.nonce = String(object.nonce);
    return obj;
  },
  toJSON(message: EventValsetUpdatedClaim): JsonSafe<EventValsetUpdatedClaim> {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventValsetUpdatedClaim>, I>>(
    object: I,
  ): EventValsetUpdatedClaim {
    const message = createBaseEventValsetUpdatedClaim();
    message.nonce = object.nonce ?? "";
    return message;
  },
};
function createBaseEventMultisigUpdateRequest(): EventMultisigUpdateRequest {
  return {
    bridgeContract: "",
    bridgeChainId: "",
    multisigId: "",
    nonce: "",
  };
}
export const EventMultisigUpdateRequest = {
  typeUrl: "/gravity.v1.EventMultisigUpdateRequest",
  encode(
    message: EventMultisigUpdateRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.bridgeContract !== "") {
      writer.uint32(10).string(message.bridgeContract);
    }
    if (message.bridgeChainId !== "") {
      writer.uint32(18).string(message.bridgeChainId);
    }
    if (message.multisigId !== "") {
      writer.uint32(26).string(message.multisigId);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventMultisigUpdateRequest {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMultisigUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bridgeContract = reader.string();
          break;
        case 2:
          message.bridgeChainId = reader.string();
          break;
        case 3:
          message.multisigId = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventMultisigUpdateRequest {
    const obj = createBaseEventMultisigUpdateRequest();
    if (isSet(object.bridgeContract))
      obj.bridgeContract = String(object.bridgeContract);
    if (isSet(object.bridgeChainId))
      obj.bridgeChainId = String(object.bridgeChainId);
    if (isSet(object.multisigId)) obj.multisigId = String(object.multisigId);
    if (isSet(object.nonce)) obj.nonce = String(object.nonce);
    return obj;
  },
  toJSON(
    message: EventMultisigUpdateRequest,
  ): JsonSafe<EventMultisigUpdateRequest> {
    const obj: any = {};
    message.bridgeContract !== undefined &&
      (obj.bridgeContract = message.bridgeContract);
    message.bridgeChainId !== undefined &&
      (obj.bridgeChainId = message.bridgeChainId);
    message.multisigId !== undefined && (obj.multisigId = message.multisigId);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventMultisigUpdateRequest>, I>>(
    object: I,
  ): EventMultisigUpdateRequest {
    const message = createBaseEventMultisigUpdateRequest();
    message.bridgeContract = object.bridgeContract ?? "";
    message.bridgeChainId = object.bridgeChainId ?? "";
    message.multisigId = object.multisigId ?? "";
    message.nonce = object.nonce ?? "";
    return message;
  },
};
function createBaseEventOutgoingLogicCallCanceled(): EventOutgoingLogicCallCanceled {
  return {
    logicCallInvalidationId: "",
    logicCallInvalidationNonce: "",
  };
}
export const EventOutgoingLogicCallCanceled = {
  typeUrl: "/gravity.v1.EventOutgoingLogicCallCanceled",
  encode(
    message: EventOutgoingLogicCallCanceled,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.logicCallInvalidationId !== "") {
      writer.uint32(10).string(message.logicCallInvalidationId);
    }
    if (message.logicCallInvalidationNonce !== "") {
      writer.uint32(18).string(message.logicCallInvalidationNonce);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventOutgoingLogicCallCanceled {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingLogicCallCanceled();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.logicCallInvalidationId = reader.string();
          break;
        case 2:
          message.logicCallInvalidationNonce = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOutgoingLogicCallCanceled {
    const obj = createBaseEventOutgoingLogicCallCanceled();
    if (isSet(object.logicCallInvalidationId))
      obj.logicCallInvalidationId = String(object.logicCallInvalidationId);
    if (isSet(object.logicCallInvalidationNonce))
      obj.logicCallInvalidationNonce = String(
        object.logicCallInvalidationNonce,
      );
    return obj;
  },
  toJSON(
    message: EventOutgoingLogicCallCanceled,
  ): JsonSafe<EventOutgoingLogicCallCanceled> {
    const obj: any = {};
    message.logicCallInvalidationId !== undefined &&
      (obj.logicCallInvalidationId = message.logicCallInvalidationId);
    message.logicCallInvalidationNonce !== undefined &&
      (obj.logicCallInvalidationNonce = message.logicCallInvalidationNonce);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventOutgoingLogicCallCanceled>, I>>(
    object: I,
  ): EventOutgoingLogicCallCanceled {
    const message = createBaseEventOutgoingLogicCallCanceled();
    message.logicCallInvalidationId = object.logicCallInvalidationId ?? "";
    message.logicCallInvalidationNonce =
      object.logicCallInvalidationNonce ?? "";
    return message;
  },
};
function createBaseEventSignatureSlashing(): EventSignatureSlashing {
  return {
    type: "",
    address: "",
  };
}
export const EventSignatureSlashing = {
  typeUrl: "/gravity.v1.EventSignatureSlashing",
  encode(
    message: EventSignatureSlashing,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.type !== "") {
      writer.uint32(10).string(message.type);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventSignatureSlashing {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignatureSlashing();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSignatureSlashing {
    const obj = createBaseEventSignatureSlashing();
    if (isSet(object.type)) obj.type = String(object.type);
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventSignatureSlashing): JsonSafe<EventSignatureSlashing> {
    const obj: any = {};
    message.type !== undefined && (obj.type = message.type);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSignatureSlashing>, I>>(
    object: I,
  ): EventSignatureSlashing {
    const message = createBaseEventSignatureSlashing();
    message.type = object.type ?? "";
    message.address = object.address ?? "";
    return message;
  },
};
function createBaseEventOutgoingTxId(): EventOutgoingTxId {
  return {
    message: "",
    txId: "",
  };
}
export const EventOutgoingTxId = {
  typeUrl: "/gravity.v1.EventOutgoingTxId",
  encode(
    message: EventOutgoingTxId,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.message !== "") {
      writer.uint32(10).string(message.message);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventOutgoingTxId {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventOutgoingTxId();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.message = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventOutgoingTxId {
    const obj = createBaseEventOutgoingTxId();
    if (isSet(object.message)) obj.message = String(object.message);
    if (isSet(object.txId)) obj.txId = String(object.txId);
    return obj;
  },
  toJSON(message: EventOutgoingTxId): JsonSafe<EventOutgoingTxId> {
    const obj: any = {};
    message.message !== undefined && (obj.message = message.message);
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventOutgoingTxId>, I>>(
    object: I,
  ): EventOutgoingTxId {
    const message = createBaseEventOutgoingTxId();
    message.message = object.message ?? "";
    message.txId = object.txId ?? "";
    return message;
  },
};
function createBaseEventSendToEthFeeCollected(): EventSendToEthFeeCollected {
  return {
    sender: "",
    sendAmount: "",
    feeAmount: "",
  };
}
export const EventSendToEthFeeCollected = {
  typeUrl: "/gravity.v1.EventSendToEthFeeCollected",
  encode(
    message: EventSendToEthFeeCollected,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.sendAmount !== "") {
      writer.uint32(18).string(message.sendAmount);
    }
    if (message.feeAmount !== "") {
      writer.uint32(26).string(message.feeAmount);
    }
    return writer;
  },
  decode(
    input: BinaryReader | Uint8Array,
    length?: number,
  ): EventSendToEthFeeCollected {
    const reader =
      input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToEthFeeCollected();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.sendAmount = reader.string();
          break;
        case 3:
          message.feeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventSendToEthFeeCollected {
    const obj = createBaseEventSendToEthFeeCollected();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.sendAmount)) obj.sendAmount = String(object.sendAmount);
    if (isSet(object.feeAmount)) obj.feeAmount = String(object.feeAmount);
    return obj;
  },
  toJSON(
    message: EventSendToEthFeeCollected,
  ): JsonSafe<EventSendToEthFeeCollected> {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.sendAmount !== undefined && (obj.sendAmount = message.sendAmount);
    message.feeAmount !== undefined && (obj.feeAmount = message.feeAmount);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<EventSendToEthFeeCollected>, I>>(
    object: I,
  ): EventSendToEthFeeCollected {
    const message = createBaseEventSendToEthFeeCollected();
    message.sender = object.sender ?? "";
    message.sendAmount = object.sendAmount ?? "";
    message.feeAmount = object.feeAmount ?? "";
    return message;
  },
};
/** Msg defines the state transitions possible within gravity */
export interface Msg {
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  ConfirmLogicCall(
    request: MsgConfirmLogicCall,
  ): Promise<MsgConfirmLogicCallResponse>;
  SendToCosmosClaim(
    request: MsgSendToCosmosClaim,
  ): Promise<MsgSendToCosmosClaimResponse>;
  ExecuteIbcAutoForwards(
    request: MsgExecuteIbcAutoForwards,
  ): Promise<MsgExecuteIbcAutoForwardsResponse>;
  BatchSendToEthClaim(
    request: MsgBatchSendToEthClaim,
  ): Promise<MsgBatchSendToEthClaimResponse>;
  ValsetUpdateClaim(
    request: MsgValsetUpdatedClaim,
  ): Promise<MsgValsetUpdatedClaimResponse>;
  ERC20DeployedClaim(
    request: MsgERC20DeployedClaim,
  ): Promise<MsgERC20DeployedClaimResponse>;
  LogicCallExecutedClaim(
    request: MsgLogicCallExecutedClaim,
  ): Promise<MsgLogicCallExecutedClaimResponse>;
  SetOrchestratorAddress(
    request: MsgSetOrchestratorAddress,
  ): Promise<MsgSetOrchestratorAddressResponse>;
  CancelSendToEth(
    request: MsgCancelSendToEth,
  ): Promise<MsgCancelSendToEthResponse>;
  SubmitBadSignatureEvidence(
    request: MsgSubmitBadSignatureEvidence,
  ): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ValsetConfirm = this.ValsetConfirm.bind(this);
    this.SendToEth = this.SendToEth.bind(this);
    this.RequestBatch = this.RequestBatch.bind(this);
    this.ConfirmBatch = this.ConfirmBatch.bind(this);
    this.ConfirmLogicCall = this.ConfirmLogicCall.bind(this);
    this.SendToCosmosClaim = this.SendToCosmosClaim.bind(this);
    this.ExecuteIbcAutoForwards = this.ExecuteIbcAutoForwards.bind(this);
    this.BatchSendToEthClaim = this.BatchSendToEthClaim.bind(this);
    this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
    this.ERC20DeployedClaim = this.ERC20DeployedClaim.bind(this);
    this.LogicCallExecutedClaim = this.LogicCallExecutedClaim.bind(this);
    this.SetOrchestratorAddress = this.SetOrchestratorAddress.bind(this);
    this.CancelSendToEth = this.CancelSendToEth.bind(this);
    this.SubmitBadSignatureEvidence =
      this.SubmitBadSignatureEvidence.bind(this);
  }
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "ValsetConfirm", data);
    return promise.then((data) =>
      MsgValsetConfirmResponse.decode(new BinaryReader(data)),
    );
  }
  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "SendToEth", data);
    return promise.then((data) =>
      MsgSendToEthResponse.decode(new BinaryReader(data)),
    );
  }
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "RequestBatch", data);
    return promise.then((data) =>
      MsgRequestBatchResponse.decode(new BinaryReader(data)),
    );
  }
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "ConfirmBatch", data);
    return promise.then((data) =>
      MsgConfirmBatchResponse.decode(new BinaryReader(data)),
    );
  }
  ConfirmLogicCall(
    request: MsgConfirmLogicCall,
  ): Promise<MsgConfirmLogicCallResponse> {
    const data = MsgConfirmLogicCall.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ConfirmLogicCall",
      data,
    );
    return promise.then((data) =>
      MsgConfirmLogicCallResponse.decode(new BinaryReader(data)),
    );
  }
  SendToCosmosClaim(
    request: MsgSendToCosmosClaim,
  ): Promise<MsgSendToCosmosClaimResponse> {
    const data = MsgSendToCosmosClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "SendToCosmosClaim",
      data,
    );
    return promise.then((data) =>
      MsgSendToCosmosClaimResponse.decode(new BinaryReader(data)),
    );
  }
  ExecuteIbcAutoForwards(
    request: MsgExecuteIbcAutoForwards,
  ): Promise<MsgExecuteIbcAutoForwardsResponse> {
    const data = MsgExecuteIbcAutoForwards.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ExecuteIbcAutoForwards",
      data,
    );
    return promise.then((data) =>
      MsgExecuteIbcAutoForwardsResponse.decode(new BinaryReader(data)),
    );
  }
  BatchSendToEthClaim(
    request: MsgBatchSendToEthClaim,
  ): Promise<MsgBatchSendToEthClaimResponse> {
    const data = MsgBatchSendToEthClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "BatchSendToEthClaim",
      data,
    );
    return promise.then((data) =>
      MsgBatchSendToEthClaimResponse.decode(new BinaryReader(data)),
    );
  }
  ValsetUpdateClaim(
    request: MsgValsetUpdatedClaim,
  ): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ValsetUpdateClaim",
      data,
    );
    return promise.then((data) =>
      MsgValsetUpdatedClaimResponse.decode(new BinaryReader(data)),
    );
  }
  ERC20DeployedClaim(
    request: MsgERC20DeployedClaim,
  ): Promise<MsgERC20DeployedClaimResponse> {
    const data = MsgERC20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "ERC20DeployedClaim",
      data,
    );
    return promise.then((data) =>
      MsgERC20DeployedClaimResponse.decode(new BinaryReader(data)),
    );
  }
  LogicCallExecutedClaim(
    request: MsgLogicCallExecutedClaim,
  ): Promise<MsgLogicCallExecutedClaimResponse> {
    const data = MsgLogicCallExecutedClaim.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "LogicCallExecutedClaim",
      data,
    );
    return promise.then((data) =>
      MsgLogicCallExecutedClaimResponse.decode(new BinaryReader(data)),
    );
  }
  SetOrchestratorAddress(
    request: MsgSetOrchestratorAddress,
  ): Promise<MsgSetOrchestratorAddressResponse> {
    const data = MsgSetOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "SetOrchestratorAddress",
      data,
    );
    return promise.then((data) =>
      MsgSetOrchestratorAddressResponse.decode(new BinaryReader(data)),
    );
  }
  CancelSendToEth(
    request: MsgCancelSendToEth,
  ): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("gravity.v1.Msg", "CancelSendToEth", data);
    return promise.then((data) =>
      MsgCancelSendToEthResponse.decode(new BinaryReader(data)),
    );
  }
  SubmitBadSignatureEvidence(
    request: MsgSubmitBadSignatureEvidence,
  ): Promise<MsgSubmitBadSignatureEvidenceResponse> {
    const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
    const promise = this.rpc.request(
      "gravity.v1.Msg",
      "SubmitBadSignatureEvidence",
      data,
    );
    return promise.then((data) =>
      MsgSubmitBadSignatureEvidenceResponse.decode(new BinaryReader(data)),
    );
  }
}
