import React from 'react'

function PostLayout({image, images, title, subtitle, date, children, author}) {
  return (
    <main className='container border border-5'>
      <section className='row col-10 m-auto'>
        <article className='col-12 my-4'>
          <div className='col-12'>
            <h3 style={{ fontSize: '2.5em', textAlign: 'center' }}>{title}</h3>
          </div>
          <div style={{fontSize: "1.1em"}} className='col-12 d-flex justify-content-center'>
              <p>{date}</p>
              <span style={{margin: "0 5%"}}></span>
              <p>By, {author}</p>
          </div>
        </article>
        <article className='col-12 d-flex justify-content-center'>
            <img 
                className='img-fluid'
                src={image} 
                srcSet={images} 
                alt={title} 
                sizes="(max-width: 2000px) 100vw, 2000px"/>
        </article>
        <article className='col'>
            <h4>{subtitle}</h4>
            {children}
        </article>
      </section>
    </main>
  )
}

export default PostLayout