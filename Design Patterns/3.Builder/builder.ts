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
  addStarter(): this;
  addMainCourse(): this;
  addDessert(): this;
  addDrink(): this;
  build(): Meal;
}

class VeganMealBuilder implements Builder {
  private meal: Meal = new Meal();

  addStarter(): this {
    this.meal.starter = Starter.SALAD;
    return this;
  }

  addMainCourse(): this {
    this.meal.main = Main.VEGGIE_STIR_FRY;
    return this;
  }

  addDessert(): this {
    this.meal.dessert = Dessert.VEGAN_PUDDING;
    return this;
  }

  addDrink(): this {
    this.meal.drink = Drink.VEGAN_SHAKE;
    return this;
  }

  build(): Meal {
    if (!this.meal.starter || !this.meal.main) {
      throw new Error('Meal is incomplete');
    }
    return this.meal;
  }
}

class HealthyMealBuilder implements Builder {
  private meal: Meal = new Meal();

  addStarter(): this {
    this.meal.starter = Starter.SALAD;
    return this;
  }

  addMainCourse(): this {
    this.meal.main = Main.GRILLED_CHICKEN;
    return this;
  }

  addDessert(): this {
    this.meal.dessert = Dessert.FRUIT_SALAD;
    return this;
  }

  addDrink(): this {
    this.meal.drink = Drink.WATER;
    return this;
  }

  build(): Meal {
    return this.meal;
  }
}

class Director {
  constructVeganMeal(builder: Builder): Meal {
    return builder.addStarter().addMainCourse().addDessert().addDrink().build();
  }

  constructHealthyMeal(builder: Builder): Meal {
    return builder.addStarter().addMainCourse().addDessert().addDrink().build();
  }

  constructCustomMeal(
    builder: Builder,
    options: {
      withStarter?: boolean;
      withDessert?: boolean;
      withDrink?: boolean;
    }
  ): Meal {
    let meal = builder.addMainCourse();

    if (options.withStarter) meal = meal.addStarter();
    if (options.withDessert) meal = meal.addDessert();
    if (options.withDrink) meal = meal.addDrink();

    return meal.build();
  }
}

function testBuilder(): void {
  const director = new Director();

  const veganMeal = director.constructVeganMeal(new VeganMealBuilder());
  const healthyMeal = director.constructHealthyMeal(new HealthyMealBuilder());

  const customMeal = director.constructCustomMeal(new VeganMealBuilder(), {
    withStarter: true,
    withDrink: true,
  });

  console.log('Meals constructed:', { veganMeal, healthyMeal, customMeal });
}

testBuilder();
