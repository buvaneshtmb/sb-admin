import React from 'react'
export let initialValue = { count: 0,name:"" }

export default function CountReducer(state, action) {
    switch (action.type) {
        case 'increment': return { count: state.count + 1 }
        case 'decrement': return { count: state.count - 1 }
        case 'reset': return { count: 0 }
        case 'change-name':return {name:action.value}
        case 'default': return { count: 0 }
    }
}
