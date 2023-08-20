import React from 'react';
import '../css/Articles.css';
import { articles } from '../../constant';

const Articles = () => {
    return (
        <div className=' container-fluid articles'>
            <div className=' row back'>
                <div className="d-flex articles-text ">
                    <h4>Our Recent Articles</h4>
                    <button className='read-btn'> Read More Articles</button>
                </div>

                <div className="container">
                    <div className="row main-card">
                        {articles.map((article) => {
                            return (
                                <div className="col-md-4  article-card " style={{ width: '24rem', height: '24rem' }}>
                                    <div className="card rounded-0 ">
                                        <img src={article?.image}
                                            className="card-img-top  rounded-0 " alt="..." />
                                        <div className="card-body">
                                            <span className="card-title">
                                                <a>{article?.title}</a>
                                            </span>

                                        </div>
                                        <a className='a'>Read More <i className="fa-solid fa-arrow-right-long"></i></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Articles