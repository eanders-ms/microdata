namespace microcode {
    let extraImage: Bitmap = null

    //% shim=TD_NOOP
    function extraSamples(name: string) {
        if (name == "clap_lights") extraImage = icondb.sampleClapLights
        if (name == "firefly") extraImage = icondb.sampleFirefly
        if (name == "flashing_heart") extraImage = icondb.sampleFlashingHeart
        // if (name == "dice") extraImage = icondb.sampleDice  // nice icon, don't delete, but not currently used
        if (name == "rock_paper_scissors")
            extraImage = icondb.sampleRockPaperScissors
        if (name == "teleport_duck") extraImage = icondb.sampleTeleportDuck
        if (name == "pet_hamster") extraImage = icondb.samplePetHamster
        if (name == "heads_tails") extraImage = icondb.sampleHeadsOrTails
        if (name == "reaction_time") extraImage = icondb.sampleReactionTime
        if (name == "hot_potato") extraImage = icondb.sampleHotPotato
        if (name == "clap_lights") extraImage = icondb.sampleClapLights
        if (name == "railroad_crossing")
            extraImage = icondb.sampleRailCrossingLight
    }

    export class icons {
        public static get(name: string, nullIfMissing = false): Bitmap {
            // editor icons
            if (name == "delete") return icondb.btn_delete
            if (name == "plus") return icondb.btn_plus
            if (name == "arith_plus") return icondb.arith_plus
            if (name == "arith_equals") return icondb.arith_equals
            if (name == "when_insertion_point")
                return icondb.btn_when_insertion_point
            if (name == "do_insertion_point")
                return icondb.btn_do_insertion_point
            if (name == "rule_arrow") return icondb.rule_arrow
            if (name == "rule_handle") return icondb.rule_handle
            if (name == "edit_program") return icondb.largeEditIcon
            if (name == "new_program") return icondb.largeNewProgramIcon
            if (name == "MISSING") return icondb.MISSING
            if (name == "disk") return icondb.disk
            if (name == "disk1") return icondb.disk1
            if (name == "disk2") return icondb.disk2
            if (name == "disk3") return icondb.disk3
            if (name == "largeDisk") return icondb.largeDiskIcon


            // basic colors led editor
            if (name == "solid_red") return icondb.solid_red
            if (name == "solid_black") return icondb.solid_black
            if (name == "note_on") return icondb.note_on
            if (name == "note_off") return icondb.note_off

            // sample icons
            if (name == "smiley_buttons") return icondb.sampleSmileyButtons

            // Newly added icons for MicroData Home menu:
            if (name == "linear_graph_1") return icondb.linearGraph1
            if (name == "linear_graph_2") return icondb.linearGraph2
            

            if (name == "led_light_sensor") return icondb.led_light_sensor
            if (name == "thermometer") return icondb.thermometer
            if (name == "accelerometer") return icondb.accelerometer
            if (name == "moveTiltUp") return icondb.moveTiltUp
            if (name == "moveTiltLeft") return icondb.moveTiltLeft
            if (name == "moveTiltRight") return icondb.moveTiltRight
            if (name == "moveTiltDown") return icondb.moveTiltDown
            if (name == "finger_press") return icondb.finger_press
            if (name == "green_tick") return icondb.green_tick

            if (name == "magnet") return icondb.magnet
            if (name == "pin_0") return icondb.pin_0
            if (name == "pin_1") return icondb.pin_1
            if (name == "pin_2") return icondb.pin_2

            if (name == "right_turn") return icondb.car_right_turn
            if (name == "right_spin") return icondb.car_right_spin

            if (name == "speaker") return icondb.speaker

            if (name == "tile_button_a") return icondb.tile_button_a
            if (name == "tile_button_b") return icondb.tile_button_b
            if (name == "compass") return icondb.compass

            if (name == "settingsGear") return icondb.settingsGear
            if (name == "largeSettingsGear") return icondb.largeSettingsGear
            // if (name == "compass") return icondb.compass

            extraImage = null
            extraSamples(name) // only for web app
            if (extraImage) return extraImage
            if (nullIfMissing) return null
            return icondb.MISSING
        }
    }

    export const wordLogo = bmp` 
    ....111111.......111111...1111................................................11111111111.........................1111.................................
    ...11bbbbbb.....11bbbbbb.11bbbb...............................................1bbbbbbbbbbff......................11bbbb................................
    ...1bbbbbbbb...11bbbbbbbf1bbbbbf..............................................1bbbbbbbbbbbff.....................1bbbbbf...............................
    ...1bbbbbbbbb.11bbbbbbbbf1bbbbbf..............................................1bbbbbbbbbbbbbf....................1bbbbbf...............................
    ...1bbbbbbbbbb1bbbbbbbbbf1bbbbbf..............................................1bbbbf..bbbbbbf....................1bbbbbf...............................
    ...1bbbbbbbbbbbbbbbbbbbbf.bbbbff..............................................1bbbb....bbbbbbf...................1bbbbbf...............................
    ...1bbbbbbbbbbbbbbbbbbbbf..ffff.....1111111......1111...111.......1111111.....1bbbb.....1bbbbf....11111111.......1bbbbbb11111111....11111111...........
    ...1bbbbbbbbbbbbbbbbbbbbf.1111....111bbbbbbb1...11bbbb.11bbb....111bbbbbbb1...1bbbb.....1bbbbf...1bbbbbbbbbf.....1bbbbbbbbbbbbbbf..1bbbbbbbbbf.........
    ...1bbbbbbbbbbbbbbbbbbbbf11bbbb..11bbbbbbbbbbb..1bbbbbb1bbbbb..11bbbbbbbbbbb..1bbbb.....1bbbbf..1bbbbbbbbbbbbf...1bbbbbbbbbbbbbbf.1bbbbbbbbbbbbf.......
    ...1bbbbbbfbbbbbfbbbbbbbf1bbbbbf.1bbbbbbbbbbbbf.1bbbbbbbbbbbbf.1bbbbbbbbbbbbf.1bbbb.....1bbbbf.1bbbbbbbbbbbbbf...1bbbbbbbbbbbbbf.1bbbbbbbbbbbbbf.......
    ...1bbbbbbf.bbbff1bbbbbbf1bbbbbf11bbbbbbbbbbbbb.1bbbbbbbbbbbbf11bbbbbbbbbbbbb.1bbbb.....1bbbbf.1bbbbbbbbbbbbbf...1bbbbbbf........1bbbbbbbbbbbbbbf......
    ...1bbbbbbf..fff.1bbbbbbf1bbbbbf1bbbbbfffbbbbbbf1bbbbbfffbbbff1bbbbbfffbbbbbbfbbbbb.....1bbbbf.1bbbbffffbbbbbf...1bbbbbbf........1bbbbffffbbbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf1bbbbff...bbbbff1bbbbbf...fff.1bbbbff...bbbbbfbbbbb.....1bbbbf.1bbbff...1bbbbf...1bbbbbbf........1bbbbf...1bbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf1bbbbf.....ffff.1bbbbbf.......1bbbbf....1bbbbfbbbbb.....1bbbbf.1bbbbf...1bbbbf...1bbbbbbf........1bbbbf...1bbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf1bbbbf....1111..1bbbbbf.......1bbbbf....1bbbbfbbbbb.....1bbbbf.1bbbbf...1bbbbf...1bbbbbbf........1bbbbf...1bbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf1bbbbb...11bbbb.1bbbbbf.......1bbbbb...11bbbbfbbbbb....bbbbbbf.1bbbbb...1bbbbf...1bbbbbbf........1bbbbb...1bbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf1bbbbbb111bbbbbf1bbbbbf.......1bbbbbb111bbbbbfbbbbb...bbbbbbbf.1bbbbb111bbbbbf...1bbbbbbf........1bbbbbb111bbbbbf......
    ...1bbbbbbf......1bbbbbbf1bbbbbf.bbbbbbbbbbbbbff1bbbbbf........bbbbbbbbbbbbbffbbbbbbbbbbbbbbf..bbbbbbbbbbbbb1111.bbbbbbbb11111111bbbbbbbbbbbbbbb1111...
    ...1bbbbbbf......1bbbbbbf1bbbbbf.1bbbbbbbbbbbbf.1bbbbbf........1bbbbbbbbbbbbf.bbbbbbbbbbbbbbf..bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbbf..
    ...1bbbbbbf......1bbbbbbf1bbbbbf..bbbbbbbbbbbff.1bbbbbf.........bbbbbbbbbbbff.bbbbbbbbbbbbbff..bbbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbfbbbbbbbbbbbbbbbbbbff..
    ....bbbbbff.......bbbbbff.bbbbff...fbbbbbbbfff...bbbbff..........fbbbbbbbfff..bbbbbbbbbbbff.....fbbbbbbbbbbbbbbbf.fbbbbbbbbbbbbbf.fbbbbbbbbbbbbbbbbff..
    .....fffff.........fffff...ffff......fffffff......ffff.............fffffff....fffffffffff.........ffffffffffffff....ffffffffffff....ffffffffffffffff...
    `

    export const microbitLogo = bmp`
        ............................
        ......5555555555555555......
        ....55555555555555555555....
        ...5554444444444444444555...
        ..5554.................555..
        ..554...................554.
        .554....55........55.....554
        .55....5555......5555....554
        .55....55554.....55554...554
        .55.....5544......5544...554
        ..55.....44........44...5544
        ..555..................5554.
        ...555................55544.
        ....5555555555555555555544..
        .....45555555555555555444...
        .......4444444444444444.....
    `

    export const editorBackground = bmp`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888188888881888888888881888888888888888888888888888888888888888888888888888888888885888888888888888888881888888888888888888818888888888888188
    8818888888881888888888888888818188888888888888888818888888881888888888818888888888881888888888588888888888888888888888888888888888888858888888888888888888888888
    8888888888888888888888888888881888888888888888888181888888888888888888888888888888888888888888888881888881888888888188888888888888888888888888888888888888888888
    8888588888888818888888888888888888888888888888888818888888888888888888888888888888888888888888888888888888888888881818888888888881888888818888888888818888888888
    8888888888888888888858888888888888188888888888888888888888888888818888888888888188888888888888888888888888888888888188888888888888888888888888888888888888888888
    8888888888888888188888888888888888888881888885888888888888888888888888885888888888888888881888888588888888888888888888888888888888888888888888888588888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886888688868886
    8686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686868686
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
    `
}

namespace icondb {
    const note4x3 = bmp`
    . f f .
    f c c .
    f c c .
`

    // - upscale 5x5 image to 16 x 16, add halo
    export function renderMicrobitLEDs(led55: Bitmap) {
        const ret = bitmap.create(16, 16)
        ret.fill(15)
        for (let row = 0; row < 5; row++) {
            for (let col = 0; col < 5; col++) {
                const on = led55.getPixel(row, col)
                if (!on) continue

                const color = 0x2
                const halo = 0xe
                const nrow = 1 + row * 3,
                    ncol = 1 + col * 3
                ret.setPixel(nrow, ncol, color)
                ret.setPixel(nrow + 1, ncol, color)
                ret.setPixel(nrow, ncol + 1, color)
                ret.setPixel(nrow + 1, ncol + 1, color)
                // halo
                /*
                ret.setPixel(nrow - 1, ncol, halo)
                ret.setPixel(nrow - 1, ncol + 1, halo)
                ret.setPixel(nrow + 2, ncol, halo)
                ret.setPixel(nrow + 2, ncol + 1, halo)
                ret.setPixel(nrow, ncol - 1, halo)
                ret.setPixel(nrow + 1, ncol - 1, halo)
                ret.setPixel(nrow, ncol + 2, halo)
                ret.setPixel(nrow + 1, ncol + 2, halo)
                */
            }
        }
        return ret
    }

    /*
    export const iconEditor = renderMicrobitLEDs(
        bmp`
        . . . . .
        . 1 . 1 .
        . . . . . 
        1 . . . 1
        . 1 1 1 .
        `
    )
    */
    export const iconEditor = bmp`
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f e e f f f f e e f f f f 
    f f f e 2 2 e f f e 2 2 e f f f 
    f f f e 2 2 e f f e 2 2 e f f f 
    f f f f e e f f f f e e f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f e e f f f f f f f f f f e e f 
    e 2 2 e f f f f f f f f e 2 2 e 
    e 2 2 e f f f f f f f f e 2 2 e 
    f e e f e e f e e f e e f e e f 
    f f f e 2 2 e 2 2 e 2 2 e f f f 
    f f f e 2 2 e 2 2 e 2 2 e f f f 
    f f f f e e f e e f e e f f f f 
    `
    function renderImg(i: Bitmap) {
        let r = ""
        for (let y = 0; y < i.height; ++y) {
            let line = ""
            for (let x = 0; x < i.width; ++x)
                line += "0123456789abcdef"[i.getPixel(x, y)] + " "
            r += line + "\n"
        }
        console.log(`\nimg\`\n${r}\``)
    }

    /*
    export const melodyEditor = melodyToImage({
        notes: "0240",
        tempo: 0,
    })
    */
    export const melodyEditor = bmp`
    1111111111111111
    111111111ff11111
    11111111fcc11111
    11111111fcc11111
    1111111111111111
    1111111111111111
    1111111111111111
    11111ff111111111
    1111fcc111111111
    1111fcc111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1ff1111111111ff1
    fcc111111111fcc1
    fcc111111111fcc1    
    `

    export const disk = bmp`
    . . . . . . . . . . . . . . . .
    . . 8 d d d d 8 8 d d 8 . . . .
    . . 8 d d d d 8 8 d d 8 8 . . .
    . . 8 d d d d 8 8 d d 8 8 8 . .
    . . 8 d d d d d d d d 8 8 8 . .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 . .
    . . 8 8 3 3 3 3 3 3 3 3 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const disk1 = bmp`
    . . . . . . . . . . . . . . . .
    . . 8 d d d d 8 8 d d 8 . . . .
    . . 8 d d d d 8 8 d d 8 8 . . .
    . . 8 d d d d 8 8 d d 8 8 8 . .
    . . 8 d d d d d d d d 8 8 8 . .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 d .
    . . 8 8 3 3 3 3 3 3 3 3 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 f 1 1 1 8 8 d .
    . . 8 8 1 1 1 f f 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 f 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 f 1 1 1 8 8 d .
    . . 8 8 1 1 1 f f f 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const disk2 = bmp`
    . . . . . . . . . . . . . . . .
    . . 8 d d d d 8 8 d d 8 . . . .
    . . 8 d d d d 8 8 d d 8 8 . . .
    . . 8 d d d d 8 8 d d 8 8 8 . .
    . . 8 d d d d d d d d 8 8 8 . .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 d .
    . . 8 8 3 3 3 3 3 3 3 3 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 f f 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 f 1 1 8 8 d .
    . . 8 8 1 1 1 1 f 1 1 1 8 8 d .
    . . 8 8 1 1 1 f 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 f f f 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const disk3 = bmp`
    . . . . . . . . . . . . . . . .
    . . 8 d d d d 8 8 d d 8 . . . .
    . . 8 d d d d 8 8 d d 8 8 . . .
    . . 8 d d d d 8 8 d d 8 8 8 . .
    . . 8 d d d d d d d d 8 8 8 . .
    . . 8 8 8 8 8 8 8 8 8 8 8 8 d .
    . . 8 8 3 3 3 3 3 3 3 3 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 d .
    . . 8 8 1 1 1 f f 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 f 1 1 8 8 d .
    . . 8 8 1 1 1 1 f f 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 f 1 1 8 8 d .
    . . 8 8 1 1 1 f f 1 1 1 8 8 d .
    . . 8 8 1 1 1 1 1 1 1 1 8 8 . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const largeDiskIcon = bmp`
    .666666666666666666666666666666.
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666bbbbbbbbbbbbbbbbbbbb6666666
    6666bb8cdddddddddddd888c8b666666
    6666b88cdddddddc88dd888c88b66666
    6666b88cddddddd888dd888c888b6666
    6666b88cddddddd888dd888c888b6666
    6666b88cddddddd888dd888c888b6666
    6666b88cddddddd888dd888c888b6666
    6666b88cdddddddddddd888c888b6666
    6666b88ccccccccccccccccc888b6666
    6666b8888888888888888888888b6666
    6666b8888888888888888888888b6666
    6666b8833333333333333333888b6666
    6666b8833333333333333333888b6666
    6666b8811111111111111111888b6666
    6666b8811111111111111111888b6666
    6666b8811ccccc1111111111888b6666
    6666b8811111111111111111888b6666
    6666b8811ccc111111111111888b6666
    6666b8811111111111111111888b6666
    6666b8811ccccccc11111111888b6666
    6666b8811111111111111111888b6666
    6666b8811111111111111111888b6666
    6666b88111111111111111118f8b6666
    6666b88111111111111111118f8b6666
    6666bb811111111111111111888b6666
    66666bbbbbbbbbbbbbbbbbbbbbbb6666
    66666666666666666666666666666666
    66666666666666666666666666666666
    b666666666666666666666666666666b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

export const largeMetaDataIcon = bmp`
    .666666666666666666666666666666.
    66666666666666666666666666666666
    66666666666666666666666666666666
    6666bbbbbbbbbbbbbbbbbbbbbb666666
    666bb811111111111111111118b66666
    666b88111111111111111111188b6666
    666b881111111111111111111888b666
    666b881111111111111111111888b666
    666b881111111111111111111888b666
    666b881111111111111111111888b666
    666b881111111111111111111888b666
    666b881111111111111111111888b666
    6666b88ccccc111111111cccccc88b66
    6666bcccccddb111111cbbccccc88b66
    6666bccccdbbbbbbbbbbcccc8888b666
    6666b8cccccddbcccbdcccc88888b666
    6666b888dbbcc11111cbddd88888b666
    6666bddbbbcc111111cccbbb8888b666
    66ddddbbb11111111111bbbcccc8b666
    66ddddbbb11111111111bbbcccc8b666
    6666bddbbbcc111111ccbbbc8888b666
    6666b888cbbcc11111cbbcc88888b666
    666b888ccccddbcccbdcccc88888b666
    666b88cccdbbbbbbbbbbcccc8888b666
    666bcccccddb1111111cbbccccc8b666
    666b8ccccc1111111111ccccc888b666
    666b8811111111111111111118f8b666
    666bb81111111111111111111888b666
    6666bbbbbbbbbbbbbbbbbbbbbbbbb666
    66666666666666666666666666666666
    66666666666666666666666666666666
    b666666666666666666666666666666b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

