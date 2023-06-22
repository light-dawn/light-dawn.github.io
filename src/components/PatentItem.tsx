import React from "react"


type PatentItemProps = {
    thumbnail: string,
    title: string,
    publicID: string,
    publicDate: string,
    authorOrder: string,
    abstract: string,
    isEmpowered: boolean
}


export const PatentItem: React.FC<PatentItemProps> = (props: PatentItemProps) => {

    const empower = props.isEmpowered ? "（授权）" : ""

    return (
        <div className="card card-side bg-base-100 shadow-2xl p-12">
            <div className="grid grid-cols-4">
                <figure className="w-auto"><img src={props.thumbnail} alt="Movie"/></figure>
                <div className="card-body col-span-3">
                    <p className="text-2xl font-bold">{props.title}{empower}</p>
                    <p className="text-green-600">公开号{empower}：{props.publicID}</p>
                    <p className="text-green-600">公开日{empower}：{props.publicDate}</p>
                    <p className="text-green-600">发明人顺位{empower}：{props.authorOrder}</p>
                    <p className="text-green-600">摘要{empower}：{props.abstract}</p>
                </div>
            </div>
        </div>
    )
}