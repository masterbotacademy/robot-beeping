let angle = 0
input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . #
        # # # # #
        . # # # .
        `)
    for (let index = 0; index < 20; index++) {
        angle = randint(0, 180)
        pins.servoWritePin(AnalogPin.P1, angle)
        pins.servoWritePin(AnalogPin.P2, angle)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        music.ringTone(randint(200, 700))
        basic.pause(randint(100, 300))
        basic.clearScreen()
    }
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(500)
})
