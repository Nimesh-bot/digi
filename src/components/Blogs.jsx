import React from 'react'
import BlogCard from './Reusables/BlogCard'
import Heading from './Reusables/Heading'

const blogData = [
  {
    id: 1,
    source: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdigischool.global%2Fposts%2F152253977284511&show_text=true&width=500",
    title: 'Admission Opens',
    from: 'facebook'
  },
  {
    id: 2,
    source: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdigischool.global%2Fposts%2F152029090640333&show_text=true&width=500",
    title: 'Elite grand school',
    from: 'facebook'
  }
]

const Blogs = () => {
  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full justify-between items-center px-4 lg:px-20'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Blogs" heading1="get updated with us" />
                <div className='w-full flex gap-x-8 flex-wrap gap-y-8'>
                    {
                      blogData.map((blog, index) => (
                        <BlogCard key={index} src={blog.source} title={blog.title} />
                      ))  
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs