import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img from './1 (2).png'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import {  db } from '../FirebaseConfig';

const Posts = ({isAuth}) => {

const [postList ,setPostList]= useState([])
const postCollect = collection ( db ,'blogPosts')
useEffect(()=>{
  const getPosts = async()=>{
    const data = await getDocs(postCollect)
setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
  getPosts()
})

const deletePost = async(id)=>{  
  const postDoc= doc(db,'blogPosts',id)
  await deleteDoc(postDoc)

}

    return (


        <Div>{ postList.map((post)=>{

        return <div>
        <CardHolder>
        <Holder>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={post.imageList} />
        <Card.Body>
       <h2>  <Card>{post.title}</Card> </h2>
         
          <h5>
          <div>post by {post.name}</div>
          </h5>
        <hr/>
          <Card.Text>
            {post.content}
            <hr/>
            <div>{post.date}</div>
          </Card.Text>
          { 
            isAuth && post.id === post.id &&(
              <button  onClick={()=>{
                deletePost(post.id)
              }} >
              Delete post
              </button>
            )
          }
        </Card.Body>
      </Card>
      </Holder>
      </CardHolder>
        </div>

        })}  </Div>
    )
 
};
export default Posts;

const Div = styled.div`
  margin-top: 150px;
display: flex;
justify-content: center;
  /* height: 100vh; */
`;
const CardHolder = styled.div`

display: flex;
flex-wrap:wrap;
justify-content:center;
margin:10px;

`
const Holder = styled.div`
display:flex;
flex-wrap: wrap;

`
