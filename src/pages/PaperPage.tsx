export function PaperPage() {
    return (
        <div className="m-12 mt-36">
            <div className="text-6xl font-black">发表的论文（期刊 / 会议）</div>
            <ul className="divide-y">
                <li className="py-16">
                    <div className="card card-side bg-base-100 shadow-2xl p-12">
                        <div className="grid grid-cols-4">
                            <div className="self-center">
                                <p className="text-xl font-bold">2021年-2月</p>
                            </div>
                            <div className="col-span-3 space-y-2">
                                <a href="https://www.sciencedirect.com/science/article/pii/S1361841520302772">
                                    <p className="text-xl font-bold underline">COVID-AL: The diagnosis of COVID-19 with deep active learning</p>
                                </a>
                                <p className="text-green-600">期刊：Medical Image Analysis</p>
                                <p className="text-green-600">第二作者</p>
                                <p className="text-green-600">影响因子: 13.828</p>
                                <p className="text-green-600">被引次数: 72</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="py-16">
                    <div className="card card-side bg-base-100 shadow-2xl p-12">
                        <div className="grid grid-cols-4">
                            <div className="self-center">
                                <p className="text-xl font-bold">2021年-10月</p>
                            </div>
                            <div className="col-span-3 space-y-2">
                                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0925231221005683">
                                    <p className="text-xl font-bold underline">HAL: Hybrid active learning for efficient labeling in medical domain</p>
                                </a>
                                <p className="text-green-600">期刊：Neurocomputing</p>
                                <p className="text-green-600">第二作者</p>
                                <p className="text-green-600">影响因子: 5.779</p>
                                <p className="text-green-600">被引次数: 6</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="py-16">
                    <div className="card card-side bg-base-100 shadow-2xl p-12">
                        <div className="grid grid-cols-4">
                            <div className="self-center">
                                <p className="text-xl font-bold">2022年-5月</p>
                            </div>
                            <div className="col-span-3 space-y-2">
                                <a href="https://www.sciencedirect.com/science/article/abs/pii/S0020025522001335">
                                    <p className="text-xl font-bold underline">FTAP: Feature transferring autonomous machine learning pipeline</p>
                                </a>
                                <p className="text-green-600">期刊：Information Sciences</p>
                                <p className="text-green-600">第二作者</p>
                                <p className="text-green-600">影响因子: 8.233</p>
                                <p className="text-green-600">被引次数: 4</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="py-16">
                    <div className="card card-side bg-base-100 shadow-2xl p-12">
                        <div className="grid grid-cols-4">
                            <div className="flex-auto w-48 self-center">
                                <p className="text-xl font-bold">2022年-12月</p>
                            </div>
                            <div className="col-span-3 space-y-2">
                                <a href="https://ieeexplore.ieee.org/abstract/document/9975277">
                                    <p className="text-xl font-bold underline">Federated Active Learning for Multicenter Collaborative Disease Diagnosis</p>
                                </a>
                                <p className="text-green-600">期刊：IEEE Transactions on Medical Imaging</p>
                                <p className="text-green-600">第三作者</p>
                                <p className="text-green-600">影响因子: 11.037</p>
                                <p className="text-green-600">发表状态: Early Access</p>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PaperPage
