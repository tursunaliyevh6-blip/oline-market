'use client'

import { usePathname } from "next/navigation"
import Navbar from "./Navbar"

const NavProvider = () => {

    const location = usePathname()

    if (location.startsWith('/admin')) {
        return ''
    }

    else {
        return <Navbar />
    }
}

export default NavProvider