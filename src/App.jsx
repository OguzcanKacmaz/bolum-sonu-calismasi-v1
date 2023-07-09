import { useState } from 'react'

function App() {
  const pictureId=100;
   const [imageId, setImageId] = useState(pictureId);
const getLoremPıcsumImg=(id,width=800,height=450)=>`https://picsum.photos/id/${id}/${width}/${height}`

function handleClick(id){
setImageId(id)
}
  return (
    <main className='container'>
      <hgroup>
        <h2>Mini Görsel Uygulaması</h2>
        <h3>Görsel : </h3>
      </hgroup>
      <img src={getLoremPıcsumImg(imageId)} alt="" style={{width:"100%",padding:"4px",borderRadius:"10px",border:"1px solid grey"}}/>
      <div style={{marginTop:"30px",display:"flex",justifyContent:"space-around"}}>
        {[...Array(5)].map((item,index)=><div key={index}>
          <img onClick={()=>handleClick(pictureId+index)} src={getLoremPıcsumImg((pictureId+index),100,100)} alt="" style={{cursor:"pointer",padding:"4px",borderRadius:"10px",border:"1px solid grey"}}/>
        </div>)}
        
      </div>
    </main>
  )
}

export default App
