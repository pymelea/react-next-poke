import {render, screen} from '@testing-library/react'
import Index from '../pages/index'
describe('Index', () => {
    describe('Component', () => {
        it('renderiza', () => {
            const {getByTestId} = render(
                <Index pokemones={[{ name: ' Chanchito feliz', url:'/pokemon/detalle/1' }]}/>
            )
            const paragraph = getByTestId('titulo')
            // const paragraph = screen.getByText('Mi App de Pokemones')
            // console.log(paragraph.innerHTML)
            expect(paragraph).toBeInTheDocument()

            const chanchito = screen.getByText('Chanchito feliz')
            expect(chanchito).toBeInTheDocument()
        })
    })

    describe('getStaticProps', () => {
    })

});