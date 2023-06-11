import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";


export function ActivityPage() {
    useEffect(() => {
        initTE({ Carousel, initTE });
    }, []);

    return (
        <div className="grid grid-cols-4 m-12 gap-16">
            <div className="col-span-2 space-y-4 p-4">
                <p className="text-3xl font-black">Hack Engine AI Hackathon</p>
                <span className="flex">
                    <p>组建 Sephira.ai 团队，专注于</p>
                    <p className="text-green-500">AI生成动作资产。</p>
                </span>
                <p>通过输入文本提示词，可得到通用的动态动作序列文件（FBX / GLB格式），可以直接用于三维引擎。</p>
                <p className="text-green-500">成为Hack Engine首批Selected Teams成员，获得 2.5Fund 30万美元天使轮投资意向。</p>
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

    )
}

export default ActivityPage