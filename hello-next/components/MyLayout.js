import Header from './Header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

// 定义组件的方式
1
const Layout = props =>(
    <div style={layoutStyle}>
        <Header/>
        {props.children}
    </div>
)

export default Layout


// 2
// const withLayout = Page =>{
//     return () => (
//         <div style={layoutStyle}>
//             <Header/>
//             <Page/>
//         </div>
//     )
// }

// export default withLayout

// 3
// const layout = props => (
//     <div style={layoutStyle}>
//         <Header/>
//         {props.content}
//     </div>
// )
// export default layout