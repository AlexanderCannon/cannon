import React, { Component } from 'react'
import ProductList from '../ProductList'

class Shop extends Component {
  render() {
    const products = {
      tees: {
        cool: {
          colorways: {
            red: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }],
            white: [{ xl: 0 }, { l: 1 }, { m: 1 }, { s: 1 }],
            black: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }]
          }

        },
        logo: {
          colorways: {
            blue: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }],
            white: [{ xl: 0 }, { l: 1 }, { m: 1 }, { s: 1 }],
            black: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }]
          }
        }
      },
      hoodies: {
        logo: {
          colorways: {
            red: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }],
            green: [{ xl: 0 }, { l: 1 }, { m: 1 }, { s: 1 }],
            gold: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }]
          }
        },
        logoSmall: {
          colorways: {
            red: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }],
            white: [{ xl: 0 }, { l: 1 }, { m: 1 }, { s: 1 }],
            black: [{ xl: 1 }, { l: 1 }, { m: 1 }, { s: 1 }]
          }
        }
      }
    }
    return (<ProductList products={products}/>)
  }
}

export default Shop