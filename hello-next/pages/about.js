// 1
import Layout from '../components/MyLayout'

export default function About() {
    return (
        <Layout>
            <p>This is a about page</p>
        </Layout>
    )
}


//2
// import withLayout from '../components/MyLayout'

// const Page = ()=> <p>This is a about page</p>

// export default withLayout(Page)


// 3
// import Layout from '../components/MyLayout'
// const aboutPageContent = <p>This is a about page</p>

// export default function Index() {
//     return <Layout content={aboutPageContent}></Layout>
// }