import React from 'react'

const MapView = () => {
  return (
    <section className="container mx-auto">
        <div className=" w-full aspect-video">
                <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11141.058633269495!2d76.52363025994042!3d31.713105043352662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699980312632!5m2!1sen!2sin"
                
              // style={{ border: 0, aspectRatio: 1 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className='w-full h-full rounded-[16px]'
            ></iframe>
        </div>
      
    </section>
  )
}

export default MapView