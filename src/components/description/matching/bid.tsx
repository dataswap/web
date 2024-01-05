import React from "react"
import { MatchingOverviewType } from "@dataswapjs/dataswapjs"
import { convertDataToItems, Descriptions } from "@unipackage/webkit"

interface IProps {
    data: MatchingOverviewType
}
export function MatchingBidsDescription({ data }: IProps) {
    const descriptionItems = convertDataToItems(
        data,
        {},
        {
            keyWhitelist: [],
            extra: {
                bidsCount: data.bids ? Object.values(data.bids).length : 0,
            },
        }
    )
    return <Descriptions title="Bids Info" items={descriptionItems} />
}
