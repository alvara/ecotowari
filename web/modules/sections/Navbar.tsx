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
              src={'/ecotowari-logo.png'}
              width="120"
              height="40"
              objectFit={'contain'}
              alt="Ecotowari logo"
              quality={10}
              priority={true}
            />
          </a>
        </Link>
        <button
          className="navbar-toggler ms-auto"
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
          <ul className="navbar-nav ms-auto"></ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link href="/mission">
                <a className="nav-link">{router.locale === 'ja' ? 'Our Mission' : 'Our Mission'}</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/the-problem">
                <a className="nav-link">{router.locale === 'ja' ? 'The Problem' : 'The Problem'}</a>
              </Link>
            </li>
            <li className="nav-item ">
              <Link href="/about-us">
                <a className="nav-link">{router.locale === 'ja' ? 'About Us' : 'About Us'}</a>
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link href="/news">
                <a className="nav-link">{router.locale === 'ja' ? '最新情報' : 'Latest News'}</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">{router.locale === 'ja' ? '問い合わせ' : 'Contact'}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#sticker">
                <a className="nav-link">
                  {router.locale === 'ja' ? 'ステッカーの入手' : 'Get Sticker'}
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={router.asPath} locale="ja">
                <a
                  className="nav-link"
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
