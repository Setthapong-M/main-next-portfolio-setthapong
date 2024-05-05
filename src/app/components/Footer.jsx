import React from 'react'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p className='text-center bg-grey-black text-white py-4'>Copyright © {currentYear} Setthapong M.</p>
        </footer>
    )
}

export default Footer