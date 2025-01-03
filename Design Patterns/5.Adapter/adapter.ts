interface JsonLogger {
  logMessage(message: string): void;
}

class XmlLogger {
  log(xmlMessage: string): void {
    console.log(xmlMessage);
  }
}

class LoggerAdapter implements JsonLogger {
  constructor(private xmlLogger: XmlLogger) {}

  logMessage(message: string): void {
    this.xmlLogger.log(message);
  }
}

function testAdapter(): void {
  const logger = new LoggerAdapter(new XmlLogger());
  logger.logMessage('<message>hello</message>');
}

testAdapter();
