import React from "react";
import { Alert } from "evergreen-ui";

export const Underdev = () => {
    return(
        <div>
            <div className="horizontalcenter">
                <div className="flexiblerow">
                    <Alert intent="none" title="Sorry! This page is under development" marginBottom={32} ></Alert>
                </div>
            </div>
        </div>
    )
}