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

event Harvested(uint256 upc);
event Processed(uint256 upc);
event Packed(uint256 upc);
event ForSale(uint256 upc);
event Sold(uint256 upc);
event Shipped(uint256 upc);
event Received(uint256 upc);
event Purchased(uint256 upc);
event NewProduct();

contract SupplyChain {
    address private owner;
    uint256 private upc;
    uint256 private sku;

    // UPC => Item
    mapping(uint256 => Item) private items;

    // UPC => TxHash[]
    mapping(uint256 => string[]) private itemsHistory;

    constructor() {
        this.owner = msg.sender;
        this.upc = 1;
        this.sku = 1;
    }

    function newProduct(string notes, uint256 price) public {
        Product p = Product({id: 0, notes: notes, price: price});
        this.products[p.id] = p;
        emit NewProduct();
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