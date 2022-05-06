import React from 'react'
import Disqus from "disqus-react"
import Heading from '../components/Reusables/Heading'

const disqusShortname = "digi-school"
const disqusConfig = {
  url: "http://localhost:3000",
  identifier: "article-id",
  title: "Digi School Discussions"
}

const Blogs = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between px-4 md:px-8 lg:px-20'>
      <div className='w-full flex flex-col gap-y-8 '>
        <Heading heading5="Blogs" heading1="get updated with us" />

        <Disqus.DiscussionEmbed
          className="w-full px-4 py-2 selection:border-none"    
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    </div>
    //     <div className='flex-1 h-full flex flex-col justify-center'>
    //         <div className='flex flex-col gap-y-8 '>
    //             <Heading heading5="Blogs" heading1="get updated with us" />
    //             <div className='w-full flex gap-x-8 flex-wrap gap-y-8'>
    //                 {
    //                   blogData.map((blog, index) => (
    //                     <BlogCard key={index} src={blog.source} title={blog.title} />
    //                   ))  
    //                 }
    //             </div>
    //         </div>
    //     </div>
  )
}

export default Blogs