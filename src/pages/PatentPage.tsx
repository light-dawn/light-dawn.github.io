import { PatentItem } from "../components/PatentItem"


export function PatentPage() {
    return (
        <div className="m-12 mt-36">
            <div className="text-6xl font-black">知识产权</div>
            <ul className="divide-y">

                <li className="py-16">
                    <PatentItem
                        publicDate="2022.08.30"
                        thumbnail="/images/patents_thumbnail/fjljsbyjs.png"
                        title="一种飞机零件识别与计数方法及检测系统"
                        publicID="CN114972967A"
                        authorOrder="第二发明人"
                        abstract="本发明涉及一种飞机零件识别与计数方法及检测系统，视觉检测系统采集传送带上零件图像，零件图像送入训练后零件识别模型获得零件分类标签图像，零件分类标签图像输入由多分支深度卷积网络构成的飞机零件计数模型获得零件密度图，对零件密度图进行积分得到零件估计个数。本发明可以大幅度提高飞机零件识别与计数效率，避免人为识别与计数或者传统识别计数方法造成的误差；同时不需要其他的成本投入，只需使用摄像头提取飞机零件平铺图像，通过软件算法对图片进行处理即可。"
                    />
                </li>

                <li className="py-16">
                    <PatentItem
                        publicDate="2022.03.22"
                        thumbnail="/images/patents_thumbnail/kjsxjqxx.png"
                        title="一种基于可解释机器学习的有效生理学特征选择和医学因果推理方法"
                        publicID="CN114220549A"
                        authorOrder="第三发明人"
                        abstract="本发明揭示了一种基于可解释机器学习的有效生理学特征选择和医学因果推理方法，包括从电子病历中采集医学数据；通过多种特征选择方法将特征空间解耦成多个有效特征的组合；比较不同的特征选择方法，说明在因果推理领域采用SHAP value的合理性；基于SHAP对模型特征进行评估，分析特征空间与预测结果间的关联；将因果信息纳入特征空间，构建可解释机器学习模型；根据不同的因果模型，用各种Shapley Values提供合理的解释；输出每个特征的重要程度、对样本的贡献度和与预测结果的因果关系。本发明实现了根据有效特征来解释病情发展和进行疾病推理，提高了模型的效果和可解释性以及疾病诊断的准确性。"
                    />
                </li>

            </ul>
        </div>
    )
}

export default PatentPage