    export const MISSING = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . . 2 2 . . . . . . 2 2 . . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 . . 2 . . 2 . . 2 . . .
        . . . 2 . . . 2 2 . . . 2 . . .
        . . . 2 . . . 2 2 . . . 2 . . .
        . . . 2 . . 2 . . 2 . . 2 . . .
        . . . 2 . 2 . . . . 2 . 2 . . .
        . . . 2 2 . . . . . . 2 2 . . .
        . . . 2 2 2 2 2 2 2 2 2 2 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const solid_red = bmp`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 2 2 . . .
    . . 2 2 4 4 4 4 4 4 4 4 2 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 4 4 4 4 4 4 4 4 4 4 2 . .
    . . 2 2 4 4 4 4 4 4 4 4 2 2 . .
    . . . 2 2 2 2 2 2 2 2 2 2 . . .
    . . . . . . . . . . . . . . . .
`

    export const solid_black = bmp`
    . . . . . . . . . . . . . . . .
    . . . c c c c c c c c c c . . .
    . . c c f f f f f f f f c c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c f f f f f f f f f f c . .
    . . c c f f f f f f f f c c . .
    . . . c c c c c c c c c c . . .
    . . . . . . . . . . . . . . . .
`

    export const arm_open = bmp`
    . . . . . . . . . . c c c . . .
    . . . . . . . . c c b b b c c .
    . . . . . . . c b b b b b b b c
    . . . . . . c b b b b c c b b c
    c c . . c b b b b c c . . c b c
    b b c c b b b b c . . . . . c .
    b b b b b b c c . . . . . . . .
    c f f b b c . . . . . . . . . .
    c f f b b c . . . . . . . . . .
    b b b b b b c c . . . . . . . .
    b b c c b b b b c . . . . . c .
    c c . . c b b b b c c . . c b c
    . . . . . c c b b b b c c b b c
    . . . . . . . c b b b b b b b c
    . . . . . . . . c c b b b c c .
    . . . . . . . . . . c c c . . .
    `

    export const arm_close = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . c c c c c c c c c . .
    . . . . . c b b b b b b b b c .
    . . . . c b b b b b b b b b b c
    c c d d b b c c c c c c c c b c
    b b b b b b c . . . . . . . c .
    c f f b b c . . . . . . . . . .
    c f f b b c . . . . . . . . . .
    b b b b b b c . . . . . . . c .
    c c d d b b c c c c c c c c b c
    . . . . c b b b b b b b b b b c
    . . . . . c b b b b b b b b c .
    . . . . . c c c c c c c c c . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . `

    ///
    /// BUTTON ICONS
    ///
    export const btn_stop = bmp`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
    `

    export const btn_delete = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . c f f . . . . . . .
        . . . . . c . . . f . . . . . .
        . . . . c c c f f f f . . . . .
        . . . c 1 1 d d d b b f . . . .
        . . c c c c c f f f f f f . . .
        . . . c b c b c b c c f . . . .
        . . . c 1 c d c d c b f d . . .
        . . . c 1 c d c d c b f d . . .
        . . . c 1 c d c d c b f d . . .
        . . . c 1 c d c d c b f d . . .
        . . . c 1 1 d d d b b f d . . .
        . . . c 1 1 d d d b b f d . . .
        . . . . c c c f f f f d . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const btn_plus = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . f f f f 5 5 f f f f . . .
        . . . f 5 5 5 5 5 5 5 5 f . . .
        . . . f 5 5 5 5 5 5 5 5 f . . .
        . . . f f f f 5 5 f f f f . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . f f f f . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const arith_plus = bmp`
    . . . . . . . .
    . . . f f . . .
    . . . f f . . .
    . f f f f f f .
    . f f f f f f .
    . . . f f . . .
    . . . f f . . .
    . . . . . . . .
`

    export const arith_equals = bmp`
    . . . . . . . .
    . f f f f f f .
    . f f f f f f .
    . . . . . . . .
    . . . . . . . .
    . f f f f f f .
    . f f f f f f .
    . . . . . . . .

`

    export const loop = bmp`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 f f f f 4 4 4 4 4 4 4 4 4 
    4 4 4 c c c c f 4 4 4 4 4 4 4 4 
    4 4 4 1 1 1 1 1 f 4 4 4 4 4 4 4 
    4 4 4 4 4 4 c 1 1 4 1 4 4 4 1 4 
    4 4 4 4 4 4 4 c 1 4 4 1 4 1 4 4 
    4 4 4 4 f 4 4 c 1 4 4 4 1 4 4 4 
    4 4 4 f c 4 f c 1 4 4 1 4 1 4 4 
    4 4 f c 1 f c 1 1 4 1 4 4 4 1 4 
    4 4 c 1 1 c 1 1 4 4 4 4 4 4 4 4 
    4 4 1 1 1 1 1 4 4 4 4 4 4 4 4 4 
    4 4 4 1 1 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 1 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `

    export const btn_when_insertion_point = bmp`
    dddddddddddddddddd
    dcddcddcddcddcddcd
    dddddddddddddddddd
    dddddddddddddddddd
    dcddddddddddddddcd
    dddddddddddddddddd
    dddddddddddddddddd
    dcddddddddddddddcd
    dddddddddddddddddd
    dddddddddddddddddd
    dcddddddddddddddcd
    dddddddddddddddddd
    dddddddddddddddddd
    dcddddddddddddddcd
    dddddddddddddddddd
    dddddddddddddddddd
    dcddcddcddcddcddcd
    dddddddddddddddddd
    `

    export const btn_do_insertion_point = bmp`
    bbbbbbbbbbbbbbbbbb
    bdbbdbbdbbdbbdbbdb
    bbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbdb
    bbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbdb
    bbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbdb
    bbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb
    bdbbbbbbbbbbbbbbdb
    bbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbb
    bdbbdbbdbbdbbdbbdb
    bbbbbbbbbbbbbbbbbb
    `

    export const rule_arrow = bmp`
    d d d . . . . . . . . . . .
    d d d d . . . . . . . . . .
    d d d d d . . . . . . . . .
    d d d d d d . . . . . . . .
    d d d d d d d . . . . . . .
    d d d d d d d d . . . . . .
    d d d d d d d d d . . . . .
    d d d d d d d d d d . . . .
    d d d d d d d d d d d . . .
    d d d d d d d d d d d d . .
    d d d d d d d d d d d d . .
    d d d d d d d d d d d . . .
    d d d d d d d d d d . . . .
    d d d d d d d d d . . . . .
    d d d d d d d d . . . . . .
    d d d d d d d . . . . . . .
    d d d d d d . . . . . . . .
    d d d d d . . . . . . . . .
    d d d d . . . . . . . . . .
    d d d . . . . . . . . . . .
`

export const showScreen = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . 2 4 . .
. . . . 2 . . . . . . 2 4 4 2 .
. . . . 2 . . . . . 2 4 4 2 e .
. 2 . . 2 . . . . 2 4 4 2 e b .
. . 2 . 2 . . . 2 4 4 2 e b . .
. . . . . . . d 4 4 2 e b . . .
. . f f f f f d d 2 e b . . . .
. . f f f f f 2 d d b . . . . .
. . f f 2 f 2 f f b . . . . . .
. . f f f f f f f b . 2 2 2 2 .
. . f 2 f f f 2 f b . . . . . .
. . f f 2 2 2 f f b . 2 . . . .
. . f f f f f f f b . . 2 . . .
. . . b b b b b b b . . . . . .
. . . . . . . . . . . . . . . .
`


    export const green_tick = bmp`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 1
        1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 1
        1 1 1 1 1 1 1 1 1 1 1 6 6 6 6 1
        1 1 1 1 1 1 1 1 1 1 6 6 6 6 6 1
        1 1 1 1 1 1 1 1 1 6 6 6 6 6 1 1
        1 6 1 1 1 1 1 1 6 6 6 6 6 1 1 1
        1 6 6 1 1 1 1 6 6 6 6 6 1 1 1 1
        1 6 6 6 1 1 6 6 6 6 6 1 1 1 1 1
        1 6 6 6 6 6 6 6 6 6 1 1 1 1 1 1
        1 6 6 6 6 6 6 6 6 1 1 1 1 1 1 1
        1 6 6 6 6 6 6 6 1 1 1 1 1 1 1 1
        1 1 6 6 6 6 6 1 1 1 1 1 1 1 1 1
        1 1 1 6 6 6 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

    export const showNumber = bmp`
    . . . . . . . . . . 4 4 4 4 4 4
    . . . . . . . . . 4 5 5 5 5 5 5
    . . . . 2 . . . 4 5 4 4 4 4 4 4
    . . . . 2 . . . 4 5 4 . . . . .
    . 2 . . 2 . . . 4 5 4 . . . . .
    . . 2 . 2 . 4 5 5 5 5 5 4 . . .
    . . . . . . . 4 5 5 5 4 . . . .
    . . f f f f f f 4 5 4 . . . . .
    . . f f f 2 2 f f b . . . . . .
    . . f f 2 f 2 f f b . . . . . .
    . . f 2 f f 2 f f b . 2 2 2 2 .
    . . f 2 2 2 2 2 f b . . . . . .
    . . f f f f 2 f f b . 2 . . . .
    . . f f f f f f f b . . 2 . . .
    . . . b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . .
        `

    ///
    /// GENERIC LANGUAGE TILES (NOT HARDWARE SPECIFIC)
    ///

    export const rule_handle = bmp`
        . f f f f f f f .
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        f 1 1 1 1 1 1 1 f
        . f f f f f f f .
    `

    export const tile_switch_page = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . f f f f . . . . . . .
        . . . . f f 9 9 f . . . . . . .
        . . . f 9 f 9 9 f d f f f f . .
        . . f f f f 9 9 f f f 7 7 f . .
        . . f 9 9 9 9 9 f 7 f 7 7 f d .
        . . f 9 9 9 9 f f f f 7 7 f d .
        . . f 9 9 9 9 f 5 f 7 7 7 f d .
        . . f 9 f f f f 5 5 f 7 7 f d .
        . . f 9 f 5 5 5 5 5 5 f 7 f d .
        . . f f f f f f 5 5 f 7 7 f d .
        . . . d d d d f 5 f 7 7 7 f d .
        . . . . . . . f f f f f f f d .
        . . . . . . . . d d d d d d d .
        . . . . . . . . . . . . . . . .
    `

