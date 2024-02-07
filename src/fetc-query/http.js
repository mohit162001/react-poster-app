import { QueryClient } from "@tanstack/react-query";

export const queryClient  = new QueryClient()
export async function fetchPost(){
        const response = await fetch('http://localhost:8080/posts');
         const resdata = await response.json();
         const postData = resdata.posts;
         if(!response.ok){
            throw new Error('failed to fetch data');
         }
         return postData;
}

export async function updatedPost(data){
    const response = await fetch('http://localhost:8080/posts',{
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(data),
    });
         const resdata = await response.json();
         const postData = resdata.posts;
         if(!response.ok){
            throw new Error('failed to fetch data');
         }
         return postData;
}