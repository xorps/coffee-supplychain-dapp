// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

struct Farmer {
    address owner;
    string name;
    string information;
    string latitude;
    string longitude;
}

struct Product {
    uint256 id;
    string notes;
    uint256 price;
}

enum ItemState {
    Harvested,
    Processed,
    Packed,
    ForSale,
    Sold,
    Shipped,
    Received,
    Purchased
}

struct Item {
    uint256 upc;
    uint256 sku;
    ItemState itemState;
    Product product;
    Farmer farmer;
}

contract SupplyChain {
    address private owner;
    uint256 private upc;
    uint256 private sku;

    // UPC => Item
    mapping(uint256 => Item) private items;

    // UPC => TxHash[]
    mapping(uint256 => string[]) private itemsHistory;

    event Harvested(uint256 upc);
    event Processed(uint256 upc);
    event Packed(uint256 upc);
    event ForSale(uint256 upc);
    event Sold(uint256 upc);
    event Shipped(uint256 upc);
    event Received(uint256 upc);
    event Purchased(uint256 upc);
    event NewProduct(uint256 id);

    uint256 private productID = 0;
    mapping(uint256 => Product) private products;

    constructor() {
        owner = msg.sender;
        upc = 1;
        sku = 1;
    }

    function newProduct(string calldata notes, uint256 price) public {
        uint256 id = productID++;
        products[id] = Product({id: id, notes: notes, price: price});
        emit NewProduct(id);
    }

    /*

    function harvestItem(
        uint256 upc, 
        address farmer,
        string farmName,
        string farmInfo,
        string farmLatitude,
        string farmLongitude, 
        string productNotes
    ) public {
        require(farmer == msg.sender);
        Item newItem = Item(upc: upc, );
        this.items[upc] = newItem;
        emit Harvested(upc);
    }
    */
}