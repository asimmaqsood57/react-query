# Getting Started with React Query

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Step 1:

npm install react-query

## Step 2:

import "QueryClient" from 'react-query'

make an object of queryClient in app.js or index.js
Wrap the whole app with <QueryClientProvider client={queryClientObj} >

## Step 3:

you can use "useQuery" hook to fetch Data

import "useQuery" from "react-query"

const fetchData = ()=>{
return axios.get(url)
}

const { isLoading , data , isError , error , isFetching} = useQuery("we write unique id here" ,fetchData);

isFetching is used for query Cache

## Step 4:

You can add React query DevTools

import {ReactQueryDevtools } from "react-query/devtools"

You have to place <ReactQueryDevtools /> one line above the closing tag of ReactQueryClientProvider
