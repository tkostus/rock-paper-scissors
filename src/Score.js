import React from "react"
import { Typography } from "@material-ui/core"

export default ({ score }) => (
    <Typography variant="h1">
        {score.you}:{score.cpu}
    </Typography>
)
