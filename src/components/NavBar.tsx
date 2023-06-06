import { Link } from "react-router-dom"


export function NavBar() {
    return <>
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">{`LoNa's Tech Blogs`}</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li key={0}><Link to="/">博客</Link></li>
                    <li key={1}><Link to="/projects">项目</Link></li>
                    <li key={2}><Link to="/paper">论文</Link></li>
                    <li key={3}><Link to="/assets">知识产权</Link></li>
                    <li key={4}><Link to="/about">关于我</Link></li>
                </ul>
            </div>
        </div>
    </>
}