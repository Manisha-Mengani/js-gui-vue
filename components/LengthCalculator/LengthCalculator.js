const courselength = (x, y) => { 
  
  
  return x - y 

}

const LengthCalculator = new Vue({
  el: '#LengthCalculator',
  data: {
    guest: 'Manisha',
    firstNumber: 30,
    secondNumber: 'AppliedComputerScience'
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber.length)
      return `${this.guest}, your remaining spaces are ${courselength(i, j)}.`
    }
  }
})