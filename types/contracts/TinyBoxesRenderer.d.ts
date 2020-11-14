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

export class TinyBoxesRenderer extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): TinyBoxesRenderer;
  methods: {
    ANIMATION_FRAMES(): TransactionObject<string>;

    ANIMATION_FRAME_RATE(): TransactionObject<string>;

    ANIMATION_SECONDS(): TransactionObject<string>;

    perpetualRenderer(box: {
      randomness: number | string;
      animation: number | string;
      shapes: number | string;
      colors: number | string;
      hatching: number | string;
      scale: number | string;
      mirrorPositions: (number | string)[];
      size: (number | string)[];
      spacing: (number | string)[];
      mirrors: boolean[];
    }): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
