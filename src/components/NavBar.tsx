import { Link } from "react-router-dom"


export function NavBar() {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{`墨璇的个人主页`}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li key={0}><Link to="/">博客</Link></li>
                    <li key={1}><Link to="/contest">赛事</Link></li>
                    <li key={2}><Link to="/paper">论文</Link></li>
                    <li key={3}><Link to="/patent">知识产权</Link></li>
                    <li key={4}><Link to="/about">关于我</Link></li>
                </ul>
            </div>
        </div>
    </>
}