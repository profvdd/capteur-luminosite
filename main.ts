let lum = 0
basic.forever(function () {
    lum = input.lightLevel()
    led.plotBarGraph(
    lum,
    255
    )
})
