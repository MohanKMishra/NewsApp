import router from "next/router";
import styles from "../../styles/Feed.module.css";
import { useRouter } from "next/router";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ pageNumber, articles }) => {
    const router = useRouter();
    return (
        <div className="page-container">
            <div className={styles.main}>
                <Toolbar/>
            <div className={styles.msg}>To know in details, click  on the title</div>
                {articles.map((item, index) => {
                    return (
                        <div key={index} className={styles.post}>
                            <h1 onClick={() => window.location.href = item.url}>{item.title}</h1>
                            <p>{item.description}</p>
                            {/* {!! item.urlToImage && */}
                            <img src={item.urlToImage} alt="not found" />
                            {/* //  } */}
                        </div>
                    )
                })}
            </div>
            <div className={styles.pagination}>
                <div onClick={() => {
                    if (pageNumber > 1) {
                        router.push(`/feed/${pageNumber - 1}`).then(() => window.scrollTo(0, 0));
                    }
                }}
                    className={pageNumber === 1 ? styles.disabled : styles.active}>Previos page
                </div>
                <div>{pageNumber}</div>

                <div onClick={() => {
                    if (pageNumber < 16) {
                        router.push(`/feed/${pageNumber + 1}`).then(() => window.scrollTo(0, 0));
                    }
                }}
                    className={pageNumber === 16 ? styles.disabled : styles.active}>Next page
                </div>
            </div >
        </div>
    )
}

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.slug;

    if (!pageNumber || pageNumber < 1 || pageNumber > 16) {
        return {
            props: {
                articles: [],
                pageNumber: 1.
            }
        }
    }
    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
        {
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
    const apiJson = await apiResponse.json();
    const { articles } = apiJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
}

export default Feed;