    export const tile_start_page = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . f f f f . . .
    . . . . . . . . f f 7 7 f . . .
    . . . . . . . f 7 f 7 7 f d . .
    . . . . . . f f f f 7 7 f d . .
    . . . . . . f 5 f 7 7 7 f d . .
    . . . f f f f 5 5 f 7 7 f d . .
    . . . f 5 5 5 5 5 5 f 7 f d . .
    . . . f f f f 5 5 f 7 7 f d . .
    . . . d d d f 5 f 7 7 7 f d . .
    . . . . . . f f f f f f f d . .
    . . . . . . . d d d d d d d . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . 
    `

    export const tile_page_1 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f f 9 9 9 9 9 f . . .
        . . . . f 9 f 9 9 9 9 9 f . . .
        . . . f f f f 9 9 9 9 9 f . . .
        . . . f 9 9 9 9 9 9 9 9 f . . .
        . . . f 9 9 9 f f 9 9 9 f . . .
        . . . f 9 9 9 9 f 9 9 9 f . . .
        . . . f 9 9 9 9 f 9 9 9 f . . .
        . . . f 9 9 9 9 f 9 9 9 f . . .
        . . . f 9 9 9 f f f 9 9 f . . .
        . . . f 9 9 9 9 9 9 9 9 f . . .
        . . . f f f f f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_page_2 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f f 5 5 5 5 5 f . . .
        . . . . f 5 f 5 5 5 5 5 f . . .
        . . . f f f f 5 5 5 5 5 f . . .
        . . . f 5 5 5 5 5 5 5 5 f . . .
        . . . f 5 5 5 f f 5 5 5 f . . .
        . . . f 5 5 f 5 5 f 5 5 f . . .
        . . . f 5 5 5 5 f 5 5 5 f . . .
        . . . f 5 5 5 f 5 5 5 5 f . . .
        . . . f 5 5 f f f f 5 5 f . . .
        . . . f 5 5 5 5 5 5 5 5 f . . .
        . . . f f f f f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_page_3 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f f 4 4 4 4 4 f . . .
        . . . . f 4 f 4 4 4 4 4 f . . .
        . . . f f f f 4 4 4 4 4 f . . .
        . . . f 4 4 4 4 4 4 4 4 f . . .
        . . . f 4 4 4 f f 4 4 4 f . . .
        . . . f 4 4 4 4 4 f 4 4 f . . .
        . . . f 4 4 4 4 f 4 4 4 f . . .
        . . . f 4 4 4 4 4 f 4 4 f . . .
        . . . f 4 4 4 f f 4 4 4 f . . .
        . . . f 4 4 4 4 4 4 4 4 f . . .
        . . . f f f f f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_page_4 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f f 3 3 3 3 3 f . . .
        . . . . f 3 f 3 3 3 3 3 f . . .
        . . . f f f f 3 3 3 3 3 f . . .
        . . . f 3 3 3 3 3 3 3 3 f . . .
        . . . f 3 3 f 3 f 3 3 3 f . . .
        . . . f 3 3 f 3 f 3 3 3 f . . .
        . . . f 3 3 f f f f 3 3 f . . .
        . . . f 3 3 3 3 f 3 3 3 f . . .
        . . . f 3 3 3 3 f 3 3 3 f . . .
        . . . f 3 3 3 3 3 3 3 3 f . . .
        . . . f f f f f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_page_5 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . f f f f f f f . . .
        . . . . . f f 7 7 7 7 7 f . . .
        . . . . f 7 f 7 7 7 7 7 f . . .
        . . . f f f f 7 7 7 7 7 f . . .
        . . . f 7 7 7 7 7 7 7 7 f . . .
        . . . f 7 7 f f f f 7 7 f . . .
        . . . f 7 7 f 7 7 7 7 7 f . . .
        . . . f 7 7 f f f 7 7 7 f . . .
        . . . f 7 7 7 7 7 f 7 7 f . . .
        . . . f 7 7 f f f 7 7 7 f . . .
        . . . f 7 7 7 7 7 7 7 7 f . . .
        . . . f f f f f f f f f f . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    ///
    /// HARDWARE-SPECIFIC LANGUAGE TILES
    ///
    export const tile_button_a = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 8 . . .
        . . . . . . . . . . . 8 8 d . .
        . . . . . . . . . . 8 8 8 d . .
        . . . . . . . . . 8 8 8 8 d . .
        . . . . . . . . 8 8 8 8 8 d . .
        . . . . . . . 8 8 8 1 8 8 d . .
        . . . . . . 8 8 8 1 8 1 8 d . .
        . . . . . 8 8 8 8 1 1 1 8 d . .
        . . . . 8 8 8 8 8 1 8 1 8 d . .
        . . . 8 8 8 8 8 8 1 8 1 8 d . .
        . . 8 8 8 8 8 8 8 8 8 8 8 d . .
        . . . d d d d d d d d d d d . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_button_b = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . 8 8 8 8 8 8 8 8 8 8 8 . . .
        . . 8 1 1 8 8 8 8 8 8 8 d d . .
        . . 8 1 8 1 8 8 8 8 8 d d . . .
        . . 8 1 1 8 8 8 8 8 d d . . . .
        . . 8 1 8 1 8 8 8 d d . . . . .
        . . 8 1 1 8 8 8 d d . . . . . .
        . . 8 8 8 8 8 d d . . . . . . .
        . . 8 8 8 8 d d . . . . . . . .
        . . 8 8 8 d d . . . . . . . . .
        . . 8 8 d d . . . . . . . . . .
        . . 8 d d . . . . . . . . . . .
        . . . d . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_timer = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . b b b b b . . . . . .
        . . . . b 1 1 9 9 9 b . . . . .
        . . . b 1 1 1 b 9 9 9 c . . . .
        . . b 1 1 d 1 b 9 b 9 9 c . . .
        . . b 1 1 1 1 9 9 9 9 9 c d . .
        . . b 1 d d 1 2 2 2 2 9 c d . .
        . . b 1 1 1 1 1 1 1 1 1 c d . .
        . . b 1 1 d 1 d 1 d 1 1 c d . .
        . . . b 1 1 1 d 1 1 1 c d . . .
        . . . . c 1 1 1 1 1 c d . . . .
        . . . . . c c c c c d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_timespan_short = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . b b b b b b b b b b . . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 2 1 1 1 1 1 1 1 c . .
        . . b 1 1 2 1 1 1 1 1 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 1 1 c d .
        . . b 1 2 2 2 1 1 1 f f 1 c d .
        . . b 1 1 1 1 1 1 f 1 1 1 c d .
        . . b 1 2 1 2 1 1 1 f 1 1 c d .
        . . b 1 2 2 2 1 1 1 1 f 1 c d .
        . . b 1 1 1 2 1 1 f f 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 1 1 c d .
        . . . c c c c c c c c c c d . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_timespan_long = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . b b b b b b b b b b . . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 1 2 1 1 1 1 1 1 c d .
        . . b 1 1 2 2 1 1 1 1 1 1 c d .
        . . b 1 1 1 2 1 1 1 f f 1 c d .
        . . b 1 1 1 2 1 1 f 1 1 1 c d .
        . . b 1 1 1 2 1 1 1 f 1 1 c d .
        . . b 1 1 1 2 1 1 1 1 f 1 c d .
        . . b 1 1 2 2 2 1 f f 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 1 1 c d .
        . . . c c c c c c c c c c d . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_timespan_fiveSeconds = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . b b b b b b b b b b . . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 2 2 2 2 1 1 1 1 1 c d .
        . . b 1 2 1 1 1 1 1 1 1 1 c d .
        . . b 1 2 2 2 1 1 1 f f 1 c d .
        . . b 1 1 1 1 2 1 f 1 1 1 c d .
        . . b 1 1 1 1 2 1 1 f 1 1 c d .
        . . b 1 1 1 1 2 1 1 1 f 1 c d .
        . . b 1 2 2 2 1 1 f f 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 1 1 c d .
        . . . c c c c c c c c c c d . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_timespan_random = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . b b b b b b b b b b . . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 1 1 1 1 1 1 1 1 c . .
        . . b 1 1 2 2 1 1 1 1 1 1 c d .
        . . b 1 2 1 1 2 1 1 1 1 1 c d .
        . . b 1 1 1 1 2 1 1 f f 1 c d .
        . . b 1 1 2 2 1 1 f 1 1 1 c d .
        . . b 1 1 2 1 1 1 1 f 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 f 1 c d .
        . . b 1 1 2 1 1 1 f f 1 1 c d .
        . . b 1 1 1 1 1 1 1 1 1 1 c d .
        . . . c c c c c c c c c c d . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const pin_0 = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 4 4 4 4 4 1 1 1 4 4 1 1 1
    1 4 4 4 1 1 4 4 1 4 4 4 4 1 1
    1 4 4 4 1 1 1 4 4 4 1 1 4 4 1
    1 4 4 4 1 1 4 4 4 4 1 1 4 4 1
    1 4 4 4 4 4 4 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 4 4 1 1 4 4 1 
    1 4 4 4 1 1 1 1 1 4 4 4 4 1 1 
    1 1 4 1 1 1 1 1 1 1 4 4 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

    export const pin_1 = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 4 4 4 4 4 1 1 4 4 4 4 1 1
    1 4 4 4 1 1 4 4 4 4 4 4 4 1 1
    1 4 4 4 1 1 1 4 4 4 4 4 4 1 1
    1 4 4 4 1 1 4 4 1 1 4 4 4 1 1
    1 4 4 4 4 4 4 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 4 4 4 4 4 4 1
    1 1 4 1 1 1 1 4 4 4 4 4 4 4 4
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`
    export const pin_2 = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 4 4 4 4 4 1 1 4 4 4 4 1 1
    1 4 4 4 1 1 4 4 4 4 4 4 4 4 1
    1 4 4 4 1 1 1 4 4 4 1 1 4 4 4
    1 4 4 4 1 1 4 4 4 1 1 1 4 4 4
    1 4 4 4 4 4 4 1 1 1 1 1 4 4 4
    1 4 4 4 1 1 1 1 1 1 1 4 4 4 1
    1 4 4 4 1 1 1 1 1 1 1 4 4 4 1
    1 4 4 4 1 1 1 1 1 1 4 4 4 1 1
    1 4 4 4 1 1 1 1 1 4 4 4 4 1 1
    1 4 4 4 1 1 1 1 4 4 4 4 1 1 1
    1 4 4 4 1 1 1 4 4 4 4 4 4 4 4
    1 1 4 1 1 1 1 4 4 4 4 4 4 4 4
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`

    export const compass = bmp`
    1 1 1 1 5 5 5 5 5 5 5 1 1 1 1
    1 1 1 5 5 5 5 5 5 5 5 5 1 1 1
    1 1 5 5 5 f f f f f 5 5 5 1 1
    1 5 5 5 f f f f f f 2 5 5 5 1
    5 5 5 f f f f f f 2 2 2 5 5 5
    5 5 f f f f f f 2 2 2 f f 5 5
    5 f f f f f f 2 2 2 f f f f 5
    5 f f f f f 1 1 1 2 f f f f 5
    5 f f f f 8 1 1 1 f f f f f 5
    5 f f f 8 8 1 1 1 f f f f f 5
    5 5 f 8 8 8 8 f f f f f f 5 5
    5 5 5 8 8 8 f f f f f f 5 5 5
    1 5 5 5 8 f f f f f f 5 5 5 1
    1 1 5 5 5 f f f f f 5 5 5 1 1
    1 1 1 5 5 5 5 5 5 5 5 5 1 1 1
    1 1 1 1 5 5 5 5 5 5 5 1 1 1 1
`


    export const tile_pin_0 = bmp`
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 f 5 f 5 5 5 4 d . .
        . . 4 5 5 5 f 5 f 5 5 5 4 d . .
        . . 4 5 5 5 f 5 f 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . . 4 4 d . . . . 4 4 d . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_pin_1 = bmp`
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 f f 5 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . . 4 4 d . . . . 4 4 d . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_pin_2 = bmp`
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 4 d . . . . 4 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 f f 5 5 5 5 4 d . .
        . . 4 5 5 5 5 5 f 5 5 5 4 d . .
        . . 4 5 5 5 5 f 5 5 5 5 4 d . .
        . . 4 5 5 5 f 5 5 5 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 4 4 4 4 4 5 5 4 d . .
        . . . 4 4 d . . . . 4 4 d . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const radio_value = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 8 . . . 8 . . . . . .
    . . . 8 . . 8 8 8 . . 8 . . . .
    . 8 . . 8 . . . . . 8 . . 8 . .
    . . 8 . . 8 8 8 8 8 . . 8 . . .
    . . . 8 . . . . . . . 8 . . . .
    . . . . 8 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 4 4 4 . . . . . . .
    . . . . . 4 5 1 5 4 . . . . . .
    . . . . . 4 1 1 1 4 . . . . . .
    . . . . . 4 5 1 5 4 . . . . . .
    . . . . . . 4 4 4 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const radio_receive = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 8 . . . 8 . . . . . .
    . . . 8 . . 8 8 8 . . 8 . . . .
    . 8 . . 8 . . . . . 8 . . 8 . .
    . . 8 . . 8 8 8 8 8 . . 8 . . .
    . . . 8 . . . . . . . 8 . . . .
    . . . . 8 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . 4 5 5 5 5 5 4 . . . . .
    . . . . . 4 5 5 5 4 . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . . 4 . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const radio_send = bmp`
    . . . . . . . . . . . . . . . .
    . . . . 8 8 8 8 8 8 8 . . . . .
    . . . 8 . . . . . . . 8 . . . .
    . . 8 . . 8 8 8 8 8 . . 8 . . .
    . 8 . . 8 . . . . . 8 . . 8 . .
    . . . 8 . . 8 8 8 . . 8 . . . .
    . . . . . 8 . . . 8 . . . . . .
    . . . . . . . 4 . . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . 4 5 5 5 4 . . . . . .
    . . . . 4 5 5 5 5 5 4 . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . 4 5 4 . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const radio_set_group = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 8 . . . 8 . . . . . .
    . . . 8 . . 8 8 8 . . 8 . . . .
    . 8 . . 8 . . . . . 8 . . 8 . .
    . . 8 . . 8 8 8 8 8 . . 8 . . .
    . . . 8 . . . . . . . 8 . . . .
    . . . . 8 8 8 8 8 8 8 . . . . .
    . . . . . . . . . . . . . . . .
    . . . 6 6 6 . . . . 6 6 6 . . .
    . . 6 9 6 9 6 . . 6 9 6 9 6 . .
    . . . 6 6 6 . . . . 6 6 6 . . .
    . . . . . . . . . . . . . . . .
    . . . 6 6 6 . . . . 6 6 6 . . .
    . . 6 9 6 9 6 . . 6 9 6 9 6 . .
    . . . 6 6 6 . . . . 6 6 6 . . .
    . . . . . . . . . . . . . . . .
`

    export const microbit_logo = bmp`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 4 4 4 4 4 4 4 4 d . . . 
    . . . 4 d 5 5 5 5 5 5 5 4 d . . 
    . . 4 d . . . . . . . . 5 4 d . 
    . . 4 d 4 4 d . . . 4 4 d 4 d . 
    . . 4 d 4 4 d . . . 4 4 d 4 d . 
    . . 4 d . 5 5 . . . . 5 5 4 d . 
    . . . 4 d . . . . . . . 4 d . . 
    . . . . 4 4 4 4 4 4 4 4 d . . . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
`
    export const microbit_logo_btn = bmp`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 f f 1 1 1 1 f f 1 f . . 
    . . f 1 f f 1 1 1 1 f f 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . . f 1 1 1 1 1 1 1 1 f . . . 
    . . . . f f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . .
`

    export const finger_press = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1
    1 1 1 1 1 f 1 f 1 f 1 1 1 1 1 1
    1 1 1 1 1 1 f f f 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 4 4 4 4 4 1 1 1 1 1 1
    1 1 1 1 4 4 4 4 4 4 4 d 1 1 1 1
    1 1 1 e 4 4 4 4 4 4 4 e d 1 1 1
    1 1 1 e 2 4 4 4 4 4 2 e d 1 1 1
    1 1 1 e e 2 2 2 2 2 e e d 1 1 1
    1 1 1 1 e e e e e e e d 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `
    export const finger_release = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . f f f . . . . . . .
        . . . . . f . f . f . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . f . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . 4 4 4 4 4 4 4 d . . . .
        . . . e 4 4 4 4 4 4 4 e d . . .
        . . . e 2 4 4 4 4 4 2 e d . . .
        . . . e e 2 2 2 2 2 e e d . . .
        . . . . e e e e e e e d . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const tile_color_black = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . 1 1 f f f f f b b . . . .
    . . 1 f f f f f f f f f b . . .
    . . 1 f f f f f f f f f b . . .
    . 1 f f f f f f f f f f f b . .
    . 1 f f f f f f f f f f f b d .
    . 1 f f f f f f f f f f f b d .
    . 1 f f f f f f f f f f f b d .
    . 1 f f f f f f f f f f f b d .
    . . b f f f f f f f f f b d d .
    . . b f f f f f f f f f b d . .
    . . . b b f f f f f b b d . . .
    . . . . . b b b b b d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `
    export const tile_color_red = bmp`
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . 1 1 2 2 2 2 2 b b . . . . 
    . . 1 2 2 2 2 2 2 2 2 2 b . . . 
    . . 1 2 2 2 2 2 2 2 2 2 b . . . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 b . . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 b d . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 b d . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 b d . 
    . 1 2 2 2 2 2 2 2 2 2 2 2 b d . 
    . . b 2 2 2 2 2 2 2 2 2 b d d . 
    . . b 2 2 2 2 2 2 2 2 2 b d . . 
    . . . b b 2 2 2 2 2 b b d . . . 
    . . . . . b b b b b d d . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
    export const tile_color_blue = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . 1 1 8 8 8 8 8 b b . . . .
    . . 1 8 8 8 8 8 8 8 8 8 b . . .
    . . 1 8 8 8 8 8 8 8 8 8 b . . .
    . 1 8 8 8 8 8 8 8 8 8 8 8 b . .
    . 1 8 8 8 8 8 8 8 8 8 8 8 b d .
    . 1 8 8 8 8 8 8 8 8 8 8 8 b d .
    . 1 8 8 8 8 8 8 8 8 8 8 8 b d .
    . 1 8 8 8 8 8 8 8 8 8 8 8 b d .
    . . b 8 8 8 8 8 8 8 8 8 b d d .
    . . b 8 8 8 8 8 8 8 8 8 b d . .
    . . . b b 8 8 8 8 8 b b d . . .
    . . . . . b b b b b d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `
    export const tile_sparkle = bmp`
    c c c c c c c c c c c c c c c c
    c c d c c c c c c c c c c c c c
    c d 1 d c c c c c c c c c d c c
    c c d c c c c c c c c c c c c c
    c c c c c c c d c c d c c c c c
    c c c c c c c c c d 1 d c c c c
    c c c c c c c c c c d c c c c c
    c d c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c
    c c c c c c d c c 1 c c c c c c
    c c c c c d 1 d c c c c c c c c
    c c c c c c d c c c c c c c c c
    c c c c c c c c c c c c c d c c
    c c c c c c c c c c c c d 1 d c
    c c c d c c c c c c c c c d c c
    c c c c c c c c c c c c c c c c
    `

    export const tile_rainbow = bmp`
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 4 4 4 4 4 4 4 4 4 4 2 2 2 
    2 2 4 4 4 4 4 4 4 4 4 4 4 4 2 2 
    2 4 4 5 5 5 5 5 5 5 5 5 5 4 4 2 
    4 4 5 5 5 5 5 5 5 5 5 5 5 5 4 4 
    4 5 5 5 7 7 7 7 7 7 7 7 5 5 5 4 
    5 5 7 7 7 7 7 7 7 7 7 7 7 7 5 5 
    5 7 7 7 7 8 8 8 8 8 8 7 7 7 7 5 
    7 7 7 7 8 8 8 8 8 8 8 8 7 7 7 5 
    7 7 7 8 8 8 c c c c 8 8 8 7 7 7 
    7 7 8 8 8 c c c c c c 8 8 8 7 7 
    7 7 8 8 c c a a a a c c 8 8 7 7 
    7 7 8 8 c c a . . a c c 8 8 7 7 
    . . . . . . . . . . . . . . . .     
    `

