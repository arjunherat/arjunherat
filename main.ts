input.onButtonPressed(Button.A, function () {
    if (dood == 0) {
        voeding += 5
    }
})
input.onButtonPressed(Button.B, function () {
    if (dood == 0) {
        knuffel += 5
    }
})
let dood = 0
let knuffel = 20
let voeding = 20
dood = 0
loops.everyInterval(500, function () {
    voeding += -1
    knuffel += -1
})
basic.forever(function () {
    if (knuffel > 10 && voeding > 10) {
        basic.showIcon(IconNames.Happy)
    }
    if (knuffel < 10 && knuffel > 0 && (voeding < 10 && voeding > 0)) {
        basic.showIcon(IconNames.Sad)
    }
    if (knuffel < 0 && voeding < 0) {
        basic.showIcon(IconNames.Asleep)
        dood += 1
    }
})
