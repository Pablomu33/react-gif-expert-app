import { render } from "@testing-library/react"
import { GifGridItem } from "../../src/components/GifGridItem"
import { screen, configure } from '@testing-library/react'

describe('pruebas en <GifItem/>', ()=>{

    const title = 'saitama'
    const url = 'https://one-punch.com/saitamam.jpg'

test('debe hace match con el snapshot', () => { 

    const {container} = render( < GifGridItem title={title} url= {url} />)
    expect(container).toMatchSnapshot()
})

test('should mostrar la imagen con el url y el alt', () => { 

    render(<GifGridItem title={title} url= {url} />);
    const{src, alt} = screen.getByRole('img');
    expect(src).toBe(url)
    expect(alt).toBe(alt)


    //expect(screen.getByRole('img').src).toBe(url);
 })

 test('mostrar el titulo del componente', () => { 

    render(<GifGridItem title={title} url= {url} />);
    expect(screen.getByAltText(title).toBeTruthly)
  })

})
