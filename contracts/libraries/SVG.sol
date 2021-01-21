//SPDX-License-Identifier: Unlicensed

pragma solidity ^0.6.4;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "../structs/Decimal.sol";
import "../structs/Shape.sol";

import "./Utils.sol";
import "./Decimal.sol";
import "./Colors.sol";

library SVG {
    using SafeMath for uint256;
    using DecimalUtils for *;
    using Utils for *;
    using Colors for *;
    using Strings for *;

    /**
     * @dev render a rectangle SVG tag with nested content
     * @param shape object
     * @param slot for nested tags (animations)
     */
    function _rect(Shape memory shape, string memory slot) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<rect x="',
            shape.position[0].toString(),
            '" y="',
            shape.position[1].toString(),
            '" width="',
            shape.size[0].toString(),
            '" height="',
            shape.size[1].toString(),
            '" transform-origin="300 300" style="fill:',
            shape.color.toString(),
            bytes(slot).length == 0 ?
                '"/>' :
                string(abi.encodePacked('">',slot,'</rect>'))
        ));
    }
    
    /**
     * @dev render a rectangle SVG tag
     * @param shape object
     */
    function _rect(Shape memory shape) internal pure returns (string memory) {
        return _rect(shape, '');
    }

    /**
     * @dev render an g(group) SVG tag with a transform and attributes
     * @param transformValues string, with SVG transform function
     * @param slot for nested group content
     */
    function _g(string memory transformValues, string memory slot) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<g', 
            bytes(transformValues).length == 0 ? '' : string(abi.encodePacked(' transform="', transformValues, '"')),
            '>',
            slot,
            '</g>'
        ));
    }

    // /**
    //  * @dev render an g(group) SVG tag with a transform and attributes
    //  * @param transformValues string, with SVG transform function
    //  * @param slot for nested group content
    //  */
    // function _g(string memory transformValues, string memory attr, string memory slot) internal pure returns (string memory) {
    //     return _g(
    //         bytes(transformValues).length == 0 ? '' : string(abi.encodePacked(' transform="', transformValues, '"')),
    //         attr,
    //         slot
    //     );
    // }

    // /**
    //  * @dev render an g(group) SVG tag with attributes
    //  * @param attr string for attributes
    //  * @param slot for nested group content
    //  */
    // function _g(string memory attr, string memory slot) internal pure returns (string memory) {
    //     return string(abi.encodePacked(
    //         '<g', 
    //         bytes(attr).length == 0 ? '' : string(abi.encodePacked(' ',attr,' ')),
    //         '>',
    //         slot,
    //         '</g>'
    //     ));
    // }

    /**
     * @dev render a plain g(group) SVG tag
     * @param slot for nested group content
     */
    function _g(string memory slot) internal pure returns (string memory) {
        return _g('', slot);
    }

    // /**
    //  * @dev render a use SVG tag
    //  * @param link id of the SVG tag to reference
    //  */
    // function _use(string memory link) internal pure returns (string memory) {
    //     return _use('', link);
    // }

    // /**
    //  * @dev render a use SVG tag
    //  * @param id of the new SVG use tag
    //  * @param link id of the SVG tag to reference
    //  */
    // function _use(string memory link, string memory id) internal pure returns (string memory) {
    //     return string(abi.encodePacked(
    //         '<use ',
    //         bytes(id).length == 0 ? '' : string(abi.encodePacked(' id="',id,'" ')),
    //         'xlink:href="#',link,'"/>'
    //     ));
    // }

    /**
     * @dev render a use SVG tag
     * @param link id of the SVG tag to reference
     */
    function _use(string memory link) internal pure returns (string memory) {
        return string(abi.encodePacked(
            '<use xlink:href="#',link,'"/>'
        ));
    }
    
    /**
     * @dev render the outer SVG markup. XML version, doctype and SVG tag
     * @param body of the SVG markup
     * @return header string
     */
    function _SVG(string memory bkgColor, string memory body) internal pure returns (string memory) {
        string memory xmlVersion = '<?xml version="1.0" encoding="UTF-8"?>';
        string memory doctype = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
        string memory openingSVGTag = string(abi.encodePacked('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 2400 2400" style="stroke-width:0;', bkgColor, 'margin: auto;height: -webkit-fill-available">'));

        return string(abi.encodePacked(xmlVersion, doctype, openingSVGTag, body, '</svg>'));
    }
}
