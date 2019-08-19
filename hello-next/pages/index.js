//1 
// import Layout from '../components/MyLayout'
// const Index = () => (
//     <Layout>
//         <p>hello Next.js</p>
//     </Layout>
// );

// export default Index


//2
// import withLayout from '../components/MyLayout'

// const Page = ()=> <p>hello Next.js</p>

// export default withLayout(Page)


// 3
// import Layout from '../components/MyLayout'
// const indexPageContent = <p>hello Next.js</p>

// export default function Index() {
//     return <Layout content={indexPageContent}></Layout>
// }


// blog demo
import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = props =>(
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learn Next.js is awesome" />
                <PostLink title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    )
}