import threading
from typing import Optional

class PrinterService:
    _instance_lock = threading.Lock()
    _unique_instance: Optional['PrinterService'] = None

    def __new__(cls) -> 'PrinterService':
        if cls._unique_instance is None:
            with cls._instance_lock:
                if cls._unique_instance is None:  # 双重检查锁定
                    cls._unique_instance = super().__new__(cls)
                    cls._unique_instance._init_printer_service()
        return cls._unique_instance

    def __init__(self):
        # 防止 __init__ 被多次调用
        pass

    def _init_printer_service(self) -> None:
        self.mode = "GrayScale"

    def get_printer_status(self) -> str:
        return self.mode

    def set_mode(self, mode: str) -> None:
        self.mode = mode
        print(f"Mode changed to {mode}")

def main():
    worker1 = PrinterService()
    worker2 = PrinterService()

    worker1.set_mode("Color")
    worker2.set_mode("Grayscale")

    worker1_mode = worker1.get_printer_status()
    worker2_mode = worker2.get_printer_status()

    print(worker1_mode)
    print(worker2_mode)

if __name__ == "__main__":
    main()
