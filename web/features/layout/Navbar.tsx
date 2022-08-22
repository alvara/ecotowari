import Link from 'next/link';
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container">
        <a
          className="navbar-brand d-flex justify-content-center"
          onClick={async () => {
            await router.push('/');
            setIsMenuOpen(false);
          }}
        >
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
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNavbar"
          aria-controls="collapseNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${isMenuOpen ? '' : 'collapse'} navbar-collapse`}
          id="collapseNavbar"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a
                className="nav-link"
                onClick={async () => {
                  await router.push('/mission');
                  setIsMenuOpen(false);
                }}
              >
                {router.locale === 'ja' ? 'Our Mission' : 'Our Mission'}
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                onClick={async () => {
                  await router.push('/the-problem');
                  setIsMenuOpen(false);
                }}
              >
                {router.locale === 'ja' ? 'The Problem' : 'The Problem'}
              </a>
            </li>
            <li className="nav-item ">
              <a
                className="nav-link"
                onClick={async () => {
                  await router.push('/about-us');
                  setIsMenuOpen(false);
                }}
              >
                {router.locale === 'ja' ? 'About Us' : 'About Us'}
              </a>
            </li>

            {/* <li className="nav-item">
              <Link href="/news">
                <a className="nav-link">{router.locale === 'ja' ? '最新情報' : 'Latest News'}</a>
              </Link>
            </li> */}
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={async () => {
                  await router.push('/contact');
                  setIsMenuOpen(false);
                }}
              >
                {router.locale === 'ja' ? '問い合わせ' : 'Contact'}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                onClick={async () => {
                  await router.push('/#sticker');
                  setIsMenuOpen(false);
                }}
              >
                {router.locale === 'ja' ? 'ステッカーの入手' : 'Get Sticker'}
              </a>
            </li>
            <li className="nav-item">
              <Link href={router.asPath} locale="ja">
                <a
                  className="nav-link"
                  onClick={() => {
                    cookieCutter.set(
                      'NEXT_LOCALE',
                      'ja',
                      new Date(999999999999)
                    );
                    setIsMenuOpen(false);
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
                    cookieCutter.set('NEXT_LOCALE', 'en');
                    setIsMenuOpen(false);
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
  );
}
