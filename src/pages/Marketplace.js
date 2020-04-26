import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { TitleSection } from '../components/TitleSection';
import { MarketItem } from "../components/MarketItem";
import { FilterItems } from "../components/FilterItems";
import ShopifyBuy from "@shopify/buy-button-js";

let activeCategories = ["hygeine", "food"];


const data = [{
    itemTitle: "Hand Sanitizer",
    requestDate: "5/6/20",
    itemLink: "https://google.com",
    organizationLink: "https://google.com",
    organization: "Downtown Women's Center",
    price: 5,
    currentAmount: 30,
    goalAmount: 120,
    category: "hygeine",
    shopifyId: 4519509098531
},
{
    itemTitle: "Hand Sanitizer",
    requestDate: "5/6/20",
    itemLink: "https://google.com",
    organizationLink: "https://google.com",
    organization: "Mission Chapel",
    price: 8,
    currentAmount: 80,
    goalAmount: 120,
    category: "food",
    shopifyId: 4519522009123
}];

export const Marketplace = () => {

    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        activeCategories = ["hygeine", "food"];
        initialLoad();

    const client = ShopifyBuy.buildClient({
        domain: 'wishlist-dm.myshopify.com',
        storefrontAccessToken: '178d0ebabcacb24093b6ee12d8b1b108'
    });

    const ui = ShopifyBuy.UI.init(client);
        }, [])

    const filterData = (category) => {
        const index = activeCategories.indexOf(category);
        console.log(index)
        if (index > -1) {
            document.getElementById(category).classList.toggle('inactiveFilter')
            activeCategories.splice(index, 1)
        } else {
            document.getElementById(category).classList.toggle('inactiveFilter')
            activeCategories.push(category)
        }
        let categoriesToMatch = new Set(activeCategories);
        setFilteredData(data.filter(({category}) => categoriesToMatch.has(category)));
    }

    const initialLoad = () => {
        let categoriesToMatch = new Set(activeCategories);
        setFilteredData(data.filter(({category}) => categoriesToMatch.has(category)));
    }

        
    return(
        <div>
            <TitleSection titleText="Marketplace" />
            <FilterItems filterFunction={filterData}/>
            <MarketWrapper>
                {filteredData.filter(data => data.category).map((data) => 
                                    <MarketItem
                                    itemTitle={data.itemTitle}
                                    requestDate={data.requestDate}
                                    itemLink={data.itemLink}
                                    organizationLink={data.organizationLink}
                                    organization={data.organization}
                                    price={data.price}
                                    currentAmount={data.currentAmount}
                                    goalAmount={data.goalAmount}
                                    category={data.category}
                                    shopifyId={data.shopifyId}
 />
                )}
            </MarketWrapper>

        </div>
    )
}

const MarketWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 350px;
    column-gap: 50px;
    row-gap: 50px;
    ${breakpoint('xs')`
    grid-template-columns: repeat(1, 1fr);
    `}

    ${breakpoint('s')`
    grid-template-columns: repeat(1, 1fr);
    `}

    ${breakpoint('md')`
    grid-template-columns: repeat(2, 1fr);
    `}

    ${breakpoint('lg')`
    grid-template-columns: repeat(3, 1fr);
    `}

    ${breakpoint('xl')`
    grid-template-columns: repeat(3, 1fr);
    `}
`