function DNAStrand(dna) {
    return dna.split("").map(el => {
        if (el === "G") return el.replace("G", "C")
        if (el === "C") return el.replace("C", "G")
        if (el === "A") return el.replace("A", "T")
        if (el === "T") return el.replace("T", "A")
        return el
    }).join("")
}

let pairs = {A: 'T', T: 'A', C: 'G', G: 'C'};
const DNAStrand2 = dna => dna.replace(/./g, c => pairs[c]);

console.log(DNAStrand("GTAT"))