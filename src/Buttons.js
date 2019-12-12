import React from "react"
import { Button } from "@material-ui/core"
import { DiamondStone, FileOutline, ContentCut } from "mdi-material-ui"
export default ({ nextGame }) => (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
        <Button
            onClick={() => nextGame("Rock")}
            variant="contained"
            color="secondary"
            style={{ marginRight: 5 }}
            endIcon={<DiamondStone />}
        >
            Rock
        </Button>
        <Button
            onClick={() => nextGame("Paper")}
            variant="contained"
            color="secondary"
            style={{ marginRight: 5 }}
            endIcon={<FileOutline />}
        >
            Paper
        </Button>

        <Button
            onClick={() => nextGame("Scissors")}
            variant="contained"
            color="secondary"
            endIcon={<ContentCut />}
        >
            Scissors
        </Button>
    </div>
)
