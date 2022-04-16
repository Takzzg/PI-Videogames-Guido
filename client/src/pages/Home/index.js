import React from "react"

import { raw } from "../../themes"

export const Home = () => {
    return (
        <div>
            Home
            {raw.map((c) => (
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: `#${c.hex}`
                    }}
                />
            ))}
        </div>
    )
}
