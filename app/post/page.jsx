import Postitem from '@/compontents/Postitem';
import styles from './post.module.css'
import {use} from 'react';

const getData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}

const Post = ({item}) => {
    const post = use(getData())
    
    return (
        <section className='con'>
            <div className="inner">
                <h2>비동기처리 post</h2>
                <ul className={styles.list}>
                    {
                        post.map(item => <Postitem key = {item.id} item={item} />)
                    }
                </ul>
            </div>
            
        </section>
    );
};

export default Post;
