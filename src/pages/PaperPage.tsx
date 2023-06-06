export function PaperPage() {
    return (
        <div>
            <div>发表的论文（期刊 / 会议）</div>
            <ul className="divide-y">
                <li className="py-4">
                    <div className="space-y-2">
                        <a href="https://www.sciencedirect.com/science/article/pii/S1361841520302772">
                            <p className="text-2xl font-bold">COVID-AL: The diagnosis of COVID-19 with deep active learning</p>
                        </a>
                        <p>Medical Image Analysis</p>
                        <p>第二作者</p>
                        <p>影响因子: 13.828</p>
                        <p>2021 - 02</p>
                    </div>
                </li>
                <li className="py-4">
                    <div className="space-y-2">
                        <a href="https://ieeexplore.ieee.org/abstract/document/9975277">
                            <p className="text-2xl font-bold">Federated Active Learning for Multicenter Collaborative Disease Diagnosis</p>
                        </a>
                        <p>IEEE Transactions on Medical Imaging</p>
                        <p>第三作者</p>
                        <p>影响因子: 11.037</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PaperPage
