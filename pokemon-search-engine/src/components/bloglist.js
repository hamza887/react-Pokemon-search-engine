export default function Bloglist({data,title,handleDelbutton}){
    // const data= props.data;
    // const title=props.title;
    return(
        <>
        <h2>{title}</h2>
        <div >
        <div>{data.map((hi)=>{
         return(
           <div key={data.id}>
           <p>{hi.title} </p>
           <h3>{hi.author}</h3>
           <button onClick={()=>{
               handleDelbutton(hi.id)
           }} >delete Blog</button>
           </div>
         )
        })}</div>
        </div>
        </>
    )
}