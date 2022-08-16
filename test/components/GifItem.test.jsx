import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => { 
    const title = 'Read';
    const url = 'http://reading.com/read.jpg';

     test('Debería realizar match con el snapshot', () => { 
        const {container} = render(<GifItem url={ url } title={ title }/>);
        expect(container).toMatchSnapshot();
      });

    test('Debería mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        screen.debug();
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
     });

     test('Debería mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url}/>);
        expect(screen.getByText(title)).toBeTruthy();
      });
 });