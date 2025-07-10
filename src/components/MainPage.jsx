import { useState, useEffect } from 'react'

import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer"


export default function MainPage() {

    useEffect(() => {
        async function getCharData() {
            try {
                let url = ("https://rickandmortyapi.com/api/character");
                const response = await fetch(url)
                const data = await response.json()
                const chars = data.results
                console.log(chars)
    
            } catch (error) {
                console.log(error)
            }
        }
        getCharData()
    }, [])

    return (
        <div>
            <Header />
            <Display />
            <Footer />
        </div>
    )
}