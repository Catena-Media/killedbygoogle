import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => (
    <header className={styles.headerContainer}>
        <Link href="/" className={styles.headerLink} rel="noreferrer noopener">
            <div className={styles.brandingContainer}>
                <div className={styles.logo}>
                    <img width="60px" src="/assets/tombstone.svg" height="60px" alt="Tombstone" />
                </div>
                <h1 className={styles.title}>Killed by Catena Media</h1>
            </div>
        </Link>
    </header>
);

export default Header;