    export const tile_color_green = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . 1 1 7 7 7 7 7 b b . . . .
    . . 1 7 7 7 7 7 7 7 7 7 b . . .
    . . 1 7 7 7 7 7 7 7 7 7 b . . .
    . 1 7 7 7 7 7 7 7 7 7 7 7 b . .
    . 1 7 7 7 7 7 7 7 7 7 7 7 b d .
    . 1 7 7 7 7 7 7 7 7 7 7 7 b d .
    . 1 7 7 7 7 7 7 7 7 7 7 7 b d .
    . 1 7 7 7 7 7 7 7 7 7 7 7 b d .
    . . b 7 7 7 7 7 7 7 7 7 b d d .
    . . b 7 7 7 7 7 7 7 7 7 b d . .
    . . . b b 7 7 7 7 7 b b d . . .
    . . . . . b b b b b d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `
    export const tile_color_magenta = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . 1 1 a a a a a b b . . . .
    . . 1 a a a a a a a a a b . . .
    . . 1 a a a a a a a a a b . . .
    . 1 a a a a a a a a a a a b . .
    . 1 a a a a a a a a a a a b d .
    . 1 a a a a a a a a a a a b d .
    . 1 a a a a a a a a a a a b d .
    . 1 a a a a a a a a a a a b d .
    . . b a a a a a a a a a b d d .
    . . b a a a a a a a a a b d . .
    . . . b b a a a a a b b d . . .
    . . . . . b b b b b d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `
    export const tile_color_yellow = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 1 1 1 1 1 . . . . . .
    . . . 1 1 5 5 5 5 5 b b . . . .
    . . 1 5 5 5 5 5 5 5 5 5 b . . .
    . . 1 5 5 5 5 5 5 5 5 5 b . . .
    . 1 5 5 5 5 5 5 5 5 5 5 5 b . .
    . 1 5 5 5 5 5 5 5 5 5 5 5 b d .
    . 1 5 5 5 5 5 5 5 5 5 5 5 b d .
    . 1 5 5 5 5 5 5 5 5 5 5 5 b d .
    . 1 5 5 5 5 5 5 5 5 5 5 5 b d .
    . . b 5 5 5 5 5 5 5 5 5 b d d .
    . . b 5 5 5 5 5 5 5 5 5 b d . .
    . . . b b 5 5 5 5 5 b b d . . .
    . . . . . b b b b b d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `

    /*
    export const tile_coin_1 = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 4 4 . . . . . .
    . . . 4 4 5 5 5 5 5 4 4 . . . .
    . . 4 5 5 1 1 1 1 1 5 5 4 . . .
    . . 4 5 1 1 1 1 1 1 1 5 4 . . .
    . 4 5 1 1 1 1 f 1 1 1 1 5 4 . .
    . 4 5 1 1 1 f f 1 1 1 1 5 4 d .
    . 4 5 1 1 1 1 f 1 1 1 1 5 4 d .
    . 4 5 1 1 1 1 f 1 1 1 1 5 4 d .
    . 4 5 1 1 1 f f f 1 1 1 5 4 d .
    . . 4 5 1 1 1 1 1 1 1 5 4 d d .
    . . 4 5 5 1 1 1 1 1 5 5 4 d . .
    . . . 4 4 5 5 5 5 5 4 4 d . . .
    . . . . . 4 4 4 4 4 d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const tile_coin_2 = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 4 4 . . . . . .
    . . . 4 4 5 5 5 5 5 4 4 . . . .
    . . 4 5 5 1 1 1 1 1 5 5 4 . . .
    . . 4 5 1 1 1 1 1 1 1 5 4 . . .
    . 4 5 1 1 1 f f 1 1 1 1 5 4 . .
    . 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
    . 4 5 1 1 1 1 f 1 1 1 1 5 4 d .
    . 4 5 1 1 1 f 1 1 1 1 1 5 4 d .
    . 4 5 1 1 1 f f f 1 1 1 5 4 d .
    . . 4 5 1 1 1 1 1 1 1 5 4 d d .
    . . 4 5 5 1 1 1 1 1 5 5 4 d . .
    . . . 4 4 5 5 5 5 5 4 4 d . . .
    . . . . . 4 4 4 4 4 d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const tile_coin_3 = bmp`
. . . . . . . . . . . . . . . .
. . . . . 4 4 4 4 4 . . . . . .
. . . 4 4 5 5 5 5 5 4 4 . . . .
. . 4 5 5 1 1 1 1 1 5 5 4 . . .
. . 4 5 1 1 1 1 1 1 1 5 4 . . .
. 4 5 1 1 1 f f 1 1 1 1 5 4 . .
. 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
. 4 5 1 1 1 1 f 1 1 1 1 5 4 d .
. 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
. 4 5 1 1 1 f f 1 1 1 1 5 4 d .
. . 4 5 1 1 1 1 1 1 1 5 4 d d .
. . 4 5 5 1 1 1 1 1 5 5 4 d . .
. . . 4 4 5 5 5 5 5 4 4 d . . .
. . . . . 4 4 4 4 4 d d . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`

    export const tile_coin_5 = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 4 4 . . . . . .
    . . . 4 4 5 5 5 5 5 4 4 . . . .
    . . 4 5 5 1 1 1 1 1 5 5 4 . . .
    . . 4 5 1 1 1 1 1 1 1 5 4 . . .
    . 4 5 1 1 1 f f f 1 1 1 5 4 . .
    . 4 5 1 1 1 f 1 1 1 1 1 5 4 d .
    . 4 5 1 1 1 f f 1 1 1 1 5 4 d .
    . 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
    . 4 5 1 1 1 f f 1 1 1 1 5 4 d .
    . . 4 5 1 1 1 1 1 1 1 5 4 d d .
    . . 4 5 5 1 1 1 1 1 5 5 4 d . .
    . . . 4 4 5 5 5 5 5 4 4 d . . .
    . . . . . 4 4 4 4 4 d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .`

    export const tile_coin_4 = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 4 4 4 4 4 . . . . . .
    . . . 4 4 5 5 5 5 5 4 4 . . . .
    . . 4 5 5 1 1 1 1 1 5 5 4 . . .
    . . 4 5 1 1 1 1 1 1 1 5 4 . . .
    . 4 5 1 1 1 f 1 f 1 1 1 5 4 . .
    . 4 5 1 1 1 f 1 f 1 1 1 5 4 d .
    . 4 5 1 1 1 f f f 1 1 1 5 4 d .
    . 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
    . 4 5 1 1 1 1 1 f 1 1 1 5 4 d .
    . . 4 5 1 1 1 1 1 1 1 5 4 d d .
    . . 4 5 5 1 1 1 1 1 5 5 4 d . .
    . . . 4 4 5 5 5 5 5 4 4 d . . .
    . . . . . 4 4 4 4 4 d d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
*/

    export const rgbLed = bmp`
    . . . . f f f f f f f . . . . . 
    . . f f f 4 4 f 9 9 f f f . . . 
    . f 5 5 f 4 4 f 9 9 f b b f . . 
    . f 5 5 f f f f f f f b b f d . 
    f f f f f . . . . . f f f f f d 
    f 4 4 f . . . . . . . f 7 7 f d 
    f 4 4 f . . . . . . . f 7 7 f d 
    f f f f . . . . . . . f f f f d 
    f 2 2 f . . . . . . . f e e f d 
    f 2 2 f . . . . . . . f e e f d 
    f f f f . . . . . . . f f f f d 
    b f 6 6 f f f f f f f c c f b d 
    . f 6 6 f 8 8 f a a f c c 5 5 5 
    . b f f f 8 8 f a a f f f 5 5 5 
    . . b b f f f f f f f b b 5 5 4 
    . . . . d b b b b b b d d 4 4 . 
`

    export const magnet = bmp`
1 1 1 1 1 1 1 1 1 1 1 1 6 1 1 1 
1 1 1 1 1 1 1 1 1 1 6 1 1 1 6 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 8 8 8 8 8 f f 1 1 6 1 1 1 
1 1 8 8 8 8 8 8 f f 1 1 1 1 1 6 
1 8 8 8 b b b b b b 1 1 6 1 1 1 
1 8 8 b 1 1 1 1 1 1 1 1 1 1 6 1 
1 8 8 1 1 1 1 1 1 1 1 6 1 1 1 1 
1 2 2 1 1 1 1 1 1 1 1 1 1 6 1 1 
1 2 2 1 1 1 1 1 1 1 1 6 1 1 1 1 
1 2 2 2 1 1 1 1 1 1 1 1 1 1 6 1 
1 b 2 2 2 2 2 2 f f 1 1 6 1 1 1 
1 1 b 2 2 2 2 2 f f 1 1 1 5 5 5 
1 1 1 b b b b b b b 1 1 6 5 5 5 
1 1 1 1 1 1 1 1 1 1 1 1 1 5 5 4 
1 1 1 1 1 1 1 1 1 1 6 1 1 4 4 1 
`
export const thermometer = bmp`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
1 1 1 1 1 1 1 f 1 1 1 1 1 1 1 1
1 1 1 1 1 1 f d f 1 1 1 1 1 1 1
1 1 1 1 1 1 f d f 1 1 1 1 1 1 1
1 1 1 1 1 1 f d f 1 1 1 1 1 1 1
1 1 1 1 1 1 f d f 1 1 1 1 1 1 1
1 1 1 1 1 1 f 2 f 1 1 1 1 1 1 1
1 1 1 1 1 1 f 2 f 1 1 1 1 1 1 1
1 1 1 1 1 1 f 2 f 1 1 1 1 1 1 1
1 1 1 1 1 1 f 2 f 1 1 1 1 1 1 1
1 1 1 1 1 f 2 2 2 f 1 1 1 1 1 1
1 1 1 1 f 2 2 2 2 2 f 1 1 1 1 1
1 1 1 1 f 2 2 2 2 2 f 1 1 1 1 1
1 1 1 1 1 f 2 2 2 f 1 1 1 1 1 1
1 1 1 1 1 1 f f f 1 1 1 1 1 1 1
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`

    export const temp_warmer = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . f . . . . . . . .
. . . . . . f 2 f . . . . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . f 2 2 2 2 2 f . . . . .
. . . f 2 2 2 2 2 2 2 f . . . .
. . . f f f 2 2 2 f f f . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . . f 2 2 2 f . . . . . .
. . . . . f f f f f . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`

    export const temp_colder = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . f f f f f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . f f f 9 9 9 f f f . . . .
    . . . f 9 9 9 9 9 9 9 f . . . .
    . . . . f 9 9 9 9 9 f . . . . .
    . . . . . f 9 9 9 f . . . . . .
    . . . . . . f 9 f . . . . . . .
    . . . . . . . f . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const led_light_sensor = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 8 8 8 8 5 5 5 8 8 8 8 1 1 1
    1 1 8 8 8 5 4 4 4 5 8 8 8 1 1 1
    1 1 8 8 8 5 4 4 4 5 8 8 8 1 1 1
    1 1 8 8 8 5 4 4 4 5 8 8 8 1 1 1
    1 1 8 8 8 8 5 5 5 8 8 8 8 1 1 1
    1 1 8 8 5 8 8 8 8 8 5 8 8 1 1 1
    1 1 8 5 8 8 8 5 8 8 8 5 8 1 1 1
    1 1 8 8 8 5 8 8 8 5 8 8 8 1 1 1
    1 1 8 8 5 8 8 5 8 8 5 8 8 1 1 1
    1 1 8 5 8 8 8 8 8 8 8 5 8 1 1 1
    1 1 8 8 8 8 8 5 8 8 8 8 8 1 1 1
    1 1 8 8 8 8 8 8 8 8 8 8 8 1 1 1
    1 1 8 8 8 2 2 2 2 2 8 8 8 1 1 1
    1 1 8 f f f f f f f f f 8 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`

    export const light_sensor = bmp`
. . . . . . . . . . . . . . . .
. . 8 8 8 8 5 5 5 8 8 8 8 . . .
. . 8 8 8 5 4 4 4 5 8 8 8 . . .
. . 8 8 8 5 4 4 4 5 8 8 8 . . .
. . 8 8 8 5 4 4 4 5 8 8 8 . . .
. . 8 8 8 8 5 5 5 8 8 8 8 . . .
. . 8 8 5 8 8 8 8 8 5 8 8 . . .
. . 8 5 8 8 8 5 8 8 8 5 8 . . .
. . 8 8 8 5 8 8 8 5 8 8 8 . . .
. . 8 8 5 8 8 5 8 8 5 8 8 . . .
. . 8 5 8 8 8 8 8 8 8 5 8 . . .
. . 8 8 8 8 8 5 8 8 8 8 8 . . .
. . 8 8 8 8 8 8 8 8 8 8 8 5 5 5
. . 8 8 8 2 2 2 2 2 8 8 8 5 5 5
. . 8 f f f f f f f f f 8 5 5 4
. . . . . . . . . . . . . 4 4 .
`

    export const microphone = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . b c . . . . . . .
. . . . . . b c c c . . . . . .
. . . . . . b c c c . . . . . .
. . . . . . b c c c . . . . . .
. . . . . . b c c c . . . . . .
. . . . f . c c c c . f . . . .
. . . . f . c c c c . f . . . .
. . . . f . . c c . . f . . . .
. . . . . f . . . . f . . . . .
. . . . . . f f f f . . . . . .
. . . . . . . f f . . . . . . .
. . . . . . . f f . . . . . . .
. . . . . f f f f f f . . . . .
. . . . . . . . . . . . . . . .
`

    export const speaker = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 c b 1 1 1 1 1 8 1 1 1 1
    1 1 1 c b c 1 1 1 8 1 1 8 1 1 1
    1 c c b c c 1 8 1 1 8 1 8 1 1 1
    1 b b c c c 1 1 8 1 8 1 8 1 1 1
    1 c c c c c 1 1 8 1 8 1 8 1 1 1
    1 c c c c c 1 8 1 1 8 1 8 1 1 1
    1 1 1 c c c 1 1 1 8 1 1 8 1 1 1
    1 1 1 1 c c 1 1 1 1 1 8 1 1 1 1
    1 1 1 1 1 c 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

    export const speakerFun = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . 3 . . . 5 . . .
    . . . . . . . 3 . . . . . . 2 .
    . . . . . c . . . . . 2 . 2 . .
    . . . . c b . . 2 . 2 . 2 . . .
    . . . c b c . 2 . 2 . . . . 5 .
    . c c b c c . . . . . . . . . .
    . b b c c c . 4 . 4 . 4 . 4 . .
    . c c c c c . . 4 . 4 . 4 . 4 .
    . c c c c c . . . . . . . . . .
    . . . c c c . 6 . 6 . 5 . . . .
    . . . . c c . . 6 . 6 . 6 . . .
    . . . . . c . . . . . 6 . 6 . .
    . . . . . . . 9 . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const music = bmp`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f c . . . 
    . . . . . . . . . c c c c b . . 
    . . . . . . . c c c b b c b . . 
    . . . . . f c c b b b . c b . . 
    . . . . . c b b b . . . c b . . 
    . . . . . c b . . . . . c b . . 
    . . . . . c b . . . . . c b . . 
    . . . . . c b . . . f f c b . . 
    . . . f f c b . . f c c c b . . 
    . . f c c c b . . f c c b b . . 
    . . f c c b b . . . b b b . . . 
    . . . b b b . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
`
    export const note_on = bmp`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 c c c c 1 1 1 1 1
        1 1 1 1 1 1 c f f f f c 1 1 1 1
        1 1 1 1 1 c f f f f f f c 1 1 1
        1 1 1 1 c f f f f f f f f c 1 1
        1 1 1 1 c f f f f f f f f c 1 1
        1 1 1 c f f f f f f f f f c 1 1
        1 1 1 c f f f f f f f f f c 1 1
        1 1 1 c f f f f f f f f f c 1 1
        1 1 1 c f f f f f f f f f c 1 1
        1 1 1 c f f f f f f f f c 1 1 1
        1 1 1 c f f f f f f f f c 1 1 1
        1 1 1 1 c f f f f f f c 1 1 1 1
        1 1 1 1 1 c f f f f c 1 1 1 1 1
        1 1 1 1 1 1 c c c c 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

