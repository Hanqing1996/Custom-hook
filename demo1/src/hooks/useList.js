import React, { useState, useEffect } from 'react'

const useList=()=>{
    const [list,setList]=useState(null)
    useEffect(()=>{
        ajax('/list').then(list=>{
            setList(list)
        })
    },[]);
    return{
        list,
        setList
    }
}

export default useList

function ajax(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([
                {id:1,name:'libai'},
                {id:2,name:'wuhao'},
                {id:3,name:'zhangfei'}
            ])
        })
    })
}