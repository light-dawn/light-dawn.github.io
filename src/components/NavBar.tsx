import Link from "next/link";

export function NavBar() {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{`LoNa's Tech Blogs`}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href="/">Blog</Link></li>
                    <li><Link href="/project">Project</Link></li>
                    <li><Link href="/about">About</Link></li>
                </ul>
            </div>
        </div>
    </>
}