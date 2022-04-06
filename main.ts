TCS34725.start()
TCS34725.LernFarbe(Wasserfarben.Schwarz)
TCS34725.LernFarbe(Wasserfarben.Orange)
TCS34725.LernFarbe(Wasserfarben.Gelb)
TCS34725.LernFarbe(Wasserfarben.Magenta)
TCS34725.LernFarbe(Wasserfarben.Blaugr)
TCS34725.LernFarbe(Wasserfarben.Ultramarin)
basic.forever(function () {
    if (TCS34725.Wasserfarbe(Wasserfarben.Schwarz)) {
        basic.setLedColor(0x000000)
    } else if (TCS34725.Wasserfarbe(Wasserfarben.Orange)) {
        basic.setLedColor(0xff8000)
    } else if (TCS34725.Wasserfarbe(Wasserfarben.Gelb)) {
        basic.setLedColor(0xffff00)
    } else if (TCS34725.Wasserfarbe(Wasserfarben.Magenta)) {
        basic.setLedColor(0xff0000)
    } else if (TCS34725.Wasserfarbe(Wasserfarben.Blaugr)) {
        basic.setLedColor(0x00ff00)
    } else if (TCS34725.Wasserfarbe(Wasserfarben.Ultramarin)) {
        basic.setLedColor(0x0000ff)
    }
})
