import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import {ref, uploadBytes,listAll, getDownloadURL } from 'firebase/storage'
import {v4} from 'uuid'
import { storage } from "./FirebaseConfig";
const About =({isAuth})=>{

const [title,setTitle]=React.useState("")
const [date,setDate]=React.useState("")
const [name,setName]=React.useState("")
const [imageList,setImageList]=React.useState([])

const [content,setContent]=React.useState("")

const imageListRef = ref(storage,'images/')

const [image, setImage] = React.useState(null);
const [image2, setImage2] = React.useState(null);
    const imageUpload = () => {
      if(image === null)return;
      const imageRef = ref(storage,`images/${image.name + v4()}`)
       uploadBytes(imageRef,image).then((snapshot)=>{
     getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev,url])
       })
       })
    };
    const imageUpload2 = () => {
      if(image2 === null)return;
      const imageRef = ref(storage,`images/${image2.name + v4()}`)
       uploadBytes(imageRef,image2).then((snapshot)=>{
     getDownloadURL(snapshot.ref).then((url)=>{
        setImageList((prev)=>[...prev,url])
       })
       })
    };

const postCollect = collection( db ,'blogPosts')
 
const navigate = useNavigate()

const createPost = async ()=>{
await addDoc(postCollect,
    {title,
   name,
    date,
  imageList,
    content ,
author: 
{ name: auth.currentUser.displayName, id:auth.currentUser.uid}
})
navigate('/')






}
 



useEffect(()=>{
    if(!isAuth){
        navigate('/Login')
    }
    listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
        })
      })
    listAll(imageListRef).then((response)=>{
        response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[...prev,url])
            })
        })
      })
})

    return(
        <Div>
        <Form>
        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Blog Title</Form.Label>
          <Form.Control type="text" placeholder="Blog Title" onChange={(e)=>{
            setTitle(e.target.value)
          }} />
        </Form.Group>
     
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Date</Form.Label>
          <Form.Control type="text" placeholder="25/2/2024" onChange={(e)=>{
            setDate(e.target.value)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John" onChange={(e)=>{
            setName(e.target.value)
          }} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Posters Image</Form.Label>
          <input
                    
                    type="file"
                    onChange={(event)=>
                        {setImage(event.target.files[0])}}
                
                  />
                 
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Blogs Image</Form.Label>
          <input
                   
          type="file"
          onChange={(event)=>
              {setImage2(event.target.files[0])}}
                  />
           
       
        </Form.Group>
  
  
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Your Content</Form.Label>
          <Form.Control as="textarea" rows={3} onChange={(e)=>{
            setContent(e.target.value)
          }} />
        </Form.Group>
        <Button variant="primary" onClick={()=>{
            createPost()
            imageUpload2()
            imageUpload()
        }}  >Publish</Button>
      </Form>
        
        </Div>
    )
}

export default About

const Div = styled.div`
margin-top: 120px;
display: flex;
justify-content: center;


`