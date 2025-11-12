//% color=#00aaff icon="\uf2c9"
namespace DHT11 {
    let data: number[] = []
    let pin: DigitalPin = DigitalPin.P0

    //% block="Start DHT11 on pin %p"
    export function startDHT11(p: DigitalPin) {
        pin = p
        basic.showIcon(IconNames.Happy)
    }

    // 读取 DHT11（内部用）
    function readDHT(): boolean {
        data = []
        // 调用之前写好的 startSignal/checkResponse/readBit 逻辑
        // ...
        // 假设这里已经返回 5 个字节存储在 data[]
        return true
    }

    //% block="Read temperature"
    export function readTemperature(): number {
        if (readDHT()) {
            return data[2] // 温度整数
        }
        return 0
    }

    //% block="Read humidity"
    export function readHumidity(): number {
        if (readDHT()) {
            return data[0] // 湿度整数
        }
        return 0
    }

    //% block="Show H/T on screen"
    export function showTemperatureHumidity() {
        if (readDHT()) {
            basic.showString("H:" + data[0] + " T:" + data[2])
        }
    }
}
