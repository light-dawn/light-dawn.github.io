import { PaperItem } from "../components/PaperItem"


export function PaperPage() {
    return (
        <div className="m-12 mt-36">
            <div className="text-6xl font-black">发表的论文（期刊 / 会议）</div>
            <ul className="divide-y">
                <li className="py-16">
                    <PaperItem
                        date="2021年-2月"
                        url="https://www.sciencedirect.com/science/article/pii/S1361841520302772"
                        title="COVID-AL: The diagnosis of COVID-19 with deep active learning"
                        journal="Medical Image Analysis"
                        authorOrder="第二作者"
                        influenceFactor="13.828"
                        sitedInfo="72"
                    />
                </li>

                <li className="py-16">
                    <PaperItem
                        date="2021年-10月"
                        url="https://www.sciencedirect.com/science/article/abs/pii/S0925231221005683"
                        title="HAL: Hybrid active learning for efficient labeling in medical domain"
                        journal="Neurocomputing"
                        authorOrder="第二作者"
                        influenceFactor="5.779"
                        sitedInfo="6"
                    />
                </li>

                <li className="py-16">
                    <PaperItem
                        date="2022年-5月"
                        url="https://www.sciencedirect.com/science/article/abs/pii/S0020025522001335"
                        title="FTAP: Feature transferring autonomous machine learning pipeline"
                        journal="Information Sciences"
                        authorOrder="第二作者"
                        influenceFactor="8.233"
                        sitedInfo="4"
                    />
                </li>

                <li className="py-16">
                    <PaperItem
                        date="2022年-12月"
                        url="https://ieeexplore.ieee.org/abstract/document/9975277"
                        title="Federated Active Learning for Multicenter Collaborative Disease Diagnosis"
                        journal="IEEE Transactions on Medical Imaging"
                        authorOrder="第三作者"
                        influenceFactor="11.037"
                        sitedInfo="Early Access"
                    />
                </li>

            </ul>
        </div>
    )
}

export default PaperPage
