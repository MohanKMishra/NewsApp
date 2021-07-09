import { useRouter } from "next/router";
import styles from "../styles/Toolbar.module.css";

export const Toolbar = () => {
    const router = useRouter();

    return (
        <div className={styles.main}>
                <div onClick={() => router.push('/')}>Home</div>
                <div onClick={() => router.push('/feed/1')}>Feed</div>
                <div onClick={() => router.push('/eom')}>Profile</div>
                <div onClick={() => window.location.href = "https://www.facebook.com/profile.php?id=100008552597397"}>Facebook</div>
        </div>
    )
}