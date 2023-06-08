import { PropTypes } from "prop-types";
import { render, screen } from "@testing-library/react"
import {GifGrid} from '../../src/components/GifGrid';   


describe ('pruebas en <GifGrid />', ()=>{
    const category = 'one punch'

    test('debe de mostrar el loading inicialmente', () => { 
        
        render(<GifGrid category = {category}/>)

        expect(screen.getByText('Cargando...'))


     })
})





GifGrid.propTypes= {

    category: PropTypes.string.isRequired
}