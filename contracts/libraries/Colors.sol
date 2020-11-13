//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/SafeCast.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/SignedSafeMath.sol";

import "./Utils.sol";
import "./FixidityLib.sol";
import "./SVGBuffer.sol";

import "../structs/HSL.sol";

library Colors {
    using SVGBuffer for *;
    using Strings for *;
    using Utils for *;
    using SafeCast for *;
    using SafeMath for *;
    using SignedSafeMath for *;

    function toString(HSL calldata color) external view returns (string memory) {
        return string(abi.encodePacked("hsl(", uint256(color.hue).toString(), ",", uint256(color.saturation).toString(), "%,", uint256(color.lightness).toString(), "%)"));
    }
    
    function lookupHue(
        uint16 base,
        uint8 scheme,
        uint8 index
    ) public pure returns (uint16 hue) {
        uint16[3][8] memory schemes = [
            [uint16(180), uint16(180), uint16(0)], // complimentary
            [uint16(30), uint16(330), uint16(0)], // analogous
            [uint16(150), uint16(210), uint16(0)], // split complimentary
            [uint16(120), uint16(240), uint16(0)], // triadic
            [uint16(150), uint16(180), uint16(210)], // complimentary and analogous
            [uint16(30), uint16(180), uint16(330)], // analogous and complimentary
            [uint16(90), uint16(180), uint16(270)], // square
            [uint16(60), uint16(180), uint16(240)] // tetradic
        ];

        require(scheme < schemes.length, "Invalid scheme id");
        require(index < 4, "Invalid color index");

        if (index == 0) hue = base;
        else hue = uint16(uint256(base).add(schemes[scheme][index-1]));
    }

    function generateHues(
        uint16 base,
        uint8 scheme
    ) public pure returns (uint16[4] memory hues) {
        for (uint8 i = 0; i < 4; i++) hues[i] = lookupHue(base, scheme, i);
    }

    function testSchemes() external pure returns (HSL memory colors) {
        return generateScheme(HSL(30,100,50),0,0)[0];
    }

    function generateScheme(
        HSL memory root,
        uint8 schemeId,
        uint8 shades
    ) public pure returns (HSL[] memory) {
        HSL[] memory scheme = new HSL[](shades * 4);
        uint16[4] memory hues = generateHues(root.hue, schemeId);
        uint8 s = root.saturation;
        uint8 l = root.lightness;

        for (uint256 i = 0; i < 4; i++) {
            uint16 h = hues[i];
            for (uint8 j = 0; j < shades; j++) {
                uint8 offset = uint8(uint256(l).div(shades).mul(j));
                scheme[i * (shades * 2 + 1) + j] = HSL(h, s, uint8(uint256(l).sub(offset)));
            }
        }
        return scheme;
    }

    function lookupColor(
        HSL memory root,
        uint8 scheme,
        uint8 color,
        int8 shade
    ) public pure returns (HSL memory) {
        uint16 h = lookupHue(root.hue, scheme, color);
        uint8 s = root.saturation;
        int8 offset = shade * 5;
        uint8 l = uint8(int8(root.lightness).add(offset));
        return HSL(h, s, l);
    }

    function lookupColor(
        uint16 hue,
        uint8 saturation,
        uint8 lightnessMin,
        uint8 lightnessMax,
        uint8 scheme,
        uint8 color,
        uint8 shade,
        uint8 shades
    ) public pure returns (HSL memory) {
        uint16 h = lookupHue(hue, scheme, color);
        uint8 s = saturation;
        int8 range = lightnessMax.sub(lightnessMin);
        int8 offset = shade.mul(range.div(shades.sub(1)));
        uint8 l = uint8(int8(lightnessMin).add(offset));
        return HSL(h, s, l);
    }
}
