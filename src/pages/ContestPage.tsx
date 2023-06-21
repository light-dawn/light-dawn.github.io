import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";

import { Video } from "../components/Video";


export function ContestPage() {
    useEffect(() => {
        initTE({ Carousel, initTE });
    }, []);

    return (
        <ul className="divide-y">
            <li>
                <div className="grid grid-cols-4 m-12 gap-16">
                    <div className="col-span-2 space-y-4 p-4">
                        <p className="text-2xl font-black">Hack Engine AI Hackathon</p>
                        <p className="text-green-500 mb-12">Sephira.ai团队成为Hack Engine首批Selected Teams成员，获得 2.5Fund 30万美元天使轮投资意向。</p>
                        <p className="mb-12">本次比赛是Sephira.ai创建以来的首次比赛，Sephira.ai在此次比赛中专注于AI生成动画引擎内可用的动作序列资产。</p>
                        <p>通过输入文本提示词，可得到通用的动态动作序列文件（FBX / GLB格式），可以直接用于三维引擎。</p>
                    </div>
                    <div
                        id="carouselExampleSlidesOnly"
                        className="relative col-span-2 w-full"
                        data-te-carousel-init
                        data-te-carousel-slide>
                        <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
                            <div
                                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item
                                data-te-carousel-active>
                                <img
                                    src="images/hack_engine_1.jpg"
                                    className="block w-full"
                                    alt="Wild Landscape" />
                            </div>
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img
                                    src="images/hack_engine_2.jpg"
                                    className="block w-full"
                                    alt="Camera" />
                            </div>
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img
                                    src="images/hack_engine_3.jpg"
                                    className="block w-full"
                                    alt="Exotic Fruits" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div className="grid grid-cols-4 m-12 gap-16">
                    <div className="col-span-2 space-y-4 p-4">
                        <p className="text-2xl font-black">真格基金AI+游戏黑客松</p>
                        <p className="text-green-500">Sephira.ai团队在比赛中获得一等奖。</p>
                        <p>构思了以AI大模型解读指令并间接控制强化学习智能体进行足球竞技的超智能足球经理游戏玩法。超智能足球经理的各个环节，从游戏设计开发到实际玩法都紧密结合AI。我们使用图像大模型生成了供参考的美术资产，使用HuggingFace ASR模型读入玩家自然语音，并由语言大模型翻译为游戏系统开放出的控制指令。玩家所掌控的球员自身是强化学习智能体，能够按照环境变化自行采取行动，玩家给出的自然语言指令可以改变球员状态，让其进行激进进攻、后场回防、回复体力等策略。我们的愿景是创造全新的以AI为游戏核心，以指挥和观察战况为游戏乐趣的RTS游戏玩法，让玩家能够真正以“指挥官”的姿态参与到游戏中，而不必疲于进行单位的细微操作，让不熟练于游戏操作的玩家也能享受到实时指挥和近距离观察战局的游戏乐趣。并且，我们在时间紧张和美术资源较为有限的情况下，在球场的墙面上以涂鸦风格绘制了Sephira.ai和ZhenFund的Logo，作为Demo中的彩蛋，希望大家能够喜欢。</p>
                    </div>
                    <div
                        id="carouselExampleSlidesOnly"
                        className="relative col-span-2 w-full"
                        data-te-carousel-init
                        data-te-carousel-slide>
                        <div className="relative overflow-hidden after:clear-both after:block after:content-['']">
                            <div
                                className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item
                                data-te-carousel-active>
                                <img
                                    src="images/hack_engine_1.jpg"
                                    className="block w-full"
                                    alt="Wild Landscape" />
                            </div>
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img
                                    src="images/hack_engine_2.jpg"
                                    className="block w-full"
                                    alt="Camera" />
                            </div>
                            <div
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                data-te-carousel-item>
                                <img
                                    src="images/hack_engine_3.jpg"
                                    className="block w-full"
                                    alt="Exotic Fruits" />
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li>
                <div>
                    <Video></Video>
                </div>
            </li>
        </ul>

    )
}

export default ContestPage