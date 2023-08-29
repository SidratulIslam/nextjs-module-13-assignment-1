// components/Header.js
import React from 'react'
import Link from 'next/link'
import styles from './header.module.css'

export default function Header() {
    return (
        <nav className={styles.header}>
            <nav className={styles.nav}>
                <Link href="/">
                    Home
                </Link>
                <Link href="/set-cookie">
                    SetCookie
                </Link>
                <Link href="/get-cookie">
                    GetCookie
                </Link>
            </nav>
        </nav>
    )
}
