from enum import Enum
from abc import ABC, abstractmethod

class Starter(Enum):
    SALAD = 1
    SOUP = 2
    BRUSCHETTA = 3
    VEGGIE_STICKS = 4
    CHICKEN_WINGS = 5

class Main(Enum):
    GRILLED_CHICKEN = 1
    PASTA = 2
    VEGGIE_STIR_FRY = 3
    FISH = 4
    PIZZA = 5

class Dessert(Enum):
    FRUIT_SALAD = 1
    ICE_CREAM = 2
    CHOCOLATE_CAKE = 3
    VEGAN_PUDDING = 4
    CHEESECAKE = 5

class Drink(Enum):
    WATER = 1
    VEGAN_SHAKE = 2
    SODA = 3
    FRUIT_JUICE = 4

class Meal:
    def __init__(self):
        self._starter = None
        self._main = None
        self._dessert = None
        self._drink = None

    @property
    def starter(self):
        return self._starter

    @property
    def main(self):
        return self._main

    @property
    def dessert(self):
        return self._dessert

    @property
    def drink(self):
        return self._drink

    @starter.setter
    def starter(self, starter):
        self._starter = starter

    @main.setter
    def main(self, main):
        self._main = main

    @dessert.setter
    def dessert(self, dessert):
        self._dessert = dessert

    @drink.setter
    def drink(self, drink):
        self._drink = drink

class Builder(ABC):
    @abstractmethod
    def add_starter(self):
        pass

    @abstractmethod
    def add_main_course(self):
        pass

    @abstractmethod
    def add_dessert(self):
        pass

    @abstractmethod
    def add_drink(self):
        pass

class VeganMealBuilder(Builder):
    def __init__(self):
        self.meal = Meal()

    def add_starter(self):
        self.meal.starter = Starter.SALAD

    def add_main_course(self):
        self.meal.main = Main.VEGGIE_STIR_FRY

    def add_dessert(self):
        self.meal.dessert = Dessert.VEGAN_PUDDING

    def add_drink(self):
        self.meal.drink = Drink.VEGAN_SHAKE

    def build(self):
        return self.meal

class HealthyMealBuilder(Builder):
    def __init__(self):
        self.meal = Meal()

    def add_starter(self):
        self.meal.starter = Starter.SALAD

    def add_main_course(self):
        self.meal.main = Main.GRILLED_CHICKEN

    def add_dessert(self):
        self.meal.dessert = Dessert.FRUIT_SALAD

    def add_drink(self):
        self.meal.drink = Drink.WATER

    def build(self):
        return self.meal

class Director:
    def construct_vegan_meal(self, builder):
        builder.add_starter()
        builder.add_main_course()
        builder.add_dessert()
        builder.add_drink()

    def construct_healthy_meal(self, builder):
        builder.add_starter()
        builder.add_main_course()
        builder.add_dessert()
        builder.add_drink()

def testBuilder():
    director = Director()
    vegan_builder = VeganMealBuilder()
    director.construct_vegan_meal(vegan_builder)

    vegan_meal = vegan_builder.build()
    print("Vegan Meal constructed: ")
    print(f"Starter: {vegan_meal.starter.name}")
    print(f"Main: {vegan_meal.main.name}")
    print(f"Dessert: {vegan_meal.dessert.name}")
    print(f"Drink: {vegan_meal.drink.name}")

    healthy_builder = HealthyMealBuilder()
    director.construct_healthy_meal(healthy_builder)
    healthy_meal = healthy_builder.build()
    print("Healthy Meal constructed: ")
    print(f"Starter: {healthy_meal.starter.name}")
    print(f"Main: {healthy_meal.main.name}")
    print(f"Dessert: {healthy_meal.dessert.name}")
    print(f"Drink: {healthy_meal.drink.name}")

if __name__ == "__main__":
    testBuilder()