        export const note_off = bmp`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 f 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

    export const accelerometer = bmp`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 8 8 8 1 1 1 1 1 1
        1 1 1 1 1 1 8 8 8 8 8 1 1 1 1 1
        1 1 1 1 1 1 6 6 8 6 6 1 1 1 1 1
        1 1 1 1 1 1 1 1 8 1 1 1 1 1 1 1
        1 1 8 6 1 1 f f f f f 1 1 1 1 1
        1 8 8 6 1 f 1 1 1 1 1 f 1 1 1 1
        8 8 8 8 8 f 1 f 1 f 1 f 1 1 1 1
        1 8 8 6 1 f 1 1 1 1 1 f 1 1 1 1
        1 1 8 6 1 1 f f f f f 8 1 1 6 1
        1 1 1 1 1 1 1 1 1 1 1 1 8 6 8 1
        1 1 1 1 1 1 1 1 1 1 1 1 6 8 8 1
        1 1 1 1 1 1 1 1 1 1 1 6 8 8 8 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    `

    export const soundGiggle = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . 4 5 5 5 5 5 4 . . . . .
        . . . 4 5 5 5 5 5 5 5 4 . . . .
        . . 4 5 5 f 5 5 5 f 5 5 4 . . .
        . . 4 5 f 5 f 5 f 5 f 5 4 d . .
        . . 4 3 3 5 5 5 5 5 3 3 4 d . .
        . . 4 5 5 f f f f f 5 5 4 d . .
        . . 4 5 5 f f 2 2 2 5 5 4 d . .
        . . . 4 5 5 f 2 2 5 5 4 d . . .
        . . . . 4 5 5 5 5 5 4 d . . . .
        . . . . . 4 4 4 4 4 d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundHappy = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . 4 5 5 5 5 5 4 . . . . .
        . . . 4 5 5 5 5 5 5 5 4 . . . .
        . . 4 5 5 f 5 5 5 f 5 5 4 . . .
        . . 4 5 5 f 5 5 5 f 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 f 5 5 5 f 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . . 4 5 5 5 5 5 5 5 4 d . . .
        . . . . 4 5 5 5 5 5 4 d . . . .
        . . . . . 4 4 4 4 4 d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundHello = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 8 8 8 . .
        . . . . . . . . . . 8 . . . 8 .
        . . . . 4 4 4 4 . . . . 4 . . .
        . . . 4 5 5 5 5 4 . . 4 5 4 . .
        . . 4 5 f 5 5 f 5 4 . 8 8 8 d .
        . . 4 5 5 5 5 5 5 4 d 8 9 8 d .
        . . 4 5 f 5 5 f 5 4 8 9 9 8 d .
        . . 4 5 5 f f 5 5 4 8 9 8 d . .
        . . . 4 5 5 5 5 4 8 9 9 8 d . .
        . . . . 4 4 4 4 9 9 9 8 d . . .
        . . . 8 9 9 9 9 9 9 8 d . . . .
        . . 8 9 9 9 9 9 9 9 8 d . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundMysterious = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 6 6 6 6 6 6 . . . . . .
        . . . 6 7 7 7 7 7 7 6 . . . . .
        . . f f 1 7 7 7 7 f 1 f . . . .
        . . f f f f 7 7 f f f f d . . .
        . . 6 f f f 7 7 f f f 6 d . . .
        . . 6 7 7 7 7 7 7 7 7 6 d . . .
        . . 6 7 7 f 7 7 f 7 7 6 d . . .
        . . . 6 7 7 f f 7 7 6 d . . . .
        . . . . 6 7 7 7 7 6 d . . . . .
        . . . . . 6 7 7 6 d . . . . . .
        . . . . . . 6 6 d . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundSad = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . 4 5 5 5 5 5 4 . . . . .
        . . . 4 5 5 5 5 5 5 5 4 . . . .
        . . 4 5 5 f 5 5 5 f 5 5 4 . . .
        . . 4 5 5 f 5 5 5 f 5 5 4 d . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . 4 5 5 f 5 5 5 f 5 5 4 d . .
        . . . 4 5 5 5 5 5 5 5 4 d . . .
        . . . . 4 5 5 5 5 5 4 d . . . .
        . . . . . 4 4 4 4 4 d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundSlide = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 e e e . . . .
        . . . . . 2 2 2 e e d e d . . .
        . . . . . 2 2 e d e e e d . . .
        . . . . . 2 2 e d e d e d . . .
        . . . . . 2 2 e d e e e d . . .
        . . . . . 2 2 e d e d e d . . .
        . . . . . 2 2 e d e e e d . . .
        . . . . 2 2 2 e d e d e d . . .
        . . . 2 2 2 e d . e e e d . . .
        . . 2 2 2 e d . . e d e d . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundSoaring = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 9 9 9 9 9 . . . . . .
        . . . . 9 1 9 9 9 9 9 . . . . .
        . . . 9 1 9 9 7 7 7 9 9 . . . .
        . . . 9 1 9 7 f 7 f 7 9 . . . .
        . . 6 6 6 6 6 6 6 6 6 6 6 d . .
        . 6 9 5 9 5 9 5 9 5 9 5 9 6 d .
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 d .
        . . . . . . 8 8 8 d . . . . . .
        . . . . 9 . . . . . 9 . . . . .
        . . . . . 9 9 9 9 9 . . . . . .
        . . . 9 . . . . . . . 9 . . . .
        . . . . 9 9 9 9 9 9 9 . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundSpring = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 2 d . . . . . . . . . . .
        . . 2 d . . 4 4 d . . . . . . .
        . 2 d . . 4 d d 5 d . . . . . .
        . 2 d . 4 d . . 5 d . . . . . .
        . d 4 4 d . . 5 d . . . . . . .
        . . d d . . 5 d . . 7 7 d . . .
        . . . . . 5 d . . 7 d d 9 d . .
        . . . . . 5 d . 7 d . . 9 d . .
        . . . . . d 7 7 d . . 9 d . . .
        . . . . . . d d . . 9 d . . . .
        . . . . . . . . . . d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundTwinkle = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 3 . . . 3 . . . 3 . . . .
        . . 3 5 3 . . 3 . . . . . . . .
        . . . 3 . . 3 5 3 . . . . . . .
        . . . . . . 3 5 3 . . . . 3 . .
        . . . . 3 3 5 5 5 3 3 . . . . .
        . . 3 3 5 5 5 5 5 5 5 3 3 . . .
        . . . . 3 3 5 5 5 3 3 . . . . .
        . . . . . . 3 5 3 . . . . . . .
        . . . . . . 3 5 3 . . . 3 . . .
        . . . 3 . . . 3 . . . 3 5 3 . .
        . . . . . . . 3 . . . . 3 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const soundYawn = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . 4 4 4 4 4 . . . . . .
        . . . . 4 5 5 5 5 5 4 . . . . .
        . . . 4 5 5 5 5 5 5 5 4 . . . .
        . . 4 5 f f 5 5 5 f f 5 4 . . .
        . . 4 5 5 5 5 5 5 5 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . 4 5 5 5 f f f 5 5 5 4 d . .
        . . 4 5 5 5 f 2 2 5 5 5 4 d . .
        . . . 4 5 5 5 5 5 5 5 4 d . . .
        . . . . 4 5 5 5 5 5 4 d . . . .
        . . . . . 4 4 4 4 4 d . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const moveShake = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . 8 . . 8 . .
        . . . 9 9 9 9 9 9 . . 8 . . 8 .
        . . . 9 6 6 6 6 6 . . . 8 . 8 .
        . . . 9 6 f f f f f f . 8 . 8 .
        . . . 9 6 f 5 5 5 5 f . . . . .
        . . . 9 6 f 5 5 5 5 f 6 9 . . .
        . . . . . f 5 5 5 5 f 6 9 . . .
        . 8 . 8 . f f f f f f 6 9 . . .
        . 8 . 8 . . . 6 6 6 6 6 9 . . .
        . 8 . . 8 . . 9 9 9 9 9 9 . . .
        . . 8 . . 8 . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `

    export const moveTiltDown = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . 8 8 8 8 . . . . .
    . . . . . . 8 . . . . . . . . .
    . . . . . 8 . . . . . . . . . .
    . . . 8 8 8 8 8 . . . . . . . .
    . . . . 8 8 8 9 9 9 9 9 9 9 . .
    . . . . 9 8 9 9 9 9 9 9 9 9 . .
    . . . . 9 9 9 9 9 9 9 9 9 9 . .
    . f f f f f f f f f 9 9 9 9 . .
    . . f 5 5 5 5 5 5 5 f 9 9 9 . .
    . . . f 5 5 5 5 5 5 5 f 9 9 . .
    . . . . f 5 5 5 5 5 5 5 f 9 . .
    . . . . . f f f f f f f f f . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const moveTiltUp = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 8 8 8 8 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 8 1 1 1 1
    1 1 1 1 1 1 1 1 1 8 8 8 8 8 1 1
    1 1 9 9 9 9 9 9 9 9 8 8 8 1 1 1
    1 1 9 9 9 9 9 9 9 9 9 8 1 1 1 1
    1 1 9 9 9 9 9 9 9 9 9 1 1 1 1 1
    1 1 9 9 9 9 8 8 8 8 8 f f f 1 1
    1 1 9 9 9 8 6 6 6 6 6 5 f 1 1 1
    1 1 9 9 8 6 6 6 6 6 6 f 1 1 1 1
    1 1 9 8 6 6 6 6 6 6 8 1 1 1 1 1
    1 1 8 8 8 8 8 8 8 8 9 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`
    export const moveTiltLeft = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 8 1 1 1 1 1
    1 1 1 1 1 1 f f 1 8 8 1 1 1 1 1
    1 1 1 1 1 f 5 f 8 8 8 8 8 1 1 1
    1 1 9 9 8 5 5 f 9 8 8 1 1 8 1 1
    1 1 9 8 6 5 5 f 9 9 8 1 1 1 8 1
    1 1 9 8 6 5 5 f 9 9 9 1 1 1 8 1
    1 1 9 8 6 5 5 f 9 9 9 1 1 1 8 1
    1 1 9 8 6 5 5 f 9 9 9 1 1 8 1 1
    1 1 9 8 6 5 5 f 9 9 9 1 1 1 1 1
    1 1 9 8 6 5 5 f 9 9 9 1 1 1 1 1
    1 1 9 9 8 5 5 f 9 9 9 1 1 1 1 1
    1 1 1 1 1 f 5 f 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 f f 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`
    export const moveTiltRight = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . 8 . . . . . . . . . .
    . . . . . 8 8 . f f . . . . . .
    . . . 8 8 8 8 8 f 5 f . . . . .
    . . 8 . . 8 8 9 f 5 5 8 9 9 . .
    . 8 . . . 8 9 9 f 5 5 6 8 9 . .
    . 8 . . . 9 9 9 f 5 5 6 8 9 . .
    . 8 . . . 9 9 9 f 5 5 6 8 9 . .
    . . 8 . . 9 9 9 f 5 5 6 8 9 . .
    . . . . . 9 9 9 f 5 5 6 8 9 . .
    . . . . . 9 9 9 f 5 5 6 8 9 . .
    . . . . . 9 9 9 f 5 5 8 9 9 . .
    . . . . . . . . f 5 f . . . . .
    . . . . . . . . f f . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const moveFaceUp = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . 8 . . . . . . . .
. . . . . . 8 8 8 . . . . . . .
. . . . . 8 8 8 8 8 . . . . . .
. . . . . . . 8 . . . . . . . .
. . . . . . . 8 . . . . . . . .
. . . . . . . 8 . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . f f f f f f f . . . . .
. . . f 5 5 5 5 5 5 5 f . . . .
. . f 5 5 5 5 5 5 5 5 5 f . . .
. f 5 5 5 5 5 5 5 5 5 5 5 f . .
f f f f f f f f f f f f f f f .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`
    export const moveFaceDown = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. f f f f f f f f f f f f f f f
. . f 5 5 5 5 5 5 5 5 5 5 5 f .
. . . f 5 5 5 5 5 5 5 5 5 f . .
. . . . f 5 5 5 5 5 5 5 f . . .
. . . . . f f f f f f f . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . 8 . . . . . . .
. . . . . . . . 8 . . . . . . .
. . . . . . . . 8 . . . . . . .
. . . . . . 8 8 8 8 8 . . . . .
. . . . . . . 8 8 8 . . . . . .
. . . . . . . . 8 . . . . . . .
. . . . . . . . . . . . . . . .
`

