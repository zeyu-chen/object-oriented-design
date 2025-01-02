class PrinterService {
  private static instance: PrinterService | null = null;
  private mode: string;

  private constructor() {
    this.mode = 'GrayScale';
  }

  public static getInstance(): PrinterService {
    if (!PrinterService.instance) {
      PrinterService.instance = new PrinterService();
    }
    return PrinterService.instance;
  }

  public getPrinterStatus(): string {
    return this.mode;
  }

  public setMode(mode: string): void {
    this.mode = mode;
    console.log(`Mode changed to ${mode}`);
  }
}

function testPrinterService(): void {
  const worker1 = PrinterService.getInstance();
  const worker2 = PrinterService.getInstance();

  worker1.setMode('Color');
  worker2.setMode('Grayscale');

  const worker1Mode = worker1.getPrinterStatus();
  const worker2Mode = worker2.getPrinterStatus();

  console.log(worker1Mode);
  console.log(worker2Mode);
}

testPrinterService();
