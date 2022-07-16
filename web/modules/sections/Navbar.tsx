import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'
import cookieCutter from 'cookie-cutter'
import Image from 'next/image'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex justify-content-center">
            <Image
              src={'/ecotowari-logo.svg'}
              width="120"
              height="40"
              objectFit={'scale-down'}
              alt="Ecotowari logo"
              quality={10}
              priority={true}
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
          aria-controls="collapseNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapseNavbar">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link" href="/mission">
                {router.locale === 'ja' ? 'Our Mission' : 'Our Mission'}
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/the-problem">
                {router.locale === 'ja' ? 'The Problem' : 'The Problem'}
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/about-us">
                {router.locale === 'ja' ? 'About Us' : 'About Us'}
              </a>
            </li>

            {/* <li className="nav-item">
              <Link href="/news">
                <a className="nav-link">{router.locale === 'ja' ? '最新情報' : 'Latest News'}</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                {router.locale === 'ja' ? '問い合わせ' : 'Contact'}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#sticker">
                {router.locale === 'ja' ? 'ステッカーの入手' : 'Get Sticker'}
              </a>
            </li>
            <li className="nav-item">
              <Link href={router.asPath} locale="jp">
                <a
                  className="nav-link"
                  href={router.asPath}
                  onClick={() => {
                    cookieCutter.set('NEXT_LOCALE', 'ja', new Date(999999999999))
                  }}
                >
                  JP
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={router.asPath} locale="en">
                <a
                  className="nav-link"
                  onClick={() => {
                    cookieCutter.set('NEXT_LOCALE', 'en')
                  }}
                >
                  EN
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