    export const diceToss = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . b b b b b b b b . . .
    . . . . b 1 1 1 1 1 1 1 b b . .
    . . . b 1 1 1 b 1 1 1 b d b . .
    . . b 1 1 1 1 1 1 1 b d d b . .
    . . c b b b b b b b d d b b . .
    . . c b b c c c b b d d d b . .
    . . c b c b b b c b d d d b . .
    . . c b b b b b c b d b d b d .
    . . c b b b c c b b d d d b d .
    . . c b b b b b b b d d b d . .
    . . c b b b c b b b d b d . . .
    . . . c c c c c c c b d . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .`

    export const cupXread = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . c c c c c c c . . . . .
. . . c f f f f f f f c . . . .
. . c f f f 4 5 4 f f f c . . .
. . c c f 4 5 5 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . . d 1 d f d f d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupYread = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . c c c c c c c . . . . .
. . . c f f f f f f f c . . . .
. . c f f f 4 5 4 f f f c . . .
. . c c f 4 5 5 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d d f d d d b c . . .
. . . d 1 d d f d d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupZread = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . c c c c c c c . . . . .
. . . c f f f f f f f c . . . .
. . c f f f 4 5 4 f f f c . . .
. . c c f 4 5 5 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f f f d d b c . . .
. . c d 1 d d d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d d d d b c . . .
. . . d 1 d f f f d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupXassign = bmp`
. . . . . . . . . 4 4 4 4 4 4 4
. . . . . . . . 4 5 5 5 5 5 5 5
. . . . . . . 4 5 4 4 4 4 4 4 4
. . . . . . . 4 5 4 . . . . . .
. . . . c c c 4 5 4 c . . . . .
. . . c f 4 5 5 5 5 5 4 . . . .
. . c f f f 4 5 5 5 4 f c . . .
. . c c f 4 5 4 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . . d 1 d f d f d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupYassign = bmp`
. . . . . . . . . 4 4 4 4 4 4 4
. . . . . . . . 4 5 5 5 5 5 5 5
. . . . . . . 4 5 4 4 4 4 4 4 4
. . . . . . . 4 5 4 . . . . . .
. . . . c c c 4 5 4 c . . . . .
. . . c f 4 5 5 5 5 5 4 . . . .
. . c f f f 4 5 5 5 4 f c . . .
. . c c f 4 5 4 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d d f d d d b c . . .
. . . d 1 d d f d d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupZassign = bmp`
. . . . . . . . . 4 4 4 4 4 4 4
. . . . . . . . 4 5 5 5 5 5 5 5
. . . . . . . 4 5 4 4 4 4 4 4 4
. . . . . . . 4 5 4 . . . . . .
. . . . c c c 4 5 4 c . . . . .
. . . c f 4 5 5 5 5 5 4 . . . .
. . c f f f 4 5 5 5 4 f c . . .
. . c c f 4 5 4 5 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f f f d d b c . . .
. . c d 1 d d d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d d d d b c . . .
. . . d 1 d f f f d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupXwritten = bmp`
4 4 4 4 4 4 4 . . . . . . . . .
5 5 5 5 5 5 5 4 . . . . . . . .
4 4 4 4 4 4 4 5 4 . . . . . . .
. . . . . . 4 5 4 . . . . . . .
. . . . c c 4 5 4 c c . . . . .
. . . c 4 5 5 5 5 5 4 c . . . .
. . c f f 4 5 5 5 4 f f c . . .
. . c c f 4 4 5 4 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . . d 1 d f d f d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupYwritten = bmp`
4 4 4 4 4 4 4 . . . . . . . . .
5 5 5 5 5 5 5 4 . . . . . . . .
4 4 4 4 4 4 4 5 4 . . . . . . .
. . . . . . 4 5 4 . . . . . . .
. . . . c c 4 5 4 c c . . . . .
. . . c 4 5 5 5 5 5 4 c . . . .
. . c f f 4 5 5 5 4 f f c . . .
. . c c f 4 4 5 4 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d f d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d d f d d d b c . . .
. . . d 1 d d f d d d b . . . .
. . . . 1 d d d d d d . . . . .
`
    export const cupZwritten = bmp`
4 4 4 4 4 4 4 . . . . . . . . .
5 5 5 5 5 5 5 4 . . . . . . . .
4 4 4 4 4 4 4 5 4 . . . . . . .
. . . . . . 4 5 4 . . . . . . .
. . . . c c 4 5 4 c c . . . . .
. . . c 4 5 5 5 5 5 4 c . . . .
. . c f f 4 5 5 5 4 f f c . . .
. . c c f 4 4 5 4 4 f c c . . .
. . c d c c c c c c c b c . . .
. . c d 1 d d d d d d b c . . .
. . c d 1 d f f f d d b c . . .
. . c d 1 d d d f d d b c . . .
. . c d 1 d d f d d d b c . . .
. . c d 1 d f d d d d b c . . .
. . . d 1 d f f f d d b . . . .
. . . . 1 d d d d d d . . . . .
`

    export const largeEditIcon = bmp`
    .666666666666666666666666666666.
    66666666666666666666666666666666
    66666666666666666666666666666666
    666666666666666666666666ee666666
    66666666666666666666666e44e66666
    6666666666666666666666ee442e6666
    666666666666666666666e15e222e666
    66666666666666666666e155ee2ee666
    6666666666666666666e155e44eee666
    666666666666666666e155e44eee6666
    ccccccccccccccccce155e44eeeccccc
    bbbbbbbbbbbbbbbbe155e44eeebbbbbb
    bbbbbbbbbbbbbbbe155e44eeebbbbbbb
    111111bbb11111e155e44eeebcbcbcbb
    1111111b11111e155e44eeebbbbbbbcb
    1111111b1111ede5e44eeebbbbbbbbbb
    1111111b1111edde44eeebbbbbbbbbcb
    1111111b1111edddeeeebbbbb1bbbbbb
    1111111b1111eedddeebcbbb111bbbcb
    1111111b1111eeeeee1bbbbbc1cbbbbb
    1111111b11111111111bcbbbbcbbbbcb
    1111111b11111111111bbbbbbbbbbbbb
    111111cbc111111111cbcbbbbbbbbbcb
    ccccccbbbcccccccccbbbcbcbcbcbcbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    cccccccccccccccccccccccccccccccc
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    66666666666666666666666666666666
    b666666666666666666666666666666b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`



export const largeSettingsGear = bmp`
66666666666666666666666666666666
66666666666666666666666666666666
666666666666666dd666666666666666
66666666666666dddd66666666666666
66666dddd666ddbbbbcc666dddd66666
66666dddd666ddbbbbcc666dddd66666
666dddbbbb66ddbbbbcc66dbbbccc666
666dddbbbbccddbbbbccdddbbbccc666
6666ddbbbbbbbbbbbbbbbbbbbbcc6666
66666dbbbbbbbbbbbbbbbbbbbbc66666
666666ccbbddbbccccbbddbbcc666666
666666ccbbddbbc66cbbddbbcc666666
66666dddbbbbcc6666ccbbbbdddd6666
6666ddddbbbbc666666cbbbbdddd6666
666dbbbbbbcc66666666ccbbbbbbc666
6dddbbbbbbc6666666666cbbbbbbccc6
6dddbbbbbbc6666666666cbbbbbbccc6
6dddbbbbbbcc66666666ccbbbbbbccc6
666cccccbbbbc6666666cbbbbcccc666
6666ccccbbbbcc66666ccbbbbccc6666
666666ddbbddbbc66cbbddbbcc666666
666666ddbbddbbccccbbddbbcc666666
66666dbbbbbbbbbbbbbbbbbbbbc66666
6666ddbbbbbbbbbbbbbbbbbbbbcc6666
6666ddbbbbccccbbbbccccbbbbcc6666
6666ddbbbb66ccbbbbcc66bbbbcc6666
66666cccc666ccbbbbcc666cccc66666
66666cccc666ccbbbbcc666cccc66666
66666666666666cccc66666666666666
666666666666666cc666666666666666
66666666666666666666666666666666
66666666666666666666666666666666
`

    export const largeNewProgramIcon = bmp`
    .11111111..............11111111.
    1bbbbbbbb..............bbbbbbbb1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    b..............................b
    ................................
    ...............11...............
    ...............11...............
    ...............11...............
    ...............11...............
    ...........1111111111...........
    ...........1111111111...........
    ...........bbbb11bbbb...........
    ...............11...............
    ...............11...............
    ...............11...............
    ...............bb...............
    ................................
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    1..............................1
    b11111111..............11111111b
    .bbbbbbbb..............bbbbbbbb.
`

    export const sampleFlashingHeart = bmp`
    .ffffffffffffffffffffffffffffff.
    ffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff2ffffffff
    ffffffffffffffffffffff212ff2ffff
    ffffffffffffffffffffff212f212fff
    ffffffffffffffffffffff212212ffff
    fffffffffffffffffffffff2212fffff
    ffffffff222222ffff222222f2222fff
    fffffff22222222ff2222222221112ff
    ffffff22111111222211111122222fff
    fffff2211111111221111111122fffff
    ffff221114444111111444411122ffff
    fff22111422224111142222411122fff
    fff221142ffff241142ffff241122fff
    fff221142ffff241142ffff241122fff
    fff2211142ffff2442ffff2411122fff
    ffff221142fffff22fffff241122ffff
    ffff2211142ffffffffff2411122ffff
    fffff2211142ffffffff2411122fffff
    ffffff2211142ffffff2411122ffffff
    fffffff22111422ff22411122fffffff
    ffffffff2211144224411122ffffffff
    fffffffff22111144111122fffffffff
    ffff222fff221111111122ffffffffff
    fff21112fff2221111222fffffffffff
    ffff2222ffff22211222ffffffffffff
    ffffff2122ffff2222ffffffffffffff
    fffff212212ffff22fffffffffffffff
    ffff212f212fffffffffffffffffffff
    fffff2ff212fffffffffffffffffffff
    fffffffff2ffffffffffffffffffffff
    bffffffffffffffffffffffffffffffb
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const sampleSmileyButtons = bmp`
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111bbbbbbbbbbbbbbbb11111111111
    1111b1111111111111111b1111111111
    1111b1111111111111111b1111111111
    1111b1111114444111111bd111111111
    1111b1111445555441111bd111111111
    1111b1114555555554111bd111111111
    1111b111455f55f554111bd111111111
    1111b114555f55f555411bd111111111
    1111b1145555555555411bd111111111
    1111b1145555555555411bd111111111
    1111b114555f55f555411bd111111111
    1111b1114555ff5554111bd111111111
    1111b1114555555554111bd111111111
    1111b1111445555441111bd111111111
    1111b1111114444111111bd111111111
    1111b111111111111111888811111111
    1111b111111111111118666681111111
    11111bbbbbb1111bbb86611668111111
    111111dddddb11bdd866166166811111
    11111111111b11bd.8661111668d1111
    11111111111db11bd8661661668d1111
    111111111111dbbbd8661661668d1111
    1111111111111ddd18866666688d1111
    11111111111111111188666688d11111
    1111111111111111111888888d111111
    111111111111111111118888d1111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    b111111111111111111111111111111b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    /*
    export const sampleDice = bmp`
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    1111ccccc11111111111111111111111
    111111111c1111111111111111111111
    1111111111c111111111111111111111
    111cccc1111111111111111111111111
    1111111cc1111cccc111111111111111
    111111111111cdb11cc1111111111111
    11111111111cdddb111ccc1111111111
    111111111ccddddb111111c111111111
    11111111cddddddb111111cd11111111
    1111111cdddddddb1111111c11111111
    1111111cddcdddddb111c11c11111111
    1111111cddddddddb111111cd1111111
    11111111cdddddcdb1111111c1111111
    11111111cdddddddbbbb1111cd111111
    11111111cddddddbbbbbbbbb1c111111
    11111111cdddddbbbbcbbbbbbcd11111
    111111111cddbbbbbbbbbbcbbcd11111
    111111111cdbbbbbbbcbbbbbcd111111
    111111111cbbbbcbbbbbbbbcd1111111
    111111111cccbbbbbbcbbccd11111111
    111111111111cccccbbbcd1111111111
    11111111111111111cccd11111111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    1111111111ddddddddddddddddd11111
    1111111111111ddddddddddddd111111
    11111111111111111111111111111111
    b111111111111111111111111111111b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`*/


export const linearGraph1 = bmp`
.111111111111111111111111111111.
11111111111111111111111111111111
11ff1111111111111111111111111111
11ff1111111111111111111111114111
11ff1111111111111111111111144111
11ff1111111111111111111111441111
11ff1111111111111111111114411111
11ff1111111111111111111144111111
11ff1111111111111111111441111111
11ff1111111111111111114411111111
11ff1111111111111111144111111111
11ff1111111111111111441111111111
11ff1111111111111114411111111111
11ff1111111111111144111111111111
11ff1111111111111441111111111111
11ff1111111111114411111111111111
11ff1111111111144111111111111111
11ff1111111111441111111111111111
11ff1111111114411111111111111111
11ff1111111144111111111111111111
11ff1111111441111111111111111111
11ff1111114411111111111111111111
11ff1111144111111111111111111111
11ff1111441111111111111111111111
11ff1114411111111111111111111111
11ff1144111111111111111111111111
11ff1441111111111111111111111111
11ff4411111111111111111111111111
11ff4111111111111111111111111111
11ffffffffffffffffffffffffffff11
11ffffffffffffffffffffffffffff11
1111111111111111111111111111111b
.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

export const linearGraph2 = bmp`
.111111111111111111111111111111.
11111111111111111111111111111111
11ff1111111111111111111111111111
11ff1111111111111111111111141111
11ff1111111111111111111111441111
11ff1111111111111111111114411888
11ff1111111111111111111144188881
11ff1111111111111111111448881111
11ff1111111111111111114888111111
11ff1111111111111111888111111111
11ff1111111111111188441111111111
11ff1111111111118884411111111111
11ff1111111111188144111111111111
11ff1111111118811441111111111111
11ff1111111188114411111111111111
11ff1111111881144111111111111111
11ff1111118811441111111111111111
11ff1111188114411111111111111111
11ff1111881144111111111111111111
11ff1118811441111111111111111111
11ff1188114411111111111111111111
11ff1881144111111111111111111111
11ff1811441111111111111111111111
11ff8814411111111111111111111111
11ff8844111111111111111111111111
11ff8441111111111111111111111111
11ff8441111111111111111111111111
11ff4411111111111111111111111111
11ff4111111111111111111111111111
11ffffffffffffffffffffffffffff11
11ffffffffffffffffffffffffffff11
1111111111111111111111111111111b
.bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

    export const sampleFirefly = bmp`
.ffffffffffffffffffffffffffffff.
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffff444fffffff
fffffffffffffffffffff45154ffffff
ffffffffffffffffffff4511154fffff
ffffffffffffffffffff4511154fffff
ffffffffffffffffffff4511154fffff
fffffffffffffffffffff45554ffffff
ffffffff444fffffffffff444fffffff
fffffff45154ffffffffffffffffffff
ffffff4511154fffffffffffffffffff
ffffff4511154fffffffffffffffffff
ffffff4511154fffffffffffffffffff
fffffff45554ffffffffffffffffffff
ffffffff444fffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
ffffffffffffffffffffffffffffffff
fffffffffffffffffffff444ffffffff
ffffffffffffffffffff45154fffffff
fffffffffffffffffff4511154ffffff
fffffffffffffffffff4511154ffffff
fffffffffffffffffff4511154ffffff
ffffffffffffffffffff45554fffffff
fffffffffffffffffffff444ffffffff
ffffffffffffffffffffffffffffffff
bffffffffffffffffffffffffffffffb
..bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const sampleClapLights = bmp`
    .ffffffff8fffffffffffffffffffff.
    fffffffff8ffffffffffffffffffffff
    fffffffff8ffffffffffffffffffffff
    fffffffff8ffffffffffffffffffffff
    fffffffff8ffffffffffffffffffffff
    fffffffff8ffffffffffffffffffffff
    fffffffffeffffffffffffffffffffff
    ffffffffeeefffffffffffffffffffff
    ffffffffeeefffffffffffffffffffff
    ffffffff444fffffffffffffffffffff
    fffffff45154ffffffff5fffffffffff
    ffffff4511154fffffff5fffffffffff
    ffffff4511154fffffff5fff5fffffff
    ffffff4511154fffffff5ff5ffffffff
    fffffff45554ffffffffff5fffffffff
    ffffffff444fffff444fffffffffffff
    fffffffffffffff44544fff5555fffff
    fffffffffffff44445544fffffffffff
    ffffffffffff4545545544ffffffffff
    ffffffffffff4454554544444fffffff
    ffffffffffff454545544545544fffff
    ffffffffffff4454545545545554ffff
    ffffffffffff45454545545544554fff
    fffff5555fff44545455555554554fff
    ffffffffffff45454555555554454fff
    fffffffff5fff4545555555555454fff
    ffffffff5fffff455555555555454fff
    fffffff5ff5ffff45555555555454fff
    ffffffffff5fffff45555555555454ff
    ffffffffff5ffffff4555555555454ff
    ffffffffffffffffff4445555554554f
    bffffffffffffffffffff4555555554b
    ..bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const sampleRockPaperScissors = bmp`
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111111111111111111111
    11111111111111111111c11111111111
    1111111111111111111c1ccc11111111
    11111111ccc11111111c1111cc111111
    1111111c422c111111c11d1111c11111
    1111ccc42222c11111c111dd11cd1111
    111c42c42c42cd1111c1111111cd1111
    11c422242c42cd1111c1dd111cdd1111
    11c42c242c42cd111c1111d11cd11111
    11c42cc44222cd111c1111111cd11111
    11c222cc442cd111c11dd1111cd11111
    111c2224ccccd111c1111d11cd111111
    1111ccccc1cdcd111cc11111cd111111
    11111111c1cd1cd1111cc11cd1111111
    11111111c1cc11cd11111ccd11111111
    11111111c1cdc11cd111111111111111
    11111111c1cd1c11cd11111111111111
    11111111c1cd11c1cd11ccccc1111111
    11111111c1cd111cd11cddddbc111111
    11111111c1cd111111cd11ddbbc11111
    11111111c1cd11111cd1dddddbbc1111
    111111111cd11111cdddddddbbbcd111
    1111111111111111cddddddbdbbcd111
    1111111111111111cdddddbdbbbcd111
    11111111111111111cdddbdbbbcd1111
    111111111111111111cbbbbbccd11111
    1111111111111111111cccccdd111111
    11111111111111111111111111111111
    11111111111111111111111111111111
    b111111111111111111111111111111b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const sampleTeleportDuck = bmp`
    .111111111111111111111111111111.
    11111111111111111111111111111111
    11111111111111116111111111111111
    11611111111111161611111111611111
    11161111b11111116111116611611111
    11116111111111511111111666111111
    11161611111111111111511611111111
    1111611111fff1111111666161111111
    11161111ff555ff111161116111b1111
    1111611f55fff55f1116111111b1b111
    111111f55f111f55f1611115111b1111
    111111f55f1f1f55f611111111111111
    111111f55f111f55f111166661111111
    1111fffff5fff555f111611116115111
    111f44444f555555fffffff111611111
    1111ffffff5555555555555f11611111
    1111111f5555555555555555f1611111
    1115116f555555554444455556111111
    11111611f5555555555545556f666111
    11116166f5555555555546665f111611
    11111661f5555555556665555fd11161
    1111611666666666665545555fd15161
    111661111f555555544455555fd11611
    1111166661f555555555555566666111
    1111111116666666666666665f111611
    111111111111ffff5555555ffd116111
    1111111111111111fffffffdd1116111
    1111116661111111ff44fd1111156111
    111666111151111f44444fd111111611
    1111161111111111fffffd1111111111
    11111111111111111111111111111111
    b111111111111111111111111111111b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const samplePetHamster = bmp`
    .999999999999999999999999999999.
    99999999999999999999999999999999
    99999999999999999999999999999999
    99999999999999292999999119999999
    99999999999992422299999999999999
    99999999999992222299999999999999
    99991199999999222999999999999999
    99911119999999929999999999999999
    99111111999999999999999999999999
    9999999999fff99999fff99999119999
    999999999fdddfffffdddf9991111999
    999999999fd3ee444ee3df9911111199
    999999999fdeddeeeddedf9999999999
    999999999fed1fddd1fdef9999999999
    99999999fdddffdddffdddf999999999
    9999999fd333ddd2ddd333df99999999
    9999999fd333dfdfdfd333df99999999
    9999999fd333ddfffdd333df99999999
    19999999fdddddddddddddf999999999
    119999999fffdddddddfff9999999999
    1111999999fffffffffff99999999911
    999999999feeedddddeeef9999999999
    999999999feeeedddeeeef9999999999
    999999999ffddfeeefddff9999999999
    777777777feffeeeeeffef6777777777
    777771777feef44f44feef6717777177
    7777777777fffffffffff67777777777
    77717777777777777777777777717777
    77777717777777777717777777151777
    77777151777771777151777777717777
    77777717777777777717777777777777
    b777777777777777777777777777777b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

