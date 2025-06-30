class Vehicle{
    constructor(name, price, route, color){
        this.name = name;
        this.price = price;
        this.route = route;
        this.color = color;
    }

    status(){
        console.log('gari chole na, chole naa, gari chole na reee')
    }
}

class Bus extends Vehicle{
    

    constructor(name, price, route, signature){
        super(name, price);
        this.route = route;
        this.signature = signature;
    }
}

class Truck extends Vehicle{
    
    constructor(route, color, weight, items){
        super(route, color);
        this.weight = weight;
        this.items = items;
    }
}