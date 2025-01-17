namespace microcode {
    export class Home extends CursorScene {
        private recordDataBtn: Button
        private liveDataBtn: Button
        private viewBtn: Button

        constructor(app: App) {
            super(app)
        }

        /* override */ startup() {
            super.startup()

            this.liveDataBtn = new Button({
                parent: null,
                // style: ButtonStyles.Transparent,
                icon: "linear_graph_1",
                ariaId: "linear_graph",
                x: -50,
                y: 30,
                onClick: () => {
                    // this.app.popScene()
                    // this.app.pushScene(new SensorSelect(this.app, CursorSceneEnum.LiveDataViewer))
                },
            })

            this.recordDataBtn = new Button({
                parent: null,
                // style: ButtonStyles.Transparent,
                icon: "edit_program",
                ariaId: "Record",
                x: 0,
                y: 30,
                onClick: () => {
                    // this.app.popScene()
                    // this.app.pushScene(new SensorSelect(this.app, CursorSceneEnum.MeasurementConfigSelect))
                },
            })

            this.viewBtn = new Button({
                parent: null,
                // style: ButtonStyles.Transparent,
                icon: "largeDisk",
                ariaId: "View",
                x: 50,
                y: 30,
                onClick: () => {
                    // this.app.popScene()
                    // this.app.pushScene(new DataViewSelect(this.app))
                },
            })

            const btns: Button[] = [this.liveDataBtn, this.recordDataBtn, this.viewBtn]

            this.navigator.addButtons(btns)
        }

        private drawVersion() {
            const font = bitmap.font5
            Screen.print(
                "Prototype 12",
                Screen.RIGHT_EDGE - font.charWidth * "Prototype 12".length,
                Screen.BOTTOM_EDGE - font.charHeight - 2,
                0xb,
                font
            )
        }

        private yOffset = -Screen.HEIGHT >> 1
        draw() {
            Screen.fillRect(
                Screen.LEFT_EDGE,
                Screen.TOP_EDGE,
                Screen.WIDTH,
                Screen.HEIGHT,
                0xc
            )
            this.yOffset = Math.min(0, this.yOffset + 2)
            const t = control.millis()
            const dy = this.yOffset == 0 ? (Math.idiv(t, 800) & 1) - 1 : 0
            const margin = 2
            const OFFSET = (Screen.HEIGHT >> 1) - wordLogo.height - margin
            const y = Screen.TOP_EDGE + OFFSET //+ dy
            Screen.drawTransparentBitmap(
                wordLogo,
                Screen.LEFT_EDGE + ((Screen.WIDTH - wordLogo.width) >> 1)// + dy
                ,
                y + this.yOffset
            )
            Screen.drawTransparentBitmap(
                microbitLogo,
                Screen.LEFT_EDGE +
                    ((Screen.WIDTH - microbitLogo.width) >> 1) + dy
                    ,
                y - wordLogo.height + this.yOffset + margin
            )
            if (!this.yOffset) {
                const tagline = resolveTooltip("tagline")
                Screen.print(
                    tagline,
                    Screen.LEFT_EDGE +
                        ((Screen.WIDTH + wordLogo.width) >> 1) 
                        + dy
                        -
                        microcode.font.charWidth * tagline.length,
                    Screen.TOP_EDGE +
                        OFFSET +
                        wordLogo.height +
                        dy +
                        this.yOffset +
                        1,
                    0xb,
                    microcode.font
                )
            }

            this.recordDataBtn.draw()
            this.liveDataBtn.draw()
            this.viewBtn.draw()

            this.drawVersion()
            super.draw()
        }
    }
}
