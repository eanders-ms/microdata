namespace microcode {
    /**
     * Choose between viewing:
     *      Metadata of the recoreded data
     *      A tabular view of the recorded data
     *      A graph of the recorded data
     */
    export class DataViewSelect extends CursorSceneWithPriorPage {
        private metaDataBtn: Button
        private dataViewBtn: Button
        private graphViewBtn: Button

        constructor(app: App) {
            super(app, function () {app.popScene(); app.pushScene(new Home(this.app))})
        }

        /* override */ startup() {
            super.startup()

            //---------
            // Control:
            //---------

            if (FauxDataLogger.isEmpty) {
                control.onEvent(
                    ControllerButtonEvent.Pressed,
                    controller.A.id,
                    () => {
                        this.app.popScene()
                        this.app.pushScene(new SensorSelect(this.app, CursorSceneEnum.MeasurementConfigSelect))
                    }
                )
            }

            this.metaDataBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "largeSettingsGear",
                ariaId: "Meta Data",
                x: -50,
                y: 30,
                onClick: () => {
                    this.app.popScene()
                    this.app.pushScene(new TabularDataViewer(this.app, DATA_VIEW_DISPLAY_MODE.METADATA_VIEW))
                },
                boundaryColor: 7,
            })

            this.dataViewBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "largeDisk",
                ariaId: "View Data",
                x: 0,
                y: 30,
                onClick: () => {
                    this.app.popScene()
                    this.app.pushScene(new TabularDataViewer(this.app, DATA_VIEW_DISPLAY_MODE.TABULAR_DATA_VIEW))
                },
                boundaryColor: 7,
            })

            this.graphViewBtn = new Button({
                parent: null,
                style: ButtonStyles.Transparent,
                icon: "linear_graph_2",
                ariaId: "View Graph",
                x: 50,
                y: 30,
                onClick: () => {
                    this.app.popScene()
                    this.app.pushScene(new GraphGenerator(this.app))
                },
                boundaryColor: 7,
            })

            this.navigator.addButtons([this.metaDataBtn, this.dataViewBtn, this.graphViewBtn])
        }

        draw() {
            Screen.fillRect(
                Screen.LEFT_EDGE,
                Screen.TOP_EDGE,
                Screen.WIDTH,
                Screen.HEIGHT,
                0xC
            )

            if (FauxDataLogger.isEmpty) {
                screen.printCenter("No data has been recorded", 5)
                screen.printCenter("Press A to Record some!", Screen.HALF_HEIGHT)
                return;
            }

            else {
                screen.printCenter("Recorded Data Options", 5)
                this.metaDataBtn.draw()
                this.dataViewBtn.draw()
                this.graphViewBtn.draw()
            }

            super.draw()
        }
    }
}