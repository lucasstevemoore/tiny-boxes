/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import BN from "bn.js";
import { Contract, ContractOptions } from "web3-eth-contract";
import { EventLog } from "web3-core";
import { EventEmitter } from "events";
import { ContractEvent, Callback, TransactionObject, BlockType } from "./types";

interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export class TinyBoxesBase extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxesBase;
  methods: {
    ADMIN_ROLE(): TransactionObject<string>;

    ANIMATION_COUNT(): TransactionObject<string>;

    ANIMATOR_ROLE(): TransactionObject<string>;

    ARTIST_PRINTS(): TransactionObject<string>;

    ARTIST_ROLE(): TransactionObject<string>;

    BETA_SALE(): TransactionObject<string>;

    DEFAULT_ADMIN_ROLE(): TransactionObject<string>;

    TOKEN_LIMIT(): TransactionObject<string>;

    TREASURER_ROLE(): TransactionObject<string>;

    approve(to: string, tokenId: number | string): TransactionObject<void>;

    balanceOf(owner: string): TransactionObject<string>;

    baseURI(): TransactionObject<string>;

    getApproved(tokenId: number | string): TransactionObject<string>;

    getRoleAdmin(role: string | number[]): TransactionObject<string>;

    getRoleMember(
      role: string | number[],
      index: number | string
    ): TransactionObject<string>;

    getRoleMemberCount(role: string | number[]): TransactionObject<string>;

    grantRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    hasRole(
      role: string | number[],
      account: string
    ): TransactionObject<boolean>;

    isApprovedForAll(
      owner: string,
      operator: string
    ): TransactionObject<boolean>;

    name(): TransactionObject<string>;

    ownerOf(tokenId: number | string): TransactionObject<string>;

    renounceRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    revokeRole(
      role: string | number[],
      account: string
    ): TransactionObject<void>;

    safeTransferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;

    setApprovalForAll(
      operator: string,
      approved: boolean
    ): TransactionObject<void>;

    supportsInterface(
      interfaceId: string | number[]
    ): TransactionObject<boolean>;

    symbol(): TransactionObject<string>;

    tokenByIndex(index: number | string): TransactionObject<string>;

    tokenData(
      _id: number | string
    ): TransactionObject<{
      randomness: string;
      animation: string;
      colors: string;
      shapes: string;
      hatching: string;
      size: string[];
      spacing: string[];
      mirrorPositions: string[];
      mirrors: boolean[];
      scale: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string[];
      6: string[];
      7: string[];
      8: boolean[];
      9: string;
    }>;

    tokenOfOwnerByIndex(
      owner: string,
      index: number | string
    ): TransactionObject<string>;

    tokenURI(tokenId: number | string): TransactionObject<string>;

    totalSupply(): TransactionObject<string>;

    transferFrom(
      from: string,
      to: string,
      tokenId: number | string
    ): TransactionObject<void>;
  };
  events: {
    Approval: ContractEvent<{
      owner: string;
      approved: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    ApprovalForAll: ContractEvent<{
      owner: string;
      operator: string;
      approved: boolean;
      0: string;
      1: string;
      2: boolean;
    }>;
    RoleAdminChanged: ContractEvent<{
      role: string;
      previousAdminRole: string;
      newAdminRole: string;
      0: string;
      1: string;
      2: string;
    }>;
    RoleGranted: ContractEvent<{
      role: string;
      account: string;
      sender: string;
      0: string;
      1: string;
      2: string;
    }>;
    RoleRevoked: ContractEvent<{
      role: string;
      account: string;
      sender: string;
      0: string;
      1: string;
      2: string;
    }>;
    Transfer: ContractEvent<{
      from: string;
      to: string;
      tokenId: string;
      0: string;
      1: string;
      2: string;
    }>;
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
