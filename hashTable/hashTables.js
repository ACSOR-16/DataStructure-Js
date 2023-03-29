class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	hashMethod(key) {
		let hash = 0;
		for (let index = 0; index < key.length; index++) {
			hash = (hash + key.charCodeAt(index) * index) % this.data.length;
			
		}
		return hash;
	}

	set(key, value) {
		const address = this.hashMethod(key);
		if (!this.data[address]) {
			this.data[address] = []
		}
		this.data[address].push([key, value]);
		return this.data;
	}
}

const myHashTable = new HashTable(50);