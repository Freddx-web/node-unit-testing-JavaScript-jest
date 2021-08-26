//global.test.js

const text = "Hola Mundo";
const fruits = ['pera', 'manzana', 'banana']


//============================================================//
//        Implementando pruebas para Boolean y Array          //
//============================================================//

// Testing text
test('Debe contener un texto', () => {
	expect(text).toMatch(/Mundo/);
});

// Testing Arrys
test('¿Tenemos banana', () =>{
	expect(fruits).toContain('banana');
})

// Testing number
test('Mayor que', () =>{
    expect(10).toBeGreaterThan(9);
});

// Testing Boolean
test('Verdadero', () => {
    expect(true).toBeTruthy();
});

// Testing Callback
const reverseString = (str, callback) => {
	callback(str.split("").reverse().join(""))
};

test('probar un callback', () => {
	reverseString('Hola', (str) => {
		expect(str).toBe('aloH');
	});
});

// Testing Promese
/*
const reverseString2 = str => {
	return new Promise({resolve, reject} = {
        if (!str) {
        	reject(Error('Error'))
        }
        resolve(str.split("").reverse().join(""));
	});
};


// Testing async/wait

test('Probar async/wait', async () => {
	const string = await reverseString2('hola');
	expect(string).toBe('aloH');
});
*/

afterEach(() => console.log('Despues de cada Pruebas'));
afterAll(() => console.log('Despues de todas las Pruebas'));
beforeEach(() => console.log('Antes de cada Pruebas'));
beforeAll(() => console.log('Antes de todas las Pruebas'));