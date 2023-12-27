'use client'

import { ThreeDots } from "react-loader-spinner"

export default function Processing() {
    return (
        <ThreeDots
            visible={true}
            height=""
            width="120"
            color="#1674F1"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px"
            }}
            wrapperClass=""
        />
    )
}