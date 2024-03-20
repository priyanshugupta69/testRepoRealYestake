import React from 'react'

const View = () => {
  return (
    <section className="container mx-auto">
        <div className="grid md:grid-cols-1 w-full aspect-video ">
        <iframe
                  title="YouTube Video"  
                  src="https://my.matterport.com/show/?m=RsKKA9cRJnj&back=1"
                  allowFullScreen
                  className='w-full h-full  rounded-[16px]'
                //   width={1224}
                // height={599}
                ></iframe>
        </div>
    </section>
  )
}

export default View