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
// import Layout from '../components/MyLayout'
// import Link from 'next/link'

// const PostLink = props =>(
//     <li>
//         <Link href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// )

// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink title="Hello Next.js" />
//                 <PostLink title="Learn Next.js is awesome" />
//                 <PostLink title="Deploy apps with Zeit" />
//             </ul>
//         </Layout>
//     )
// }


// dynamic routing
// import Layout from '../components/MyLayout'
// import Link from 'next/link'

// const PostLink = props =>(
//     <li>
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// )
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>my Blob</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     )
// }


// fetch data
import Layout from '../components/MyLayout'
import Link from  'next/link'
import fetch from 'isomorphic-unfetch'

const Post = props=>(
    <Layout>
        <h1>{props.show.name}</h1>
        {/* <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p> */}
        {/* <img src={props.show.image.medium} /> */}
    </Layout>
)

Post.getInitialProps = async function(context){
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    console.log(show, 'ddee')
    console.log(`Fetched show: ${show.name}`);
  
    return { show };
}


export default Post;