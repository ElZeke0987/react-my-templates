import { Link } from 'react-router-dom';

function NavItem({id,title}){

    return (
        <div className="nav-item">
            <Link to={id}>{title}</Link>
        </div>
    )
}

function Nav({links}){
    return(
        <nav className="faste-nav">
            <div className="nav-container">
                {
                    
                    links.map((lnk, i)=>{
                        return <NavItem key={i} id={lnk.id} title={lnk.title}></NavItem>
                    })
                }
            </div>
        </nav>
    )
}
export default Nav;