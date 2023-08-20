import React from 'react'
import '../../css/Blog.css'
import { blogs, categories, posts } from '../../../constant';

const Blog = () => {
  return (

    <section>
      <div className='blog-div'>
        <div className="container">
          <div className='row '>
            <div className='col-lg-8 border blog mt-1 me-3 mb-4  '>
              {blogs.map((blog) => {
                return (
                  <>
                    <img src={blog?.image} width={'100%'} height={'auto'} />
                    <h2> <a>{blog?.title}</a></h2>
                    <p>{blog?.description}</p>
                    <button className='blog-btn'>Read More <i class="fa-solid fa-arrow-right"></i></button>
                  </>
                )
              })}
            </div>
            <div className='col-lg-3 '>

              <div className='blog-search' >
                <input className='input' placeholder='Search' />
              </div>

              <div className='blog-categories'>
                <h3>Categories</h3>

                <ul >
                  {categories.map((categories) => {
                    return (
                      <>
                        <li>   {categories.item} </li> <hr />
                      </>
                    )
                  })}
                  <li>Wordpress Development</li>
                </ul>

              </div>


              <div className='blog-posts'>
                <h3>Recent Posts</h3>

                <ul >
                  {posts.map((post) => {
                    return (
                      <>
                        <li>   {post.text} </li> <hr />
                      </>
                    )
                  })}
                  <li>  Unraveling the Role of Smart Contracts in Blockchain White Papers  </li>

                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

  )
}

export default Blog