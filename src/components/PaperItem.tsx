import React from "react"


type PaperItemProps = {
    date: string,
    url: string,
    title: string,
    journal: string,
    authorOrder: string,
    influenceFactor: string,
    sitedInfo: string
}


export const PaperItem: React.FC<PaperItemProps> = (props: PaperItemProps) => {
    return (
        <div className="card card-side bg-base-100 shadow-2xl p-12">
            <div className="grid grid-cols-4">
                <div className="self-center">
                    <p className="text-xl font-bold">{props.date}</p>
                </div>
                <div className="col-span-3 space-y-2">
                    <a href={props.url}>
                        <p className="text-xl font-bold underline">{props.title}</p>
                    </a>
                    <p className="text-green-600">发表期刊：{props.journal}</p>
                    <p className="text-green-600">作者顺位：{props.authorOrder}</p>
                    <p className="text-green-600">影响因子：{props.influenceFactor}</p>
                    <p className="text-green-600">被引次数：{props.sitedInfo}</p>
                </div>
            </div>
        </div>
    )
}