    export const sampleHeadsOrTails = bmp`
    .111111111111111111111111111111.
    111111111fff11111111111111111111
    11111111f11111111111111111111111
    1111111f11ff11111111111111111111
    111111111f1111111111111111111111
    11111111111111111111111111111111
    11111111111116611111111111111111
    11111111111169961111111111111111
    11111111111169996111111111111111
    11111111111116999611111111111111
    11111111111111699611111111111111
    11111111111111166111f1f111111111
    11111111111111111111f1f111111111
    1111111111111111111f11f111111111
    111111111111111111111f1111111111
    11111111111111111111f11111111111
    11111111111111441111111111111111
    11111111111114541111111111111111
    11111111111114554411111111111111
    11111111111114455444111111111111
    11111111111111445554d11111111111
    11111111114444445555411111111111
    111111111145555445554d1111111111
    1111111114445555545544d111111111
    11111111145544455455544d11111111
    111111111445555444555544d1111111
    1111111111444555545555554d111111
    11111111114544444455555554dd1111
    1111111111455555545555555544d111
    11111111111444444455555555554d11
    11111111111455555455455555555411
    b111111111114444444445555555554b
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

    export const sampleReactionTime = bmp`
    .ffffffffffffffffffff455555554f.
    fffffffffffffffff1ff455555554fff
    fffffffffff1fffff1ff45555554ffff
    fffffffffff1f1fff1ff45555554ffff
    fffff1fffff1f1f1f1ff4555554fffff
    fffff1fffff1f1f1f1f45555554fffff
    fffff1fffff1f1fff1f4555554ffffff
    fffff1fffff1f1ffff45555554f1ffff
    f1fff1fffff1fff4445555554ff1ffff
    f1fff1fffff1ff45555555554ff1ffff
    f1fff1fffffff455555555554ff1ffff
    f1fff1ffffff455555555554fff1ff1f
    f1fff1fffff4555555555554fff1ff1f
    ff1fff1fff45455555555554fff1ff1f
    ff1fff1ff45454555555554ffff1ff1f
    ff1fff1ff44545455555554ffff1ff1f
    ff1fff1ff4545454554554ffff1fff1f
    ff1fff1ff445454554554fffff1fff1f
    ff1fff1ff45454554454ffffff1ff1ff
    ff1fff1ff4454554f44fffffff1ff1ff
    ff1fff1ff454554fffffffffff1ff1ff
    fff1ff1fff4444ffffffffffff1ff1ff
    fff1ff1fffffffffffffffffff1ff1ff
    fff1ffffffffffffffffffffff1ff1ff
    fff1fffffffff4444444ffffff1fffff
    ffffffffffff444444444fffffffffff
    fffffffffffe444444444effffffffff
    ddddddddddfe244444442efddddddddd
    ddddddddddfee2222222eefddddddddd
    dddddddddddfeeeeeeeeefdddddddddd
    ddddddddddddfffffffffddddddddddd
    bddddddddddddddddddddddddddddddb
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`
    export const sampleHotPotato = bmp`
    .ffffffffffffffffffffffffffffff.
    ffffffffffffffff5fffffffffffffff
    ffffffffffffffff55ffffffffffffff
    ffffffffff5f255f22ffffffffffffff
    fffffff25f22f255f2ffffffffffffff
    ffffff522ff22222522ff2ffffffffff
    ffffff5525552542252252ff5f2fffff
    ffffff24252555542252552f5522ffff
    ffff4425455244455252252f55524fff
    ffff444554422444444544525254ffff
    fffff444554ddddddd4444525254ffff
    ffffff54444dddedddd44442525fffff
    ffffff5444dddddddeddd4424222ffff
    fffff45544eddddddddddd42442fffff
    ffffff4544eddeddddddddd44455ffff
    ffffff4544eddddddeddddd44445ffff
    ff54455454eddddddddddded4455ffff
    fff54444444edddddddedddd445fffff
    ffff5522544eeddddddddddd44ffffff
    fffff5524444edddedddddddd4ffffff
    ffffff555444eeddddddedded4ffffff
    fffffffff5544edddddddddde4ffffff
    ffffffffff554edddedddddd44ffffff
    fffffffffff54eedddddeddd44ffffff
    ffffffffffff44eddddddddd44ffffff
    ffffffffffff44eedddddeee44ffffff
    fffffffffffff44eeddeeee44fffffff
    fffffffffffff444eeee44444fffffff
    ffffffffffffff4444444444ffffffff
    ffffffffffffffff44444fffffffffff
    ffffffffffffffffffffffffffffffff
    bffffffffffffffffffffffffffffffb
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.
`

    export const sampleRailCrossingLight = bmp`
    .999999991999999999999999999999.
    99999999999999199999999919999999
    9999ccccc99999999999999999991999
    999c44444c9999999991999991999999
    99c4222224c999999999999999999991
    99c4222224c999999999999999999999
    99c4222224c999999999999999999999
    99c4222224c999999999999999999999
    99c4222224c999999999999999999999
    999c44444c9999999999999999999999
    9999ccccc9999999999999999992d999
    99999bcb99999999999999999bbd2999
    9999ccccc99999999999999bbdddb999
    999c44444c999999999999b2ddbb9999
    99c4888884c999999999bbdd2b999999
    99c4888884c99999999b2ddb99999999
    99c4888884c999999bbdd2b999999999
    99c4888884c9999bb2ddb99999999999
    99c4888884c999bddd2b999999999999
    999c44444c99bbddbb99999999999999
    9999ccccc99bdddb9999999999999999
    99999bcbfbb2dbb99999999999999999
    99999bcbbddd29999999999999999999
    99999cbdddbb99999999999999999999
    9999bbddbb9999999999999999999999
    999b2ddb999999999999999999999999
    999dd2bc999999999999999999999999
    9999bccc999999999999999999999999
    97999ccc999999999999999999999999
    79979ccc999999999999999999999555
    99799ccc999999999999999999999555
    b7777ccceeeeeeeeeeeeeeeeeeeee554
    .bbbbbbbbbbbbbbbbbbbbbbbbbbbb44.
    `
    export const settingsGear = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . d d . . . . . . .
    . . . d d . d b b c . d d . . .
    . . d b b c d b b c d b b c . .
    . . d b b b b b b b b b b c . .
    . . . c b d b c c b d b c . . .
    . . d d b b c . . c b b d d . .
    . d b b b c . . . . c b b b c .
    . d b b b c . . . . c b b b c .
    . . c c b b c . . c b b c c . .
    . . . d b d b c c b d b c . . .
    . . d b b b b b b b b b b c . .
    . . d b b c c b b c c b b c . .
    . . . c c . c b b c . c c . . .
    . . . . . . . c c . . . . . . .
    . . . . . . . . . . . . . . . .
`

    const one = bmp`
. . . . . .
. . f f . .
. f f f . .
. . f f . .
. . f f . .
. . f f . .
. f f f f .
. . . . . .
`

    const two = bmp`
. . . . . .
. . f f . .
. f . . f .
. . . . f .
. . f f . .
. f f . . .
. f f f f .
. . . . . .
`
    const three = bmp`
. . . . . .
. f f f . .
. . . . f .
. . f f f .
. . . . f .
. . . . f .
. f f f . .
. . . . . .
`
    const four = bmp`
. . . . . .
. f . . f .
. f . . f .
. f f f f .
. . . . f .
. . . . f .
. . . . f .
. . . . . .
`
    const five = bmp`
. . . . . .
. f f f f .
. f . . . .
. f f f . .
. . . . f .
. . . . f .
. f f f . .
. . . . . .
`

    export const servo_set_angle = bmp`
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 . . . . 4 . . . . . 
    . . 8 8 8 8 8 . . . 2 . . . . . 
    . . 8 8 8 8 8 . . . 2 4 . . . . 
    . . 8 8 8 8 8 . . . . 2 . . . . 
    . . 8 8 8 8 8 . . . . 2 . . . . 
    . . 8 8 8 8 8 . . . . 2 . . . . 
    . . 8 b b b 8 . . 4 . 2 . 4 . . 
    . . 8 b c b b . . 2 4 2 4 2 . . 
    . . 8 b c c b . . . 2 2 2 . . . 
    . . 8 8 b b c b . . . 2 . . . . 
    . . 8 8 8 8 b c b . . . . . . . 
    . . 8 8 8 8 8 b c b . . . 5 5 5 
    . . 8 8 8 8 8 . b c b . . 5 5 5 
    . . . 8 8 8 . . . b c . . 5 5 4 
    . . . . . . . . . . . b . 4 4 . 
    `

    export const blocks1 = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . 4 5 5 4 . . . . . .
    . . . . . . 4 5 5 4 . . . . . .
    . . . . . . 4 4 4 4 . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const blocks2 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const blocks3 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . 4 4 4 4 . 4 4 4 4 . 4 4 4 4 .
        . 4 5 5 4 . 4 5 5 4 . 4 5 5 4 .
        . 4 5 5 4 . 4 5 5 4 . 4 5 5 4 .
        . 4 4 4 4 . 4 4 4 4 . 4 4 4 4 .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const blocks4 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 5 5 4 . . 4 5 5 4 . . .
        . . . 4 4 4 4 . . 4 4 4 4 . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const blocks5 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 4 4 4 4 . 4 4 4 4 . . . .
        . . . 4 5 5 4 . 4 5 5 4 . . . .
        . . . 4 5 5 4 . 4 5 5 4 . . . .
        . . . 4 4 4 4 . 4 4 4 4 . . . .
        . . . . . . . . . . . . . . . .
        . 4 4 4 4 . 4 4 4 4 . 4 4 4 4 .
        . 4 5 5 4 . 4 5 5 4 . 4 5 5 4 .
        . 4 5 5 4 . 4 5 5 4 . 4 5 5 4 .
        . 4 4 4 4 . 4 4 4 4 . 4 4 4 4 .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const kita_slider = bmp`
        . . . . . . 6 6 6 6 6 . . . . .
        . . . . . 6 6 6 f 6 6 6 . . . .
        . . . . . 6 6 f f f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 9 9 9 9 9 6 . . . .
        . . . . . 6 9 9 9 9 9 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . . . .
        . . . . . 6 6 f c f 6 6 . 5 5 5
        . . . . . 6 6 f f f 6 6 . 5 5 5
        . . . . . 6 6 6 f 6 6 6 . 5 5 4
        . . . . . . 6 6 6 6 6 . . 4 4 .
    `
    export const kita_key_1 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 6 6 6 6 6 6 6 6 . . . . .
        . . 6 6 6 6 6 6 6 6 6 6 . . . .
        . . 6 c f f f f f f c 6 . . f .
        . . 6 f f c c c c f f 6 . f f .
        . . 6 f c f f f f c f 6 . . f .
        . . 6 f c f f f f c f 6 . . f .
        . . 6 f c f f f f c f 6 . f f f
        . . 6 f c f f f f c f 6 . . . .
        . . 6 f f c c c c f f 6 . . . .
        . . 6 c f f f f f f c 6 . . . .
        . . 6 6 6 6 6 6 6 6 6 6 . 5 5 5
        . . . 6 6 6 6 6 6 6 6 . . 5 5 5
        . . . . . . . . . . . . . 5 5 4
        . . . . . . . . . . . . . 4 4 .
    `
    export const kita_key_2 = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . 6 6 6 6 6 6 6 6 . . . . .
        . . 6 6 6 6 6 6 6 6 6 6 . . . .
        . . 6 c f f f f f f c 6 . f f .
        . . 6 f f c c c c f f 6 . . . f
        . . 6 f c f f f f c f 6 . . f .
        . . 6 f c f f f f c f 6 . f . .
        . . 6 f c f f f f c f 6 . f f f
        . . 6 f c f f f f c f 6 . . . .
        . . 6 f f c c c c f f 6 . . . .
        . . 6 c f f f f f f c 6 . . . .
        . . 6 6 6 6 6 6 6 6 6 6 . 5 5 5
        . . . 6 6 6 6 6 6 6 6 . . 5 5 5
        . . . . . . . . . . . . . 5 5 4
        . . . . . . . . . . . . . 4 4 .
    `

    export const kita_rotary = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . 6 6 6 6 6 6 6 . . . . .
        . . . 6 6 6 6 6 6 6 6 6 . . . .
        . . 6 6 6 d d d d d 6 6 6 . . .
        . . 6 6 d f f 1 f f d 6 6 . . .
        . . 6 d f f f 1 f f f d 6 . . .
        . . 6 d f f f 1 f f f d 6 . . .
        . . 6 d f f f f f f f d 6 . . .
        . . 6 d f f f f f f f d 6 . . .
        . . 6 6 d f f f f f d 6 6 . . .
        . . 6 6 6 d d d d d 6 6 6 . . .
        . . . 6 6 6 6 6 6 6 6 6 . 5 5 5
        . . . . 6 6 6 6 6 6 6 . . 5 5 5
        . . . . . . . . . . . . . 5 5 4
        . . . . . . . . . . . . . 4 4 .
    `

    export const kita_rotary_left = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 9 8 . . . . .
    . . . . . 9 9 9 9 9 8 . . . . .
    . . . . 9 9 9 8 . . . . . . . .
    . . . . 9 9 8 . . . . . . . . .
    . . . . 9 9 8 . . . . . . . . .
    . . 9 9 9 9 9 9 8 . . . . . . .
    . . . 9 9 9 9 8 . . . . . . . .
    . . . . 9 9 8 . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const kita_rotary_right = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 8 9 9 9 9 . . . . . .
    . . . . . 8 9 9 9 9 9 . . . . .
    . . . . . . . . 8 9 9 9 . . . .
    . . . . . . . . . 8 9 9 . . . .
    . . . . . . . . . 8 9 9 . . . .
    . . . . . . . 8 9 9 9 9 9 9 . .
    . . . . . . . . 8 9 9 9 9 . . .
    . . . . . . . . . 8 9 9 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const car = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . f f f f f f f f . . . .
    . . . f f 1 1 1 1 1 1 f f . . .
    . . f f 1 1 1 1 1 1 1 1 f f . .
    . . f f 1 1 1 1 1 1 1 d f f . .
    . . f f 1 d d d d d d d f f . .
    . f f f f f f f f f f f f f f .
    . f f 9 f f f f f f f f 9 f f .
    . f 9 1 9 f f f f f f 9 1 9 f d
    . f f 9 f f f f f f f f 9 f f d
    . f f f f f f f f f f f f f f d
    . . f f d . . . . . . . f f d d
    . . f f d . . . . . . . f f d .
    . . f f . . . . . . . . f f . .
    . . . . . . . . . . . . . . . .
`

