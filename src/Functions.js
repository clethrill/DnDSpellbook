export function BinarySearch(array, value, object_property_name) {
	let marker = Math.floor(array.length / 2);
	let movement = marker;
	let count = 0;

	while (array[marker][object_property_name] !== value) {
		if (value < array[marker][object_property_name]) {
			marker = marker - movement;
		}
		else {
			marker = marker + movement;
		}
		movement = Math.ceil(movement / 2);
		count++;
	}

	return marker;
}
