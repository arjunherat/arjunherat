input.onButtonPressed(Button.A, function () {
    voeding += 5
})
input.onButtonPressed(Button.B, function () {
    knuffel += 5
})
let knuffel = 20
let voeding = 20
let dood = 0
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel < 10 && knuffel > 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (voeding < 10 && voeding > 0) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel < 0 && voeding < 0) {
        basic.showIcon(IconNames.Asleep)
        dood += 1
    }
    if (dood == 1) {
        voeding = -900000
        knuffel = -900000
    }
})
loops.everyInterval(200, function () {
    voeding += -1
    knuffel += -1
})
