# Adapter Pattern

## 核心思想

- 将一个类的接口转换成客户端期望的另一个接口
- 使原本由于接口不兼容而不能一起工作的类可以一起工作
- 不修改原有代码的情况下使其适配新的接口

## 典型使用场景

- **第三方库集成**

```typescript
// 原第三方支付接口
interface ThirdPartyPayment {
  processPayment(amount: number): void;
}

// 我们的支付接口
interface PaymentGateway {
  pay(amount: number, currency: string): Promise<void>;
}

// 适配器
class PaymentAdapter implements PaymentGateway {
  constructor(private thirdPartyPayment: ThirdPartyPayment) {}

  async pay(amount: number, currency: string) {
    this.thirdPartyPayment.processPayment(amount);
  }
}
```

- **数据格式转换**

```typescript
// 外部 XML 数据
interface XMLData {
  parseXML(): string;
}

// 系统使用 JSON
interface JSONData {
  parseJSON(): object;
}

// XML 到 JSON 适配器
class XMLToJSONAdapter implements JSONData {
  constructor(private xmlData: XMLData) {}

  parseJSON(): object {
    const xmlString = this.xmlData.parseXML();
    return convertXMLToJSON(xmlString);
  }
}
```

- **旧系统兼容**

```typescript
// 旧的认证系统
interface LegacyAuth {
  checkCredentials(username: string, password: string): boolean;
}

// 新的认证接口
interface ModernAuth {
  authenticate(credentials: {
    username: string;
    password: string;
  }): Promise<boolean>;
}

// 认证适配器
class AuthAdapter implements ModernAuth {
  constructor(private legacyAuth: LegacyAuth) {}

  async authenticate(credentials: { username: string; password: string }) {
    return this.legacyAuth.checkCredentials(
      credentials.username,
      credentials.password
    );
  }
}
```

- **不同平台 API 适配**

```typescript
// 不同社交平台的分享功能适配
interface SocialShare {
  share(content: string): void;
}

class FacebookAdapter implements SocialShare {
  share(content: string) {
    // 适配 Facebook 的分享 API
  }
}

class TwitterAdapter implements SocialShare {
  share(content: string) {
    // 适配 Twitter 的分享 API
  }
}
```

- **硬件接口适配**

```typescript
// 不同打印机接口适配
interface ModernPrinter {
  print(document: Document): void;
}

class LegacyPrinterAdapter implements ModernPrinter {
  constructor(private oldPrinter: LegacyPrinter) {}

  print(document: Document) {
    const oldFormat = this.convertToOldFormat(document);
    this.oldPrinter.printOld(oldFormat);
  }
}
```

## 主要应用场景

1. 需要使用现有类，但其接口不符合需求
2. 需要创建可重用的类，该类可以与不兼容接口的其他类协同工作
3. 需要统一多个类的接口
4. 需要对第三方库进行封装
5. 需要适配遗留系统

## 优点

1. 提高代码复用性
2. 增加代码透明度
3. 提供类之间的解耦
4. 符合单一职责原则
5. 遵循开闭原则

## 缺点

1. 可能会增加系统复杂度
2. 可能需要编写额外的代码
3. 适配器模式可能会使系统变得凌乱
