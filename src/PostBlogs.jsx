import React,{useEffect} from "react";
import styled from 'styled-components'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import ProgressBar from 'react-bootstrap/ProgressBar';

import {ref, uploadBytes,listAll, getDownloadURL } from 'firebase/storage'
import { storage } from "./FirebaseConfig";
import {v4} from 'uuid'
const PostBlogs =()=>{


const [imageList,setImageList]=React.useState([])
    const imageListRef = ref(storage,'images/')

    const [image, setImage] = React.useState(null);
    const imageUpload = () => {
      if(image === null)return;
      const imageRef = ref(storage,`images/${image.name + v4()}`)
       uploadBytes(imageRef,image).then((snapshot)=>{
     getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev,url])
       })
       })
    };
















    const [image2, setImage2] = React.useState(null);
    const imageUpload2 = () => {
    if(image2 ===null)return;
    const imageRef2 = ref(storage,`images/${image2.name + v4()}`)
    uploadBytes(imageRef2,image2).then((snapshot)=>{
       getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev,url])
       })
  
     
    })
    };

useEffect(()=>{
  listAll(imageListRef).then((response)=>{
    response.items.forEach((item)=>{
        getDownloadURL(item).then((url)=>{
            setImageList((prev)=>[...prev,url])
        })
    })
  })
},[imageListRef])
    return(
        <Div>
        <Form>
        
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="email" placeholder="Blog Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Posters Name</Form.Label>
        <Form.Control type="email" placeholder="John Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Posters Image</Form.Label>
        <Forinput
                  
                  type="file"
               
                  onChange={(event)=>
                    {setImage(event.target.files[0])}}
                />
               
        <Button   onClick={imageUpload} >upload Your Image </Button>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Blogs Image</Form.Label>
        <Forinput
                 
                  type="file"
                    onChange={(event)=>
                    {setImage2(event.target.files[0])}}
                />
         
        <Button   onClick={imageUpload2} >upload Blogs Image</Button> 
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Content</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary">Publish</Button>
    </Form>
         {
            imageList.map((url)=>{
                return <Img src={url}/>
            })
         }
        </Div>
    )
}
export default PostBlogs ;
const Div = styled.div`
  margin-top: 150px;
display: flex;
justify-content: center;
width: 100vw;
  /* height: 100vh; */
`;
// const Buttons= styled.label`

// width: 150px;
//   height: 35px;
//   display: flex;
//   justify-content: center;
//   background: #1c253c;
//   align-items: center;
//   color: white;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   border-radius: 10px;
//   cursor: pointer;
//   opacity: 1;
//   transition: 250ms;
//   :hover {
//     opacity: 0.9;
//   }

// `
// const Buttons2= styled.label`

// width: 150px;
//   height: 35px;
//   display: flex;
//   justify-content: center;
//   background: #1c253c;
//   align-items: center;
//   color: white;
//   margin-top: 10px;
//   margin-bottom: 10px;
//   border-radius: 10px;
//   cursor: pointer;
//   opacity: 1;
//   transition: 250ms;
//   :hover {
//     opacity: 0.9;
//   }

// `
const Forinput = styled.input`

`;


const Img =styled.img`

height:20px
`
