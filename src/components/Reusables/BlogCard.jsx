import React from 'react'

const BlogCard = ({ src, title }) => {
  return (
    <div className='w-full md:w-72 h-full rounded-md'>  
        <iframe 
            title={title}
            src={src}
            className='w-full h-full rounded-md'
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
        />
        <h1 className='text-md px-4 font-medium text-black'>{title}</h1>
    </div>
  )
}

export default BlogCard