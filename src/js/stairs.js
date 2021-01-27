/* stairs */
export function stairs() {
  const stairsField = document.querySelector('.stairs')
  let stairsAll = Array.prototype.slice.call(stairsField.querySelectorAll('.stairs__lvl'))

  class Stairs {
    constructor(fields) {
      this.stairsAll = fields
      this.curentLast = []
    }
    each(fields) {
      this.stairsAll.forEach(stair => {
        this.setEmpryFamily(stair)
        this.findCurentLast(stair)
        this.findParent(stair)
        this.setChild(stair)
        this.activator(stair)
      });
    }
    setEmpryFamily(stair) {
      stair.stairParent = null
      stair.stairChild = []
    }
    findCurentLast(stair) {
      this.curentLast[stair.getAttribute('data-lvl')] = stair
    }
    findParent(stair) {
      if (stair.getAttribute('data-lvl') != 1) {
        stair.stairParent = this.curentLast[stair.getAttribute('data-lvl') - 1]
      }
    }
    setChild(stair) {
      if (stair.getAttribute('data-lvl') != 1) {
        this.curentLast[stair.getAttribute('data-lvl') - 1].stairChild.push(stair)
      }
    }
    activator(stair) {
      let childInput = stair.querySelector('input')
      if (childInput) {
        childInput.addEventListener('click', () => {
          playDown(stair)
          aboveOut(stair, childInput)
          aboveOn(stair, childInput)

          function playDown(stair) {
            if (stair.stairChild.length > 0) {
              stair.stairChild.forEach(el => {
                el.querySelector('input').checked = childInput.checked
                playDown(el)
              })
            } else {
              return
            }
          }

          function aboveOut(stair, childInput) {
            if (stair.stairParent != null && !childInput.checked) {
              stair.stairParent.querySelector('input').checked = false
              aboveOut(stair.stairParent, stair.stairParent.querySelector('input'))
            } else {
              return
            }
          }

          function aboveOn(stair, childInput) {
            if (stair.stairParent != null && childInput.checked) {
              let compare = stair.stairParent.stairChild.reduce((sum, curent) => {
                return sum + curent.querySelector('input').checked
              }, 0)
              if (compare === stair.stairParent.stairChild.length) {
                stair.stairParent.querySelector('input').checked = true
              }
              aboveOn(stair.stairParent, stair.stairParent.querySelector('input'))
            } else {
              return
            }
          }
        })
      }
    }
  }

  window.stairs = new Stairs(stairsAll)
  let stairs = window.stairs
  stairs.each(stairs.stairsAll)
}