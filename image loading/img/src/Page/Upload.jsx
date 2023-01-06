import React, { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Upload = () => {

    const file = useRef()

    const handleUpload = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', file.current.files[0])
       
        axios.post('http://localhost:8080', formData, {
            headers: { "Content-Type": "multipart/form-data" }
        }).then((res) => {
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <div
            style={{
                marginTop: '10px',

                display: 'grid',
                width: '50%'

            }}
        >
            <h1>
                Upload Document like (image,pdf,audio,video,etc.)
            </h1>

            <form
                onSubmit={handleUpload}


            > <input type='file'
                ref={file}
                />
                <input
                    type='submit'
                    value="Upload"
                /></form>
        </div>
    )
}

export default Upload