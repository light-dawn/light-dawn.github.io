import Image from "next/image"


export function Footer() {
    return <>
        <footer className="footer footer-center p-10 text-base-content rounded">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/light-dawn">
                        <Image width="24" height="24" src="/github-mark.png" alt="github"></Image>
                    </a>
                    
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by LoNa</p>
            </div>
        </footer>
    </>
}