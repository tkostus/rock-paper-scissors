import React from "react"
import { Typography } from "@material-ui/core"

export default ({ lastGame, gameResult }) => (
    <Typography variant="h6">
        {lastGame.you
            ? `You chose ${lastGame.you}, computer got ${
                  lastGame.cpu
              }. You ${gameResult(lastGame.you, lastGame.cpu)}!`
            : `Please press one of the buttons above to start`}
    </Typography>
)
