import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'

export default function Navbar() {
    const router = useRouter()
    function handleClickJp() {
        router.push(router.asPath, router.asPath, {locale: 'ja-JP'})
    }

    function handleClickEn() {
        router.push(router.asPath, router.asPath, {locale: 'en-US'})
    }

  return (
    <nav className="navbar navbar-expand-md navbar-light border-bottom">
    <div className="container">
     <Link href="/"><a className="navbar-brand">Ecotowari</a></Link>
        <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar" aria-controls="collapseNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapseNavbar">
            <ul className="navbar-nav ms-auto">
        
            </ul>
            <ul className="navbar-nav ms-auto">
                 <li className="nav-item active">
                     <Link href="/mission"><a className="nav-link">Our Mission</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/get-sticker"><a className="nav-link">Get Sticker</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/news"><a className="nav-link">Latest News</a></Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact"><a className="nav-link">Contact</a></Link>
                </li>
                <li className="nav-item">
                 <a className="nav-link" onClick={()=>handleClickJp()}>jp</a>
                </li>
                <li className="nav-item">
                 <a className="nav-link" onClick={()=>handleClickEn()}>en</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
  )
}
