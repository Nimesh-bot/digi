import React from 'react'
import Disqus from "disqus-react"

const Blog = () => {
    const disqusShortname = "digi-school"
    const disqusConfig = {
      url: "http://localhost:3000",
      identifier: "article-id",
      title: "Digi School Discussions"
    }

    return (  
        <div className='flex flex-col gap-y-16 mt-20 px-20 border-none selection:border-none'>
            <Disqus.DiscussionEmbed
                className="px-4 py-2 selection:border-none"    
                shortname={disqusShortname}
                config={disqusConfig}
            />
        </div>
    )
}

export default Blog