    export const car_forward = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . c . . . . . . . .
    . . . . . . c 7 c . . . . . . .
    . . . . . c 7 7 7 c . . . . . .
    . . . . c 7 7 7 7 7 c . . . . .
    . . . c 7 7 7 7 7 7 7 c . . . .
    . . . c 7 7 7 7 7 7 7 c . . . .
    . . . c c c 7 7 7 c c c d . . .
    . . . . . c 7 7 7 c d d d . . .
    . . . . . c 7 7 7 c d . . . . .
    . . . . . c 7 7 7 c d . . . . .
    . . . . . c 7 7 7 c d . . . . .
    . . . . . c 7 7 7 c d . . . . .
    . . . . . c c c c c . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`
    export const car_forward_fast = bmp`
    . . . . . . . c . . . . . . . .
    . . . . . . c 7 c . . . . . . .
    . . . . . c 7 7 7 c . . . . . .
    . . . . c 7 7 7 7 7 c . . . . .
    . . . c 7 7 7 7 7 7 7 c . . . .
    . . . c 7 7 7 7 7 7 7 c . . . .
    . . . c c c c c c c c c d . . .
    . . . . . . . . . . . . . . . .
    . . . . . c c c c c . . . . . .
    . . . . . c 7 7 7 c d . . . . .
    . . . . . c c c c c d . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . c 7 7 7 c . . . . . .
    . . . . . c c c c c d . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . c 7 7 7 c d . . . . .    
    `

    export const car_reverse = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . c c c c c . . . . .
    . . . . . . c 7 7 7 c . . . . .
    . . . . . . c 7 7 7 c d . . . .
    . . . . . . c 7 7 7 c d . . . .
    . . . . . . c 7 7 7 c d . . . .
    . . . . . . c 7 7 7 c d . . . .
    . . . . c c c 7 7 7 c c c . . .
    . . . . c 7 7 7 7 7 7 7 c . . .
    . . . . c 7 7 7 7 7 7 7 c . . .
    . . . . . c 7 7 7 7 7 c . . . .
    . . . . . . c 7 7 7 c . . . . .
    . . . . . . . c 7 c . . . . . .
    . . . . . . . . c . . . . . . .
    . . . . . . . . . . . . . . . .
`

    export const car_left_turn = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . c c c . . . . . . . .
    . . . . c 7 7 c . . . . . . . .
    . . . c 7 7 7 c c c c . . . . .
    . . c 7 7 7 7 7 7 7 7 c . . . .
    . c 7 7 7 7 7 7 7 7 7 7 c . . .
    . . c 7 7 7 7 7 7 7 7 7 7 c . .
    . . . c 7 7 7 c c 7 7 7 7 7 c .
    . . . . c 7 7 c d c 7 7 7 7 c .
    . . . . . c c c . . c 7 7 7 c d
    . . . . . . . . . . c 7 7 7 c d
    . . . . . . . . . . c 7 7 7 c d
    . . . . . . . . . . c 7 7 7 c d
    . . . . . . . . . . c 7 7 7 c d
    . . . . . . . . . . c c c c c .
    . . . . . . . . . . . . . . . .
`

    export const car_left_spin = bmp`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . c c c c c . . . . . .
    . . . . c 7 7 7 7 7 c . . . . .
    . . . c 7 7 7 7 7 7 7 c . . . .
    . . c 7 7 7 7 7 7 7 7 7 c . . .
    . . c 7 7 7 c c 7 7 7 7 7 c . .
    c c c 7 7 7 c c c 7 7 7 7 7 c .
    c 7 7 7 7 7 7 7 c c 7 7 7 7 c .
    c 7 7 7 7 7 7 7 c d c 7 7 7 c d
    . c 7 7 7 7 7 c d . c 7 7 7 c d
    . . c 7 7 7 c d . . c 7 7 7 c d
    . . . c 7 c d . . . c 7 7 7 c d
    . . . . c . . . . . c 7 7 7 c d
    . . . . . . . . . . c c c c c .
    . . . . . . . . . . . . . . . .    
    `

    export const car_right_turn = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 c c c 1 1 1 1 1
    1 1 1 1 1 1 1 1 c 7 7 c 1 1 1 1
    1 1 1 1 1 c c c c 7 7 7 c 1 1 1
    1 1 1 1 c 7 7 7 7 7 7 7 7 c 1 1
    1 1 1 c 7 7 7 7 7 7 7 7 7 7 c 1
    1 1 c 7 7 7 7 7 7 7 7 7 7 c 1 1
    1 c 7 7 7 7 7 c c 7 7 7 c 1 1 1
    1 c 7 7 7 7 c 1 c 7 7 c 1 1 1 1
    1 c 7 7 7 c d 1 c c c 1 1 1 1 1
    1 c 7 7 7 c d 1 1 1 1 1 1 1 1 1
    1 c 7 7 7 c d 1 1 1 1 1 1 1 1 1
    1 c 7 7 7 c d 1 1 1 1 1 1 1 1 1
    1 c 7 7 7 c d 1 1 1 1 1 1 1 1 1
    1 c c c c c 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
`

    export const car_right_spin = bmp`
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 c c c c c 1 1 1 1 1 1
    1 1 1 1 c 7 7 7 7 7 c 1 1 1 1 1
    1 1 1 c 7 7 7 7 7 7 7 c 1 1 1 1
    1 1 c 7 7 7 7 7 7 7 7 7 c 1 1 1
    1 c 7 7 7 7 7 c c 7 7 7 c 1 1 1
    c 7 7 7 7 7 c c c 7 7 7 c c c 1
    c 7 7 7 7 c c 7 7 7 7 7 7 7 c d
    c 7 7 7 c d c 7 7 7 7 7 7 7 c d
    c 7 7 7 c d 1 c 7 7 7 7 7 c d 1
    c 7 7 7 c d 1 1 c 7 7 7 c d 1 1
    c 7 7 7 c d 1 1 1 c 7 c d 1 1 1
    c 7 7 7 c 1 1 1 1 1 c d 1 1 1 1
    c c c c c 1 1 1 1 1 1 1 1 1 1 1
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1    
    `

    export const car_stop = bmp`
. . . . . . . . . . . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . d 1 2 2 2 2 2 2 1 d . . . 
. . d 1 2 2 2 2 2 2 2 2 1 d . . 
. d 1 2 2 2 2 2 2 2 2 2 2 1 d . 
. d 1 2 2 2 2 2 2 2 2 2 2 1 d . 
. d 1 2 2 1 1 1 1 1 1 2 2 1 d . 
. d 1 2 2 1 1 1 1 1 1 2 2 1 d . 
. d 1 2 2 2 2 2 2 2 2 2 2 1 d . 
. d 1 2 2 2 2 2 2 2 2 2 2 1 d . 
. . d 1 2 2 2 2 2 2 2 2 1 d . . 
. . . d 1 2 2 2 2 2 2 1 d . . . 
. . . . d 1 1 1 1 1 1 d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
`

    export const car_wall = bmp`
    . . . . . . . . . . . . . . . .
    d d d d d d d d d d d d d d d d
    2 2 2 2 d 2 2 2 2 d 2 2 2 2 d 2
    2 2 2 2 d 2 2 2 2 d 2 2 2 2 d 2
    d d d d d d d d d d d d d d d d
    2 2 d 2 2 2 2 d 2 2 2 2 d 2 2 2
    2 2 d 2 2 2 2 d 2 2 2 2 d 2 2 2
    d d d d d d d d d d d d d d d d
    2 2 2 2 d 2 2 2 2 d 2 2 2 2 d 2
    2 2 2 2 d 2 2 2 2 f f f f f f 2
    d d d d d d d d d f 1 1 1 1 f d
    2 2 d 2 2 2 2 d 2 f d d d d f 2
    2 2 d 2 2 2 2 d f 9 f f f f 9 f
    d d d d d d d d f 1 f f f f 1 f
    . . . . . . . . f f f f f f f f
    . . . . . . . . . f . . . . f .
`

    export const line_sensor = bmp`
    . . . . . . . . . . . . . . . .
    . b d d d d c f f c d d d d b .
    . b d d d d c f f c d d d d b .
    . b d d d d c f f c d d d d b .
    . d d d d d c f f c d d d d d .
    . d d d d d c f f c d d d d d .
    . d d d d d c f f c d d d d d .
    . b d d d d c f f c d d d d b .
    . b d d d d c f c c d d d d b .
    . b d d d d c f c f f f f f f .
    . d d d d d c f c f 1 1 1 1 f .
    . d d d d d c f c f d d d d f .
    . d d d d d c c f 9 f f f f 9 f
    . b d d d d c c f 1 f f f f 1 f
    . b d d d d c c f f f f f f f f
    . . . . . . . . . f . . . . f .
`
    export const line_neither_on = bmp`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . d d . d d . . . . . .
. . . . d 1 d . d 1 d . . . . .
. . . d 1 1 d . d 1 1 d . . . .
. . d 1 1 1 d . d 1 1 1 d . . .
. d 1 1 1 1 d . d 1 1 1 1 d . .
. d 1 1 1 1 d . d 1 1 1 1 d . .
. d 1 1 1 1 d . d 1 1 1 1 d . .
. d 1 1 1 1 d . d 1 1 1 1 d . .
. d 1 1 1 d . . . d 1 1 1 d . .
. d 1 1 d . . . . . d 1 1 d . .
. d 1 d . . . . . . . d 1 d . .
. d d . . . . . . . . . d d . .
. . . . . . . . . . . . . . . .
`
    export const line_left_on = bmp`
    . c f f f c . . . . . . . . . .
    . c f f f c . . . . . . . . . .
    . c f f f b . . . . . . . . . .
    . c f f f d d . d d . . . . . .
    . c f f d 7 d . d 1 d . . . . .
    . c f d 7 7 d . d 1 1 d . . . .
    . b d 7 7 7 d . d 1 1 1 d . . .
    . d 7 7 7 7 d . d 1 1 1 1 d . .
    . d 7 7 7 7 d . d 1 1 1 1 d . .
    . d 7 7 7 7 d . d 1 1 1 1 d . .
    . d 7 7 7 7 d . d 1 1 1 1 d . .
    . d 7 7 7 d . . . d 1 1 1 d . .
    . d 7 7 d b . . . . d 1 1 d . .
    . d 7 d f c . . . . . d 1 d . .
    . d d f f c . . . . . . d d . .
    . b f f f c . . . . . . . . . .`
    export const line_right_on = bmp`
    . . . . . . . . . c f f f c . .
    . . . . . . . . . c f f f c . .
    . . . . . . . . . b f f f c . .
    . . . . . d d . d d f f f c . .
    . . . . d 1 d . d 7 d f f c . .
    . . . d 1 1 d . d 7 7 d f c . .
    . . d 1 1 1 d . d 7 7 7 d b . .
    . d 1 1 1 1 d . d 7 7 7 7 d . .
    . d 1 1 1 1 d . d 7 7 7 7 d . .
    . d 1 1 1 1 d . d 7 7 7 7 d . .
    . d 1 1 1 1 d . d 7 7 7 7 d . .
    . d 1 1 1 d . . . d 7 7 7 d . .
    . d 1 1 d . . . . b d 7 7 d . .
    . d 1 d . . . . . c f d 7 d . .
    . d d . . . . . . c f f d d . .
    . . . . . . . . . c f f f b . .
`
    export const line_both_on = bmp`
    . . . . . c f f f c . . . . . .
    . . . . . c f f f c . . . . . .
    . . . . . b f f f b . . . . . .
    . . . . . d d f d d . . . . . .
    . . . . d 7 d f d 7 d . . . . .
    . . . d 7 7 d f d 7 7 d . . . .
    . . d 7 7 7 d f d 7 7 7 d . . .
    . d 7 7 7 7 d f d 7 7 7 7 d . .
    . d 7 7 7 7 d f d 7 7 7 7 d . .
    . d 7 7 7 7 d f d 7 7 7 7 d . .
    . d 7 7 7 7 d f d 7 7 7 7 d . .
    . d 7 7 7 d f f f d 7 7 7 d . .
    . d 7 7 d b f f f b d 7 7 d . .
    . d 7 d . c f f f c . d 7 d . .
    . d d . . c f f f c . . d d . .
    . . . . . c f f f c . . . . . .
`

    export const line_none_from_left = bmp`
. c f f f c . . . . . . . . . .
. c f f f c . . . . . . . . . .
. c f f f c . . . . . . . . . .
. c f f f c . . . . . . d d . d
. c f f f c . . . . . d 1 d . d
. c f f f c . . . . d 1 1 d . d
. c f f f c . . . d 1 1 1 d . d
. c f f f c . . d 1 1 1 1 d . d
. c f f f c . . d 1 1 1 1 d . d
. c f f f c . . d 1 1 1 1 d . d
. c f f f c . . d 1 1 1 1 d . d
. c f f f c . . d 1 1 1 d . . .
. c f f f c . . d 1 1 d . . . .
. c f f f c . . d 1 d . . . . .
. c f f f c . . d d . . . . . .
. c f f f c . . . . . . . . . .
`

    export const line_none_from_right = bmp`
    . . . . . . . . . . c f f f c .
    . . . . . . . . . . c f f f c .
    . . . . . . . . . . c f f f c .
    d . d d . . . . . . c f f f c .
    d . d 1 d . . . . . c f f f c .
    d . d 1 1 d . . . . c f f f c .
    d . d 1 1 1 d . . . c f f f c .
    d . d 1 1 1 1 d . . c f f f c .
    d . d 1 1 1 1 d . . c f f f c .
    d . d 1 1 1 1 d . . c f f f c .
    d . d 1 1 1 1 d . . c f f f c .
    . . . d 1 1 1 d . . c f f f c .
    . . . . d 1 1 d . . c f f f c .
    . . . . . d 1 d . . c f f f c .
    . . . . . . d d . . c f f f c .
    . . . . . . . . . . c f f f c .    
    `

    /* maybe use these later
    export const rc_high = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f f . . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 5 5 5 5 5 5 5 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 9 6 9 6 9 6 9 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . c f f f f f f f c . . . .
        . . . . c c c c c c c . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const rc_low = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f f . . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 9 6 9 6 9 6 9 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 5 5 5 5 5 5 5 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . c f f f f f f f c . . . .
        . . . . c c c c c c c . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const rc_low_to_high = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f f . . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 6 6 6 5 5 5 5 f . . . .
        . . . f 6 6 6 5 6 6 6 f . . . .
        . . . f 9 6 9 5 9 6 9 f . . . .
        . . . f 6 6 6 5 6 6 6 f . . . .
        . . . f 5 5 5 5 6 6 6 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . c f f f f f f f c . . . .
        . . . . c c c c c c c . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const rc_high_to_low = bmp`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . f f f f f f f . . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . f 5 5 5 5 6 6 6 f . . . .
        . . . f 6 6 6 5 6 6 6 f . . . .
        . . . f 9 6 9 5 9 6 9 f . . . .
        . . . f 6 6 6 5 6 6 6 f . . . .
        . . . f 6 6 6 5 5 5 5 f . . . .
        . . . f 6 6 6 6 6 6 6 f . . . .
        . . . c f f f f f f f c . . . .
        . . . . c c c c c c c . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
    export const loud = bmp`
. . . . . . . . . . . . . . . .
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
. 2 f f 2 2 2 2 2 2 f f f 2 2 .
. 2 f f 2 2 2 2 2 f f 2 f f 2 .
. 2 f f 2 2 2 2 2 f 2 2 2 f 2 .
. 2 f f 2 2 2 2 2 f f 2 f f 2 .
. 2 f f f f 2 2 2 2 f f f 2 2 .
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
. 2 f f 2 2 f 2 2 f f f f 2 2 .
. 2 f f 2 2 f 2 2 f f 2 2 f 2 .
. 2 f f 2 2 f 2 2 f f 2 2 f 2 .
. 2 f f 2 2 f 2 2 f f 2 2 f 2 .
. 2 2 f f f 2 2 2 f f f f 2 2 .
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 .
. . . . . . . . . . . . . . . .
`

    export const quiet = bmp`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
9 9 9 9 1 1 1 9 9 9 9 9 9 9 1 9
9 9 9 1 1 1 1 1 9 9 1 1 1 9 9 9
9 9 1 1 1 1 1 1 9 9 9 1 1 1 9 9
9 9 9 9 1 1 9 9 9 9 9 9 1 1 1 9
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 1 1 1 1 9 9 9 9 9
9 9 9 9 9 9 9 9 1 1 1 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9
9 9 9 7 7 7 7 7 7 9 9 9 9 9 9 9
7 7 7 7 7 7 7 7 7 7 7 9 9 9 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
`

    */
}
