export function NavBar() {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{`LoNa's Tech Blogs`}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>博客</a></li>
                    <li><a>项目</a></li>
                    <li><a>我</a></li>
                </ul>
            </div>
        </div>
    </>
}