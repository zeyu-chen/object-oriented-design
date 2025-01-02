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

## 典型使用场景

- **复杂配置对象构建**

```typescript
const serverConfig = new ServerConfigBuilder()
  .setPort(8080)
  .setHost('localhost')
  .setDatabase({
    host: 'db.example.com',
    port: 5432,
    name: 'mydb',
  })
  .setCache({
    type: 'redis',
    ttl: 3600,
  })
  .build();
```

- **UI 组件构建**

```typescript
const form = new FormBuilder()
  .addTextField('username', { required: true })
  .addPasswordField('password', { minLength: 8 })
  .addEmailField('email', { validate: true })
  .addSubmitButton('登录')
  .build();
```

- **API 请求构建**

```typescript
const request = new RequestBuilder()
  .setMethod('POST')
  .setUrl('/api/users')
  .setHeaders({
    'Content-Type': 'application/json',
  })
  .setBody({ name: 'John' })
  .setTimeout(5000)
  .build();
```

- **文档生成**

```typescript
const document = new PDFBuilder()
  .addHeader('发票')
  .addCustomerInfo(customer)
  .addItemList(items)
  .addTotal(total)
  .addFooter('感谢您的惠顾')
  .build();
```

- **测试数据构建**

```typescript
const testUser = new TestUserBuilder()
  .withBasicInfo({
    name: 'Test User',
    email: 'test@example.com',
  })
  .withPermissions(['read', 'write'])
  .withPreferences({ theme: 'dark' })
  .build();
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

## 优点

- 分离构建过程和表示
- 更好的代码复用
- 更细粒度的控制
- 封装复杂对象的创建
- 产品的不同表示方式

## 缺点

- 需要创建多个类
- 代码量会增加
- 对于简单对象可能过度设计
