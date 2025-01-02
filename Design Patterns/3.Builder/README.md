# Builder Pattern

## 核心思想

- 将复杂对象的构建过程与其表示分离
- 同样的构建过程可以创建不同的表示
- 分步骤构建复杂对象

## 核心组件

- 产品（Product）：被构建的复杂对象
- 抽象建造者（Builder）：定义构建步骤的接口
- 具体建造者（Concrete Builder）：实现构建步骤
- 指挥者（Director）：控制构建过程

## 核心代码

```typescript
// 1. 产品
class Meal {
  private starter: Starter | null = null;
  private main: Main | null = null;
  private dessert: Dessert | null = null;
  private drink: Drink | null = null;
  // ... getters and setters
}

// 2. 抽象建造者
interface Builder {
  addStarter(): void;
  addMainCourse(): void;
  addDessert(): void;
  addDrink(): void;
  build(): Meal;
}

// 3. 具体建造者
class VeganMealBuilder implements Builder {
  private meal: Meal = new Meal();

  addStarter(): void {
    this.meal.starter = Starter.SALAD;
  }
  // ... other implementations
  build(): Meal {
    return this.meal;
  }
}

// 4. 指挥者
class Director {
  constructVeganMeal(builder: Builder): void {
    builder.addStarter();
    builder.addMainCourse();
    builder.addDessert();
    builder.addDrink();
  }
}
```

## 实现方式

1. **基本实现**

   - 定义产品类
   - 创建建造者接口
   - 实现具体建造者
   - 使用指挥者控制过程

2. **链式调用**
   - 每个设置方法返回 this
   - 允许连续调用方法
   - 提高代码可读性

## 使用场景

- 需要创建复杂对象
- 对象有多个可选配置
- 需要分步构建对象
- 需要细粒度控制构建过程
- 构建过程需要提供不同表示

## 缺点

- 需要创建多个类
- 代码量会增加
- 对于简单对象可能过度设计
