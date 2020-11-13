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

export class Colors extends Contract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  );
  clone(): Colors;
  methods: {
    generateColors(
      root: {
        hue: number | string;
        saturation: number | string;
        lightness: number | string;
      },
      scheme: number | string,
      shades: number | string
    ): TransactionObject<
      { hue: string; saturation: string; lightness: string }[]
    >;

    lookupColor(
      pal: {
        hue: number | string;
        saturation: number | string;
        lightnessRange: (number | string)[];
        scheme: number | string;
        shades: number | string;
      },
      color: number | string,
      shade: number | string
    ): TransactionObject<{
      hue: string;
      saturation: string;
      lightness: string;
    }>;

    lookupHue(
      base: number | string,
      scheme: number | string,
      index: number | string
    ): TransactionObject<string>;

    toString(color: {
      hue: number | string;
      saturation: number | string;
      lightness: number | string;
    }): TransactionObject<string>;
  };
  events: {
    allEvents: (
      options?: EventOptions,
      cb?: Callback<EventLog>
    ) => EventEmitter;
  };
}
