import React from "react"
import { InferGetServerSidePropsType, NextPageContext } from "next"
import { Button } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { useRouter } from "next/router"
import DatasetBasicTable from "../basic/table/dataset"
import { defaultTableQueryParams } from "../../config/params"
import { useSelector } from "react-redux"

export async function getServerSideProps(context: NextPageContext) {
    return {
        props: {},
    }
}

export default function IndexPage({}: InferGetServerSidePropsType<
    typeof getServerSideProps
>) {
    const router = useRouter()
    const network = useSelector(
        (state: { network: { network: string } }) => state.network.network
    )

    const onClick = () => {
        router.push("/dataset/submit/dataset")
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h4>Dataset List</h4>
                <div style={{ marginLeft: "auto" }}>
                    <Button type="text" htmlType="button" onClick={onClick}>
                        <PlusOutlined style={{ color: "black" }} />
                        Create Dataset
                    </Button>
                </div>
            </div>
            {
                <DatasetBasicTable
                    queryParam={{
                        network,
                        queryFilter: {
                            ...defaultTableQueryParams,
                        },
                    }}
                />
            }
        </>
    )
}
