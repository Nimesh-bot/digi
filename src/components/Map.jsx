import React from 'react'

const Map = () => {
  return (
    <div>
        <iframe 
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.397701106857!2d85.32128601530613!3d27.70500453220117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1970da5c8f13%3A0xa6fc201183f0cfb2!2sDigi%20School%20Global!5e0!3m2!1sen!2snp!4v1650555219475!5m2!1sen!2snp" 
            className='rounded-md mx-auto'
            width="90%" 
            height="600" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
        />
    </div>
  )
}

export default Map