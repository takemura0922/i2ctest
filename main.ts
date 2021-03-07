serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
serial.redirectToUSB()
basic.forever(function () {
    pins.i2cWriteNumber(
    0,
    pins.i2cReadNumber(0, NumberFormat.Int8LE, false),
    NumberFormat.Int8LE,
    false
    )
})
basic.forever(function () {
    pins.i2cWriteNumber(
    0,
    0,
    NumberFormat.Int8LE,
    true
    )
    pins.i2cWriteNumber(
    0,
    0,
    NumberFormat.Int8LE,
    false
    )
})
basic.forever(function () {
    serial.writeValue("x", 55)
    basic.pause(100)
    serial.writeValue("asdfghytre", 0)
    basic.pause(500)
    serial.writeValue("asdfghytre", input.lightLevel())
    basic.pause(500)
    serial.writeValue("asdfghytre", 20)
    basic.pause(500)
})
