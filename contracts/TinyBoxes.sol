//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.6.8;
pragma experimental ABIEncoderV2;

import "./TinyBoxesStore.sol";
import "./TinyBoxesRenderer.sol";

contract TinyBoxes is TinyBoxesStore {
    using TinyBoxesRenderer for TinyBox;

    string public contractURI = "https://rinkeby.tinybox.shop/TinyBoxes.json";

    /**
     * @dev Contract constructor.
     * @notice Constructor inherits from TinyBoxesStore
     */
    constructor(address rand)
        public
        TinyBoxesStore(rand)
    {}

    /**
     * @dev Set the tokens URI
     * @param _id of a token to update
     * @param _uri for the token
     * @dev Only the animator role can call this
     */
    function setTokenURI(uint256 _id, string calldata _uri)
        external
        onlyRole(ANIMATOR_ROLE)
    {
        _setTokenURI(_id, _uri);
    }

    /**
     * @dev Update the base URI field
     * @param _uri base for all tokens 
     * @dev Only the admin role can call this
     */
    function setBaseURI(string calldata _uri)
        external
        onlyRole(ADMIN_ROLE)
    {
        _setBaseURI(_uri);
    }

    /**
     * @dev Update the contract URI field
     * @dev Only the admin role can call this
     */
    function setContractURI(string calldata _uri)
        external
        onlyRole(ADMIN_ROLE)
    {
        contractURI = _uri;
    }

    /**
     * @dev Generate the token SVG art preview for given parameters
     * @param seed for renderer RNG
     * @param shapes count and hatching mod
     * @param color settings (hue, sat, light, contrast, shades)
     * @param size for shapes
     * @param spacing grid and spread
     * @param traits mirroring, scheme, shades, animation
     * @param settings adjustable render options - bkg, duration, options
     * @param slot string to enter at end of SVG markup
     * @return preview SVG art
     */
    function tokenPreview(
        string calldata seed,
        uint16[3] calldata color,
        uint8[2] calldata shapes,
        uint8[4] calldata size,
        uint8[2] calldata spacing,
        uint8 mirroring,
        uint8[3] calldata settings,
        uint8[4] calldata traits,
        string calldata slot
    ) external view returns (string memory) {
        require(settings[0] <= 101, "BKG % Invalid");
        validateParams(shapes[0], shapes[1], color, size, spacing, true);
        TinyBox memory box = TinyBox({
            randomness: uint128(seed.stringToUint()),
            hue: color[0],
            saturation: uint8(color[1]),
            lightness: uint8(color[2]),
            shapes: shapes[0],
            hatching: shapes[1],
            widthMin: size[0],
            widthMax: size[1],
            heightMin: size[2],
            heightMax: size[3],
            spread: spacing[0],
            mirroring: mirroring,
            grid: spacing[1],
            bkg: settings[0],
            duration: settings[1],
            options: settings[2]
        });
        return box.perpetualRenderer(0, address(0), traits, slot);
    }

    /**
     * @dev Generate the token SVG art with specific options
     * @param _id for which we want art
     * @param bkg for the token
     * @param duration animation duration modifier
     * @param options bits - 0th is the animate switch to turn on or off animation
     * @param slot string for embeding custom additions
     * @return animated SVG art of token _id at _frame.
     */
    function tokenArt(uint256 _id, uint8 bkg, uint8 duration, uint8 options, string calldata slot)
        external
        view
        returns (string memory)
    {
        TinyBox memory box = boxes[_id];
        box.bkg = bkg;
        box.options = options;
        box.duration = duration;
        return box.perpetualRenderer(_id, ownerOf(_id), calcedParts(box, _id), slot);
    }

    /**
     * @dev Generate the token SVG art
     * @param _id for which we want art
     * @return animated SVG art of token _id at _frame.
     */
    function tokenArt(uint256 _id)
        external
        view
        returns (string memory)
    {
        TinyBox memory box = boxes[_id];
        return box.perpetualRenderer(_id, ownerOf(_id), calcedParts(box, _id), "");
    }
}
