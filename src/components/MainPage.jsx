import { useState, useEffect } from 'react'

import Header from "./Header";
import Display from "./Display";
import Footer from "./Footer"


export default function MainPage() {

    async function getPokeData() {
        try {
            let url = "https://pokeapi.co/api/v2/pokemon/?limit=151"
        } catch (error) {

        }
    }

    return (
        <div>
            <Header />
            <Display />
            <Footer />
        </div>
    )
}