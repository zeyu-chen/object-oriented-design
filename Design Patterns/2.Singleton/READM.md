# Singleton Pattern

## 核心思想

- 确保一个类只有一个实例
- 提供一个全局访问点来访问这个实例
- 控制共享资源的访问

## 三要素

- 私有静态实例
- 私有构造函数
- 公共静态访问方法

## 核心代码

```typescript
class PrinterService {
  // 1. 私有静态实例
  private static instance: PrinterService | null = null;

  // 2. 私有构造函数
  private constructor() {}

  // 3. 公共静态访问方法
  public static getInstance(): PrinterService {
    if (!PrinterService.instance) {
      PrinterService.instance = new PrinterService();
    }
    return PrinterService.instance;
  }
}
```

## 实现特点

- 延迟初始化（懒加载）
- 线程安全（在多线程环境）
- 防止重复创建

## 使用场景

- 数据库连接池
- 配置管理器
- 日志记录器
- 线程池管理
- 缓存管理

## 缺点

- 可能违反单一职责原则
- 在并发环境需要特别注意
- 可能隐藏类之间的依赖关系
