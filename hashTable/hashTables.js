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

	get(key) {
		const address = this.hashMethod(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let index = 0; index < currentBucket.length; index++) {
				if (currentBucket[index][0] === key) {
					return currentBucket[index][1];
				}
			}
		}
		return undefined;
	}

	delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let index = 0; index < currentBucket.length; index++) {
        if (currentBucket[index][0] === key) {
          let deleteSpace = currentBucket[index];
          delete currentBucket[index];
          currentBucket.splice(index, 1)
          return deleteSpace;
        }
      }
    }
  }

}

const myHashTable = new HashTable(50);