import React from "react"
import { Alert } from "evergreen-ui"

export function Feedback() {
    const [value, setValue] = React.useState('')
    return <>
        <div className="horizontalcenter">
            <Alert intent="none" title="Sorry! This page is under development" marginBottom={32} ></Alert>
        </div>
    </>
  }