# Factory Pattern

## 核心思想

- 将对象的创建与使用分离
- 使用工厂方法代替直接的对象创建
- 让子类决定要创建的对象类型

## 三要素

- 抽象产品（定义产品接口）
- 具体产品（实现产品接口）
- 工厂类（创建具体产品）

## 核心代码

```typescript
// 1. 抽象产品
abstract class Burger {
  abstract prepare(): void;
  abstract cook(): void;
  abstract serve(): void;
}

// 2. 具体产品
class CheeseBurger extends Burger {
  prepare() {
    /* ... */
  }
  cook() {
    /* ... */
  }
  serve() {
    /* ... */
  }
}

// 3. 工厂类
abstract class BurgerFactory {
  abstract createBurger(): Burger; // 工厂方法

  orderBurger(): Burger {
    // 模板方法
    const burger = this.createBurger();
    burger.prepare();
    burger.cook();
    burger.serve();
    return burger;
  }
}
```

## 实现方式

1. **简单工厂**

   - 一个工厂类处理所有产品创建
   - 使用条件语句选择产品
   - 违反开闭原则

2. **工厂方法**
   - 为每种产品提供一个工厂子类
   - 将创建决策委托给子类
   - 符合开闭原则

## 使用场景

- 不知道使用者需要创建哪种具体类的对象
- 系统需要灵活扩展产品类型
- 需要解耦对象的创建和使用
- 产品有相同的接口但不同的实现

## 缺点

- 需要创建多个工厂类，可能导致类的数量增加
- 增加了系统的复杂度
- 需要额外的抽象层
