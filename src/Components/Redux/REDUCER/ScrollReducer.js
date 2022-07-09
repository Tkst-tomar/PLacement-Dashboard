const array = new Array(6).fill(false)
const initilData = {
    personalInfo: false,
    contactInfo: false,
    academicInfo: false
}
const ScrollHandler = (state = initilData, action) => {
    const pos = action.payload
   // console.log("Position >>", pos)
    switch (action.type) {
        case 'SCROLL_DOWN':
            if (pos > 0 && pos < 150) {
             //   console.log("Run First", state)
                return {
                    personalInfo: true,
                    contactInfo: false,
                    academicInfo: false
                }
            } else if (pos >= 150 && pos < 250) {
              //  console.log("Run Second", state)
                // state[1] = true
                return {
                    contactInfo: true,
                    personalInfo: false,
                    academicInfo: false
                }
            } else if(pos = 0){
                return{
                    contactInfo: false,
                    personalInfo: false,
                    academicInfo: false
                }
            }

        default: return state
    }

}

export default ScrollHandler