input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        # # # # #
        # . . . #
        `)
    num1 += 1
    basic.showNumber(num1)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    add = num1 + num2
    basic.showNumber(add)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    num2 += 1
    basic.showNumber(num2)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(add)
    basic.pause(1000)
    basic.showNumber(sub)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        # # # # #
        # . . . #
        `)
    num1 += -1
    basic.showNumber(num1)
})
input.onGesture(Gesture.Shake, function () {
    control.reset()
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    num2 += -1
    basic.showNumber(num2)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
    sub = num1 - num2
    basic.showNumber(sub)
})
let num2 = 0
let num1 = 0
let sub = 0
let add = 0
basic.showLeds(`
    . # . # .
    # # # # #
    . # . # .
    # # # # #
    . # . # .
    `)
let sum = add
sum = sub
