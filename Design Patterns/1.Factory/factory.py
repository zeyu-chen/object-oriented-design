from enum import Enum
from abc import ABC, abstractmethod

class Burgers(Enum):
    CHEESE = "CHEESE"
    DELUXECHEESE = "DELUXECHEESE"
    VEGAN = "VEGAN"
    DELUXEVEGAN = "DELUXEVEGAN"

class BurgerFactory:
    def create_burger(self, burger_type: Burgers) -> "Burger":
        match burger_type:
            case Burgers.CHEESE:
                return CheeseBurger()
            case Burgers.DELUXECHEESE:
                return DeluxeCheeseBurger()
            case Burgers.VEGAN:
                return VeganBurger()
            case Burgers.DELUXEVEGAN:
                return DeluxeVeganBurger()
            case _:
                return None

    def order_burger(self, burger_type: Burgers) -> "Burger":
        burger = self.create_burger(burger_type)
        burger.prepare()
        burger.cook()
        burger.serve()
        return burger

class Burger(ABC):
    def __init__(self):
        self.name = ""
        self.bread = ""
        self.sauce = ""
        self.toppings = []
    
    @abstractmethod
    def prepare(self):
        pass

    @abstractmethod
    def cook(self):
        pass

    @abstractmethod
    def serve(self):
        pass

    def get_name(self):
        return self.name

class CheeseBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = "Cheese Burger"
        self.bread = "Regular Bun"
        self.sauce = "Special Sauce"
        self.toppings = ["Cheese", "Lettuce", "Tomato"]

    def prepare(self):
        print(f"Preparing {self.name}")
        print(f"Adding {self.bread}")
        print(f"Adding {self.sauce}")
        print("Adding toppings:")
        for topping in self.toppings:
            print(f"- {topping}")

    def cook(self):
        print("Cooking the beef patty for 5 minutes")

    def serve(self):
        print(f"Serving hot {self.name}!")

class DeluxeCheeseBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = "Deluxe Cheese Burger"
        self.bread = "Brioche Bun"
        self.sauce = "Special Sauce"
        self.toppings = ["Double Cheese", "Bacon", "Lettuce", "Tomato", "Onion"]

    def prepare(self):
        print(f"Preparing {self.name}")
        print(f"Adding {self.bread}")
        print(f"Adding {self.sauce}")
        print("Adding toppings:")
        for topping in self.toppings:
            print(f"- {topping}")

    def cook(self):
        print("Cooking the beef patty for 7 minutes")

    def serve(self):
        print(f"Serving hot {self.name}!")

class VeganBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = "Vegan Burger"
        self.bread = "Whole Wheat Bun"
        self.sauce = "Vegan Mayo"
        self.toppings = ["Plant-based Patty", "Lettuce", "Tomato"]

    def prepare(self):
        print(f"Preparing {self.name}")
        print(f"Adding {self.bread}")
        print(f"Adding {self.sauce}")
        print("Adding toppings:")
        for topping in self.toppings:
            print(f"- {topping}")

    def cook(self):
        print("Cooking the plant-based patty for 4 minutes")

    def serve(self):
        print(f"Serving hot {self.name}!")

class DeluxeVeganBurger(Burger):
    def __init__(self):
        super().__init__()
        self.name = "Deluxe Vegan Burger"
        self.bread = "Artisan Whole Grain Bun"
        self.sauce = "Special Vegan Sauce"
        self.toppings = ["Premium Plant-based Patty", "Vegan Cheese", "Avocado", "Lettuce", "Tomato", "Grilled Onions"]

    def prepare(self):
        print(f"Preparing {self.name}")
        print(f"Adding {self.bread}")
        print(f"Adding {self.sauce}")
        print("Adding toppings:")
        for topping in self.toppings:
            print(f"- {topping}")

    def cook(self):
        print("Cooking the premium plant-based patty for 5 minutes")

    def serve(self):
        print(f"Serving hot {self.name}!")

def testBurgerFactory():
    # Create factories
    burger_factory = BurgerFactory()
    
    print("=== Ordering Cheese Burgers ===")
    # Order regular cheese burger
    cheese_burger = burger_factory.order_burger(Burgers.CHEESE)
    print("\n")
    # Order deluxe cheese burger
    deluxe_cheese = burger_factory.order_burger(Burgers.DELUXECHEESE)
    
    print("\n=== Ordering Vegan Burgers ===")
    # Order regular vegan burger
    vegan_burger = burger_factory.order_burger(Burgers.VEGAN)
    print("\n")
    # Order deluxe vegan burger
    deluxe_vegan = burger_factory.order_burger(Burgers.DELUXEVEGAN)

if __name__ == "__main__":
    testBurgerFactory()

