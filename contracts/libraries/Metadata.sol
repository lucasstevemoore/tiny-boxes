//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.6.4;

import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/math/SignedSafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "../structs/Decimal.sol";
import "../structs/Shape.sol";
import "../structs/TinyBox.sol";
import "../structs/HSL.sol";

import "./Random.sol";
import "./Utils.sol";
import "./Decimal.sol";
import "./Colors.sol";
import "../structs/Decimal.sol";

library Metadata {
    using Math for uint256;
    using SafeMath for uint256;
    using SignedSafeMath for int256;
    using Random for bytes32[];
    using DecimalUtils for *;
    using Utils for *;
    using Colors for *;
    using Strings for *;

    function toString(address account) public pure returns(string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes memory data) public pure returns(string memory) {
        bytes memory alphabet = "0123456789ABCDEF";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint i = 0; i < data.length; i++) {
            str[2+i*2] = alphabet[uint(uint8(data[i] >> 4))];
            str[3+i*2] = alphabet[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }

    /**
     * @dev render the header of the SVG markup
     * @return header string
     */
    function _generateColorMetadata(TinyBox memory box, uint8 schemeId, uint8 shadesCount, uint8 contrastAmt) internal pure returns (string memory) {
        string memory scheme = string(abi.encodePacked('<scheme>', uint256(schemeId).toString(), '</scheme>'));
        string memory rootHue = string(abi.encodePacked('<hue>', uint256(box.hue).toString(), '</hue>'));
        string memory saturation = string(abi.encodePacked('<saturation>', uint256(box.saturation).toString(), '</saturation>'));
        string memory lightness = string(abi.encodePacked('<lightness>', uint256(box.lightness).toString(), '</lightness>'));
        string memory contrast = string(abi.encodePacked('<contrast>', uint256(contrastAmt).toString(), '</contrast>'));
        string memory shades = string(abi.encodePacked('<shades>', uint256(shadesCount).toString(), '</shades>'));

        return string(abi.encodePacked(
            '<color>',
            scheme, rootHue, saturation, lightness, contrast, shades, 
            '</color>'
        ));
    }
    
    /**
     * @dev render the header of the SVG markup
     * @return header string
     */
    function _generateShapesMetadata(TinyBox memory box) internal pure returns (string memory) {
        string memory size = string(abi.encodePacked(
            '<width>', uint256(box.widthMin).toString(), '-', uint256(box.widthMax).toString(), '</width>',
            '<height>', uint256(box.heightMin).toString(), '-', uint256(box.heightMax).toString(), '</height>'
        ));
        return string(abi.encodePacked(
            '<shapes>',
                '<count>', uint256(box.shapes).toString(), '</count>',
                '<hatching>', uint256(box.hatching).toString(), '</hatching>',
                '<size>', size, '</size>',
            '</shapes>'
        ));
    }
    
    /**
     * @dev render the header of the SVG markup
     * @return header string
     */
    function _generatePlacementMetadata(TinyBox memory box) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<placement>',
                '<rows>', uint256(box.grid % 16).toString(), '</rows>',
                '<columns>', uint256(box.grid / 16).toString(), '</columns>',
                '<spread>', uint256(box.spread).toString(), '</spread>',
            '</placement>'
        ));
    }
    
    /**
     * @dev render the header of the SVG markup
     * @return header string
     */
    function _generateMirrorMetadata(uint8[4] memory dVals) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<mirror>',
                '<mirror-mode>',
                    uint256(dVals[3]).toString(),
                '</mirror-mode>',
            '</mirror>'
        ));
    }

    /**
     * @dev render the header of the SVG markup
     * @return header string
     */
    function _generateMetadata(TinyBox memory box, uint8[4] memory dVals, uint256 id, address owner) internal view returns (string memory) {
        string memory colors = _generateColorMetadata(box, dVals[1], dVals[2], dVals[3]);
        string memory shapes = _generateShapesMetadata(box);
        string memory placement = _generatePlacementMetadata(box);
        string memory mirror = _generateMirrorMetadata(dVals);

        string memory animation = string(abi.encodePacked(
            '<animation>',
                '<animated>',
                    (box.options % 2 == 1) ? 'true' : 'false',
                '</animated>',
                '<id>',
                    uint256(dVals[0]).toString(),
                '</id>',
            '</animation>'
        ));

        string memory token = id >= 0 ? string(abi.encodePacked(
            '<token>',
                '<id>',
                    id.toString(),
                '</id>',
                '<owner>',
                    toString(owner),
                '</owner>',
            '</token>'
        )) : '';

        string memory contractAddress = string(abi.encodePacked(
            '<contract>',
                toString(address(this)),
            '</contract>'
        ));

        string memory renderedAt = string(abi.encodePacked('<rendered-at>',now.toString(),'</rendered-at>')); // TODO: add timestamp here

        return string(abi.encodePacked('<metadata>', contractAddress, renderedAt, token, animation, colors, shapes, placement, mirror, '</metadata>'));
    }
}
