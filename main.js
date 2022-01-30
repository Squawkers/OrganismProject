// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimanNum, dna) => {
  return {
    specimanNum,
    dna,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const similarities = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0);
      const percentOfDNAshared = (similarities / this.dna.length) * 100;
      const percentageTo2Deci = percentOfDNAshared.toFixed(2);
      console.log(`${this.specimanNum} and ${otherOrg.specimanNum} have ${percentageTo2Deci}% DNA in common.`);
    },
    willLikelySurvive() {
      const cOrG = this.dna.filter(el => el === "C" || el === "G");
      return cOrG.length / this.dna.length >= 0.6;
    },
  }
};

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)


/*
// Returns a random DNA base
const returnRandBase = () => {
const dnaBases = ['A', 'T', 'C', 'G']
return dnaBases[Math.floor(Math.random() * 4)] 
}
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
const newStrand = []
for (let i = 0; i < 15; i++) {
newStrand.push(returnRandBase())
}
return newStrand
}
let currentDna = mockUpStrand();
const pAequorFactor = (number, array) => {
return {
specimenNum: number,
dna: array,
mutate () {
let randomIndex = Math.floor(Math.random() * this.dna.length)
let newBase = returnRandBase();
while (this.dna[randomIndex] === newBase) {
newBase = returnRandBase();
}
this.dna[randomIndex] = newBase;
return this.dna;
},
compareDna () {
let example1 = this.dna;
let example2 = currentDna;
let score = 0;
for (let j = 0; j < example1.length; j++) {
for (let k = 0; k < example2.length; k++) {
if (j === k && example1[j] === example2[k]) {
score = score + 1;
}
}
}
console.log(`Specimen 1 and Specimen 2 have ${Math.floor(100 / 15 * score)}% DNA in common`)
},
willLikelySurvive () {
let dnaScore = 0;
const survivedStrand = [];
for (let l = 0; l < this.dna.length; l++) {
if (this.dna[l] === 'C' || this.dna[l] === 'G') {
dnaScore = dnaScore + 1;
}
}
if (Math.floor(100 / 15 * dnaScore) > 60) {
survivedStrand.push(this.dna);
}
return console.log(survivedStrand);
}
}
};
console.log (pAequorFactor(2, mockUpStrand()));
*/
