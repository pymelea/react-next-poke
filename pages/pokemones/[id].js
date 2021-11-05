import Image from 'next/image';
import Link from "next/link";
import { useRouter } from "next/router";


const Pokemon = ({data}) => {
    const router = useRouter()
    console.log(router)
    if (router.isFallback){
        return <div>Cargando...</div>
    }
    return (
        <div>
            <h1>{data.name} número  #{data.id}</h1>
            <Image src={data.sprites.front_default} width={300} height={300} />
            <Link href="/">Volver al inicio</Link>
        </div>
    )
}


export default Pokemon

export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
    const data = await response.json()

    return { props: {data} }
}

export const getStaticPaths = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon')
    const data = await response.json()

    const paths = data.results.map(pokemon => ({
        params: {
            id: pokemon.url.split('/')[6]
        }
    }))

    return { paths, fallback: false }
}

// export const getServerSideProps = async ({params}) => {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
//     const data = await response.json()
//
//     return { props: {data} }
// }