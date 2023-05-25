import Github from "./svgs/github"
import Twitter from "./svgs/twitter"

export function Footer() {
    return <>
        <footer className="footer footer-center p-10 text-base-content rounded">
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <div><a href="https://github.com/light-dawn">
                        <Github className="hover:opacity-50" height={32}></Github>
                    </a></div>
                    <div><a href="https://twitter.com/LoNa_Anyway">
                        <Twitter className="hover:opacity-50" height={32}></Twitter>
                    </a></div>
                </div>
            </div>
            <div>
                <p>Copyright © 2023 - All right reserved by LoNa</p>
            </div>
        </footer>
    </>
}