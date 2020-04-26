import React, { useState, useContext, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { Button } from './Button'
import { ProgressBar } from './ProgressBar'
import { QuantitySelector } from './QuantitySelector'
import { Bookmark } from './Bookmark'
import { BuyButton } from './BuyButton'
import ShopifyBuy from "@shopify/buy-button-js";

const client = ShopifyBuy.buildClient({
    domain: 'wishlist-dm.myshopify.com',
    storefrontAccessToken: '178d0ebabcacb24093b6ee12d8b1b108'
  });

const ui = ShopifyBuy.UI.init(client);

ui.createComponent('cart', {
    options: {
        contents: {
            image: false
        }
    }
});


export const MarketItem = ({itemTitle, requestDate, retailerLogo, itemLink, organization, organizationLink, price, currentAmount, goalAmount, category, shopifyId}) => {


    useEffect(() => {      
            ui.createComponent('product', {
                id: shopifyId,
                node: document.querySelectorAll('[product-id="' + shopifyId + '"]')[0],
                options: {
                    product: {
                        iframe: false,
                        contents: {
                        title: false,
                        price: false,
                        quantity: true,
                        quantityIncrement: true,
                        quantityDecrement: true
                        },
                        cart: {
                            image: false
                        }
                    }
                }
            })
    })


    let [itemQuantity, setItemQuantity] = useState(1);


    const MarketItemWrapper = styled.div`
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.15);
    height: 350px;
    border-radius: 20px;
    background: white;
`
    const bookmarkFill = (category === 'hygeine' ? "#e4f7ff" : category == 'food' ? "#ecffd9" : "#fff");

    const incrementItemQuantity = (direction) => {  
        if (itemQuantity >= 1) {
            if(direction == "plus") {
            setItemQuantity(itemQuantity + 1)
            }
            else if (itemQuantity != 1) {
                setItemQuantity(itemQuantity - 1)
            }
        }
    }



    return(
            <MarketItemWrapper>
                <GridContainer>
                    <BookmarkPositioned fill={bookmarkFill} />
                <MarketItemGrid>
                    <ProductTitle>
                    {itemTitle}
                    <div>Requested {requestDate}</div>
                    </ProductTitle>
                    <Organization>
                        <div>Requested By</div>
                        <a target="_blank" href={organizationLink}>{organization}</a>
                    </Organization>
                    <Price>
                    <div>Price</div>
                        ${price}/unit purchase
                    </Price>
                    <AddToCart buttonText="Add to cart" productId={shopifyId}>
                    </AddToCart>
                    <ProgressBarPositioned currentAmount={currentAmount} goalAmount={goalAmount} />
                    {/* <QuantityPositioned>
                        <QuantitySelector quantity={itemQuantity} adjustQuantity={incrementItemQuantity} />
                    </QuantityPositioned> */}

                </MarketItemGrid>
                </GridContainer>

            </MarketItemWrapper>
    )
}

const MarketItemGrid = styled.div`
    display: grid;
    grid-template-columns: [col1-start] minmax(0, 25%) [col1-end col2-start] minmax(0, 25%) [col2-end col3-start] minmax(0, 25%) [col3-end col4-start] minmax(0, 25%) [col4-end];
    grid-template-rows: [row1-start] minmax(0, 20%) [row1-end row2-start] minmax(0, 40%) [row2-end row3-start] minmax(0, 10%) [row3-end row4-start] minmax(0, 30%) [row4-end];
    column-gap: 10px;
    row-gap: 20px;
    height: 100%;
`

const GridContainer = styled.div`
    padding: 30px;
    height: 290px;
    position: relative;
`

const ProductTitle = styled.div`
  grid-column-start: col1-start;
  grid-column-end: col3-end;
  grid-row-start: row1-start;
  grid-row-end: row1-end;  
  font-weight: bold;
  font-size: 20px;
  div {
      font-weight: 500;
      font-size: ${props => props.theme.fontSizes.small};
      margin-top:5px;
      color: ${props => props.theme.colors.darkGray};
  }
`
const Organization = styled.div`
  grid-column-start: col1-start;
  grid-column-end: col2-end;
  grid-row-start: row2-start;
  grid-row-end: row2-end;
  div {
      text-transform: uppercase;
      font-weight: bold;
      color: ${props => props.theme.colors.darkGray};
      font-size: ${props => props.theme.fontSizes.small};
      margin-bottom: 10px;
  }
  a {
      text-decoration: none;
      color: ${props => props.theme.colors.linkColor};
      font-weight: bold;
  }
`

const Price = styled.div`
    grid-column-start: col3-start;
    grid-column-end: col4-end;
    grid-row-start: row2-start;
    grid-row-end: row2-end;
    div {
        text-transform: uppercase;
        font-weight: bold;
        color: ${props => props.theme.colors.darkGray};
        font-size: ${props => props.theme.fontSizes.small};
        margin-bottom: 10px;
    }
`
const AddToCart = styled(BuyButton)`
    background: white;
    color: black;
    padding: 0px;
    grid-column-start: col1-start;
    grid-column-end: col4-end;
    grid-row-start: row4-start;
    grid-row-end: row4-end;
    align-self: end;
    justify-self: stretch;
    width: unset !important;
`

const ProgressBarPositioned = styled(ProgressBar)`
    grid-column-start: col1-start;
    grid-column-end: col4-end;
    grid-row-start: row3-start;
    grid-row-end: row3-end;
    align-self: center;
`

const QuantityPositioned = styled.div`
    grid-column-start: col1-start;
    grid-column-end: col2-end;
    grid-row-start: row4-start;
    grid-row-end: row4-end;
    align-self: end;
`

const BookmarkPositioned = styled(Bookmark)`
    position: absolute;
    top: -5px;
    right: 30px;
`