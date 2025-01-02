enum Starter {
  SALAD = 'SALAD',
  SOUP = 'SOUP',
  BRUSCHETTA = 'BRUSCHETTA',
  VEGGIE_STICKS = 'VEGGIE_STICKS',
  CHICKEN_WINGS = 'CHICKEN_WINGS',
}

enum Main {
  GRILLED_CHICKEN = 'GRILLED_CHICKEN',
  PASTA = 'PASTA',
  VEGGIE_STIR_FRY = 'VEGGIE_STIR_FRY',
  FISH = 'FISH',
  PIZZA = 'PIZZA',
}

enum Dessert {
  FRUIT_SALAD = 'FRUIT_SALAD',
  ICE_CREAM = 'ICE_CREAM',
  CHOCOLATE_CAKE = 'CHOCOLATE_CAKE',
  VEGAN_PUDDING = 'VEGAN_PUDDING',
  CHEESECAKE = 'CHEESECAKE',
}

enum Drink {
  WATER = 'WATER',
  VEGAN_SHAKE = 'VEGAN_SHAKE',
  SODA = 'SODA',
  FRUIT_JUICE = 'FRUIT_JUICE',
}

class Meal {
  private _starter: Starter | null = null;
  private _main: Main | null = null;
  private _dessert: Dessert | null = null;
  private _drink: Drink | null = null;

  get starter(): Starter | null {
    return this._starter;
  }
  get main(): Main | null {
    return this._main;
  }
  get dessert(): Dessert | null {
    return this._dessert;
  }
  get drink(): Drink | null {
    return this._drink;
  }

  set starter(value: Starter | null) {
    this._starter = value;
  }
  set main(value: Main | null) {
    this._main = value;
  }
  set dessert(value: Dessert | null) {
    this._dessert = value;
  }
  set drink(value: Drink | null) {
    this._drink = value;
  }
}

interface Builder {
  addStarter(): void;
  addMainCourse(): void;
  addDessert(): void;
  addDrink(): void;
  build(): Meal;
}

class VeganMealBuilder implements Builder {
  private meal: Meal = new Meal();

  addStarter(): void {
    this.meal.starter = Starter.SALAD;
  }

  addMainCourse(): void {
    this.meal.main = Main.VEGGIE_STIR_FRY;
  }

  addDessert(): void {
    this.meal.dessert = Dessert.VEGAN_PUDDING;
  }

  addDrink(): void {
    this.meal.drink = Drink.VEGAN_SHAKE;
  }

  build(): Meal {
    return this.meal;
  }
}

class HealthyMealBuilder implements Builder {
  private meal: Meal = new Meal();

  addStarter(): void {
    this.meal.starter = Starter.SALAD;
  }

  addMainCourse(): void {
    this.meal.main = Main.GRILLED_CHICKEN;
  }

  addDessert(): void {
    this.meal.dessert = Dessert.FRUIT_SALAD;
  }

  addDrink(): void {
    this.meal.drink = Drink.WATER;
  }

  build(): Meal {
    return this.meal;
  }
}

class Director {
  constructVeganMeal(builder: Builder): void {
    builder.addStarter();
    builder.addMainCourse();
    builder.addDessert();
    builder.addDrink();
  }

  constructHealthyMeal(builder: Builder): void {
    builder.addStarter();
    builder.addMainCourse();
    builder.addDessert();
    builder.addDrink();
  }
}

function testBuilder(): void {
  const director = new Director();

  // Build vegan meal
  const veganBuilder = new VeganMealBuilder();
  director.constructVeganMeal(veganBuilder);
  const veganMeal = veganBuilder.build();

  console.log('Vegan Meal constructed:');
  console.log(`Starter: ${veganMeal.starter}`);
  console.log(`Main: ${veganMeal.main}`);
  console.log(`Dessert: ${veganMeal.dessert}`);
  console.log(`Drink: ${veganMeal.drink}`);

  // Build healthy meal
  const healthyBuilder = new HealthyMealBuilder();
  director.constructHealthyMeal(healthyBuilder);
  const healthyMeal = healthyBuilder.build();

  console.log('\nHealthy Meal constructed:');
  console.log(`Starter: ${healthyMeal.starter}`);
  console.log(`Main: ${healthyMeal.main}`);
  console.log(`Dessert: ${healthyMeal.dessert}`);
  console.log(`Drink: ${healthyMeal.drink}`);
}

testBuilder();
