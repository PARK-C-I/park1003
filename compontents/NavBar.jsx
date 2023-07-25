import Link from 'next/link';
import styles from './navbar.module.css'
const menulist = [
    {id:1, title:'Home', url:'/'},
    {id:2, title:'Photofolio', url:'/protfolio'},
    {id:3, title:'About', url:'/about'},
    {id:4, title:'Post', url:'/post'},
    {id:5, title:'Contact', url:'/contact'},
]

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {
                    menulist.map (item => <li key={item.id}>
                        <Link href={item.url}>{item.title}
                        </Link>
                        </li>)
                }
            </ul>            
        </nav>
    );
};

export default NavBar;