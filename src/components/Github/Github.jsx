import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()


    // const [data,setData]=useState(null)
    // const [loading,setLoading]=useState(true)
    // const [error,setError]=useState(null)
    // useEffect(() => {
    //    const fetchData = async()=>{
    //     try {
    //         const res= await fetch('https://api.github.com/users/JobairIslam')
    //         if(!res.ok){
    //             throw new Error('failed to fetch data')
    //         }
    //         const data = await res.json()
    //         setData(data)
    //     } catch (error) {
    //         setError(error.message)
    //     }finally{
    //         setLoading(false)
    //     }
    //    }
    //    fetchData()
    // }, [])


    // if (loading) return <div className="text-center p-4">Loading...</div>
    // if (error) return <div className="text-center p-4 text-red-500">Error: {error}</div>
    // if (!data) return null




    return (
        <div className="flex items-center justify-center min-h-[200px] bg-gray-50 rounded-lg shadow-md p-6 m-4">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">My Github Profile</h2>
                <p className="text-lg text-gray-600">My Github follower number: {"  "}{data.followers} </p>
                <img className='mt-5 rounded-full' src={data.avatar_url} alt="juba" />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const res= await fetch('https://api.github.com/users/JobairIslam')
    return res.json()
}