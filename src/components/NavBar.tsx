import Link from "next/link";


export function NavBar() {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{`LoNa's Tech Blogs`}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li key={0}><Link href="/">博客</Link></li>
                    <li key={1}><Link href="/projects">项目</Link></li>
                    <li key={2}><Link href="/papers">论文</Link></li>
                    <li key={3}><Link href="/assets">知识产权</Link></li>
                    <li key={4}><Link href="/about">关于我</Link></li>
                </ul>
            </div>
        </div>
    </>
}