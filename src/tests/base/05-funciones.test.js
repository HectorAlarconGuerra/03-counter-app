import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo} from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
    
    test('getUser debe de retornan un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);

    })
    //getUserActivo debe de retornar un objeto

    test('getUserActivo debe de retornar un objeto ', () => {
        
        const nombre = 'Héctor';

        const userActivoTest = ( nombre ) =>({
            uid: 'ABC567',
            username: nombre
        })

        const userActivo = getUsuarioActivo(nombre);
        expect(userActivo).toEqual(userActivoTest(nombre));

    })
    


})
