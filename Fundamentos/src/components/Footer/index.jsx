import styles from './Footer.module.css'

function Footer({ autor }) {

    return (
        <footer className={styles.footer}>
            <label className={styles.title}>
             {autor}
            </label>
        </footer>
    )
}
export default Footer;