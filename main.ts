input.onButtonPressed(Button.A, function () {
    dot()
    radio.sendNumber(5)
})
function dash () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
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
    basic.pause(100)
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
