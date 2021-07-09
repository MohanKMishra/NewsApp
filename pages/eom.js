import styles from "../styles/Eom.module.css";
import { Toolbar } from "../components/toolbar"

export const EOM = () => {
    return (
        <>
            <Toolbar />
            <div className="page_container">
                <div className={styles.main}>
                    <div className={styles.box}>
                        <div className={styles.img}>
                            <img src="https://pbs.twimg.com/profile_images/1191991677730217984/4ZwDp4hj_400x400.jpg" />
                        </div>
                        <div className={styles.details}>
                            <h1>Mohan K Mishra</h1>
                            <h2>Computer <span>Science</span> Engineering</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//for serverside rendering

export default EOM;