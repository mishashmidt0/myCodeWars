class NarayanaAlgorithm {
    nextLexInPlace(arr) {
        let nJ = -1, nL = -1;

        for (let j = 0; j < arr.length - 1; j++) if (arr[j] < arr[1 + j]) nJ = j;

        if (!~nJ) return; // no more permutations

        for (let l = nJ + 1; l < arr.length; l++) if (arr[nJ] < arr[l]) nL = l;

        this.swap(arr, nJ, nL);

        nJ++;

        nL = arr.length - 1;

        while (nJ < nL) this.swap(arr, nJ++, nL--);

        return true;
    }

    swap(arr, nJ, nL) {
        const save = arr[nJ];
        arr[nJ] = arr[nL];
        arr[nL] = save;
    }

    allMutations(source) {
        let arr = source.split('').slice();
        let result = []

        result.push(arr.sort().join(''));


        while (this.nextLexInPlace(arr)) result.push(arr.join(''));

        return result;
    }
}

const nA = new NarayanaAlgorithm()

console.log(nA.allMutations('abc'))
