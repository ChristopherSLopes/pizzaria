import React from 'react'
import Head from 'next/head'

const PageTitle = ({title}) =>{
    return(
        <Head>
            <title>{title} - Caixa de palpite</title>
        </Head>
    )
}

export default PageTitle;