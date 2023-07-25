import Folio from '@/compontents/Folio';
import styles from './protfolio.module.css'

const dataList = [
    {id:1, title:'프로젝트1', imgurl:'/images/folio/img01.jpg', desc:'프로젝트1에 대한 설명'},
    {id:2, title:'프로젝트2', imgurl:'/images/folio/img02.jpg', desc:'프로젝트2에 대한 설명'},
    {id:3, title:'프로젝트3', imgurl:'/images/folio/img03.jpg', desc:'프로젝트3에 대한 설명'},
]

const Protfolio = () => {
    return (
        <section id='container' className={styles.protfolio}>
            <div className="inner">
                <h2>Protfolio</h2>
                <div className={styles.list}>
                    {
                        dataList.map(item => <Folio key={item.id} {...item} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Protfolio;