enum Burgers {
  CHEESE = 'CHEESE',
  DELUXECHEESE = 'DELUXECHEESE',
  VEGAN = 'VEGAN',
  DELUXEVEGAN = 'DELUXEVEGAN',
}

abstract class Burger {
  protected name: string = '';
  protected bread: string = '';
  protected sauce: string = '';
  protected toppings: string[] = [];

  abstract prepare(): void;
  abstract cook(): void;
  abstract serve(): void;

  getName(): string {
    return this.name;
  }
}

class CheeseBurger extends Burger {
  constructor() {
    super();
    this.name = 'Cheese Burger';
    this.bread = 'Regular Bun';
    this.sauce = 'Special Sauce';
    this.toppings = ['Cheese', 'Lettuce', 'Tomato'];
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Adding ${this.bread}`);
    console.log(`Adding ${this.sauce}`);
    console.log('Adding toppings:');
    this.toppings.forEach((topping) => console.log(`- ${topping}`));
  }

  cook(): void {
    console.log('Cooking the beef patty for 5 minutes');
  }

  serve(): void {
    console.log(`Serving hot ${this.name}!`);
  }
}

class DeluxeCheeseBurger extends Burger {
  constructor() {
    super();
    this.name = 'Deluxe Cheese Burger';
    this.bread = 'Brioche Bun';
    this.sauce = 'Special Sauce';
    this.toppings = ['Double Cheese', 'Bacon', 'Lettuce', 'Tomato', 'Onion'];
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Adding ${this.bread}`);
    console.log(`Adding ${this.sauce}`);
    console.log('Adding toppings:');
    this.toppings.forEach((topping) => console.log(`- ${topping}`));
  }

  cook(): void {
    console.log('Cooking the beef patty for 7 minutes');
  }

  serve(): void {
    console.log(`Serving hot ${this.name}!`);
  }
}

class VeganBurger extends Burger {
  constructor() {
    super();
    this.name = 'Vegan Burger';
    this.bread = 'Whole Wheat Bun';
    this.sauce = 'Vegan Mayo';
    this.toppings = ['Plant-based Patty', 'Lettuce', 'Tomato'];
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Adding ${this.bread}`);
    console.log(`Adding ${this.sauce}`);
    console.log('Adding toppings:');
    this.toppings.forEach((topping) => console.log(`- ${topping}`));
  }

  cook(): void {
    console.log('Cooking the plant-based patty for 4 minutes');
  }

  serve(): void {
    console.log(`Serving hot ${this.name}!`);
  }
}

class DeluxeVeganBurger extends Burger {
  constructor() {
    super();
    this.name = 'Deluxe Vegan Burger';
    this.bread = 'Artisan Whole Grain Bun';
    this.sauce = 'Special Vegan Sauce';
    this.toppings = [
      'Premium Plant-based Patty',
      'Vegan Cheese',
      'Avocado',
      'Lettuce',
      'Tomato',
      'Grilled Onions',
    ];
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
    console.log(`Adding ${this.bread}`);
    console.log(`Adding ${this.sauce}`);
    console.log('Adding toppings:');
    this.toppings.forEach((topping) => console.log(`- ${topping}`));
  }

  cook(): void {
    console.log('Cooking the premium plant-based patty for 5 minutes');
  }

  serve(): void {
    console.log(`Serving hot ${this.name}!`);
  }
}

class BurgerFactory {
  createBurger(burgerType: Burgers): Burger | null {
    switch (burgerType) {
      case Burgers.CHEESE:
        return new CheeseBurger();
      case Burgers.DELUXECHEESE:
        return new DeluxeCheeseBurger();
      case Burgers.VEGAN:
        return new VeganBurger();
      case Burgers.DELUXEVEGAN:
        return new DeluxeVeganBurger();
      default:
        return null;
    }
  }

  orderBurger(burgerType: Burgers): Burger | null {
    const burger = this.createBurger(burgerType);
    if (!burger) return null;

    burger.prepare();
    burger.cook();
    burger.serve();
    return burger;
  }
}

function main() {
  const burgerFactory = new BurgerFactory();

  console.log('=== Ordering Cheese Burgers ===');
  burgerFactory.orderBurger(Burgers.CHEESE);
  console.log('\n');
  burgerFactory.orderBurger(Burgers.DELUXECHEESE);

  console.log('\n=== Ordering Vegan Burgers ===');
  burgerFactory.orderBurger(Burgers.VEGAN);
  console.log('\n');
  burgerFactory.orderBurger(Burgers.DELUXEVEGAN);
}

main();
