import React from "react"
import { Descriptions } from "antd"
import { ValueFields } from "@unipackage/utils"
import {
    DescriptionsItemTypeWithOptionalChildren,
    convertDataToDescriptionsItems,
} from "@unipackage/webkit"
import Link from "next/link"
import {
    config_datasetDetailPageRoot,
    config_matchingDetailPageRoot,
} from "../../../config/links"
import { MatchingTarget } from "@dataswapjs/dataswapjs"

interface IProps {
    data: ValueFields<MatchingTarget>
}

function generateSpecialItem(data: ValueFields<MatchingTarget>): {
    [key in keyof MatchingTarget]?: DescriptionsItemTypeWithOptionalChildren
} {
    return {
        datasetID: {
            children: (
                <Link
                    href={`${config_datasetDetailPageRoot}/${data.datasetID}`}
                >
                    {data.datasetID}
                </Link>
            ),
        },
        matchingId: {
            children: (
                <Link
                    href={`${config_matchingDetailPageRoot}/${data.matchingId}`}
                >
                    {data.matchingId}
                </Link>
            ),
        },
        cars: {
            children: data.cars.join(","),
        },
        dataType: {
            children: data.dataType ? "MappingFiles" : "Source",
        },
    }
}

export function MatchingTargetDescription({ data }: IProps) {
    const descriptionItems = convertDataToDescriptionsItems(
        data,
        generateSpecialItem(data),
        {
            //@ts-ignore
            keyBlacklist: ["id", "_id", "__v"],
        }
    )
    return (
        <Descriptions title="Matching Target Info" items={descriptionItems} />
    )
}
