//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.6.4;

import './HSL.sol';

struct TinyBox {
    HSL color;
    uint8 contrast;
    uint8 shapes;
    uint8 hatching;
    uint8[4] size;
    uint8[2] spacing;
    uint8 mirroring;
    uint8 scheme;
    uint8 shades;
    uint8 animation;
}
