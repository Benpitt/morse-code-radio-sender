input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
    dot()
})
function dash () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    radio.sendNumber(5)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
function dot () {
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    radio.sendString("a")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
}
input.onButtonPressed(Button.AB, function () {
    SOS()
    radio.sendValue("sos", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("a")
    dash()
})
function SOS () {
    for (let index = 0; index < 9999; index++) {
        dot()
        dot()
        dot()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        dash()
        dash()
        dash()
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        dot()
        dot()
        dot()
    }
}
radio.setGroup(160)
basic.forever(function () {
	
})
