from enum import Enum
from abc import ABC, abstractmethod

class Starter(Enum):
    SALAD = "SALAD"
    SOUP = "SOUP"
    BRUSCHETTA = "BRUSCHETTA"
    VEGGIE_STICKS = "VEGGIE_STICKS"
    CHICKEN_WINGS = "CHICKEN_WINGS"

class Main(Enum):
    GRILLED_CHICKEN = "GRILLED_CHICKEN"
    PASTA = "PASTA"
    VEGGIE_STIR_FRY = "VEGGIE_STIR_FRY"
    FISH = "FISH"
    PIZZA = "PIZZA"

class Dessert(Enum):
    FRUIT_SALAD = "FRUIT_SALAD"
    ICE_CREAM = "ICE_CREAM"
    CHOCOLATE_CAKE = "CHOCOLATE_CAKE"
    VEGAN_PUDDING = "VEGAN_PUDDING"
    CHEESECAKE = "CHEESECAKE"

class Drink(Enum):
    WATER = "WATER"
    VEGAN_SHAKE = "VEGAN_SHAKE"
    SODA = "SODA"
    FRUIT_JUICE = "FRUIT_JUICE"

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

    @abstractmethod
    def build(self):
        pass

class VeganMealBuilder(Builder):
    def __init__(self):
        self.meal = Meal()

    def add_starter(self):
        self.meal.starter = Starter.SALAD
        return self

    def add_main_course(self):
        self.meal.main = Main.VEGGIE_STIR_FRY
        return self

    def add_dessert(self):
        self.meal.dessert = Dessert.VEGAN_PUDDING
        return self

    def add_drink(self):
        self.meal.drink = Drink.VEGAN_SHAKE
        return self

    def build(self):
        if not self.meal.starter or not self.meal.main:
            raise ValueError("Meal is incomplete")
        return self.meal

class HealthyMealBuilder(Builder):
    def __init__(self):
        self.meal = Meal()

    def add_starter(self):
        self.meal.starter = Starter.SALAD
        return self

    def add_main_course(self):
        self.meal.main = Main.GRILLED_CHICKEN
        return self

    def add_dessert(self):
        self.meal.dessert = Dessert.FRUIT_SALAD
        return self

    def add_drink(self):
        self.meal.drink = Drink.WATER
        return self

    def build(self):
        return self.meal

class Director:
    def construct_vegan_meal(self, builder: Builder) -> Meal:
        return (builder
                .add_starter()
                .add_main_course()
                .add_dessert()
                .add_drink()
                .build())

    def construct_healthy_meal(self, builder: Builder) -> Meal:
        return (builder
                .add_starter()
                .add_main_course()
                .add_dessert()
                .add_drink()
                .build())

    def construct_custom_meal(self, builder: Builder, *, with_starter=False, 
                            with_dessert=False, with_drink=False) -> Meal:
        meal = builder.add_main_course()
        
        if with_starter: meal = meal.add_starter()
        if with_dessert: meal = meal.add_dessert()
        if with_drink: meal = meal.add_drink()
        
        return meal.build()

def test_builder():
    director = Director()
    
    # 构建素食餐
    vegan_meal = director.construct_vegan_meal(VeganMealBuilder())
    print("\nVegan Meal constructed:")
    print("Starter:", vegan_meal.starter.value)
    print("Main:", vegan_meal.main.value)
    print("Dessert:", vegan_meal.dessert.value)
    print("Drink:", vegan_meal.drink.value)
    
    # 构建健康餐
    healthy_meal = director.construct_healthy_meal(HealthyMealBuilder())
    print("\nHealthy Meal constructed:")
    print("Starter:", healthy_meal.starter.value)
    print("Main:", healthy_meal.main.value)
    print("Dessert:", healthy_meal.dessert.value)
    print("Drink:", healthy_meal.drink.value)
    
    # 构建自定义餐
    custom_meal = director.construct_custom_meal(
        VeganMealBuilder(),
        with_starter=True,
        with_drink=True
    )
    print("\nCustom Meal constructed:")
    print("Starter:", custom_meal.starter.value if custom_meal.starter else "None")
    print("Main:", custom_meal.main.value)
    print("Dessert:", custom_meal.dessert.value if custom_meal.dessert else "None")
    print("Drink:", custom_meal.drink.value if custom_meal.drink else "None")

if __name__ == "__main__":
    test_builder()
