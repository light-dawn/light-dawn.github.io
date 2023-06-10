import { useEffect } from "react";
import { Carousel, initTE } from "tw-elements";


export function ActivityPage() {
    useEffect(() => {
        initTE({ Carousel, initTE });
    }, []);

    return (
        <div
            id="carouselExampleSlidesOnly"
            className="relative"
            data-te-carousel-init
            data-te-carousel-slide>
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
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

    )
}

export default ActivityPage