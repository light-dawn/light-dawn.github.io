import React from "react"


type PatentItemProps = {
    thumbnail: string,
    title: string,
    publicID: string,
    publicDate: string,
    authorOrder: string,
    abstract: string
}


export const PatentItem: React.FC<PatentItemProps> = (props: PatentItemProps) => {
    return (
        <div className="card card-side bg-base-100 shadow-2xl p-12">
            <div className="grid grid-cols-4">
                <figure className="w-auto"><img src={props.thumbnail} alt="Movie"/></figure>
                <div className="card-body col-span-3">
                    <p className="text-2xl font-bold">{props.title}</p>
                    <p className="text-green-600">公开号：{props.publicID}</p>
                    <p className="text-green-600">公开日：{props.publicDate}</p>
                    <p className="text-green-600">发明人顺位：{props.authorOrder}</p>
                    <p className="text-green-600">摘要：{props.abstract}</p>
                </div>
            </div>
        </div>
    )
}