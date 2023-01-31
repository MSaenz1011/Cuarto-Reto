// Escribe una función que tome dos arreglos (a y b) como argumentos.
// Crear un objeto que tenga propiedades con claves 'a' y valores
// correspondientes 'b'. Devolver el objeto.

const objectGenerator = (a, b) => {
	if (a.length !== b.length || !a || !b) {
		throw new Error('invalid array');
	}
	const object = {};
	for (let i = 0; i < a.length; i++) {
		object[a[i]] = b[i];
	}
	return object;
};

console.log(objectGenerator(['a', 'b', 'c'], [1, 2, 3])); // {a:1,b:2,c:3}
console.log(objectGenerator(['a', 'b', 'c'], [1, () => {}, { name: 'khriztian' }])); // {a:1,b:() => {}, c:{name: 'khriztian'}}
console.log(
	objectGenerator(['name', 'hobbies', 'isAdmin'], ['khriztian', ['music', 'tv series'], false])
); // {name:'khriztian', hobbies:['music', 'tv series'], isAdmin:false}

console.log('----------------------------');
//errores
console.log(objectGenerator(['a', 'b', 'c', 'd'], [1]));
console.log(objectGenerator([], []));
