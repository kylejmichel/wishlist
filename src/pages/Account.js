import React, { useState, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider, ThemeContext } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import { Button } from '../components/Button';

const data = {
    averageDonation: 5.43,
    totalDonation: 500,
    earnings: [
        {
            date: "5/7",
            amt: 55
        },
        {
            date: "5/8",
            amt: 30
        },
        {
            date: "5/9",
            amt: 100
        },
        {
            date: "5/10",
            amt: 150
        },
        {
            date: "5/11",
            amt: 50
        },
        {
            date: "5/12",
            amt: 75
        },
        {
            date: "5/13",
            amt: 10
        }

    ]
}

export const Account = () => {
    return(
        <AccountWrapper>
            <AccountGrid>
                <AccountModal className="averageDonation">
                    <ModalHeader>
                        ${data.averageDonation}
                    </ModalHeader>
                    <ModalSubtext>
                        Average donation
                    </ModalSubtext>
                </AccountModal>
                <AccountModal className="totalDonations">
                <ModalHeader>
                        ${data.totalDonation}
                    </ModalHeader>
                    <ModalSubtext>
                        Total donations
                    </ModalSubtext>
                </AccountModal>
                <AccountModal className="earningsGraph">
                    <ChartHeader>

                            <ModalSubtext className="smallLabel">
                            Donations over time
                           </ModalSubtext>
                           <Payout buttonText="View payouts"/>

                    </ChartHeader>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart width={600} height={300} data={data.earnings}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Area type="monotone" dataKey="amt" stroke="#8884d8" strokeWidth={4} fill="url(#colorUv)" />
                            <Tooltip formatter={(value, name) => ['$' + value, ""]} separator="" />
                            <XAxis dataKey="date" stroke="#ccc" axisLine={false} />
                        </AreaChart>
                    </ResponsiveContainer>
                </AccountModal>
                <AccountModal className="donationsMap">4</AccountModal>
                <AccountModal className="itemsGrid">5</AccountModal>
                <AccountModal className="details1">6</AccountModal>
                <AccountModal className="details2">7</AccountModal>
            </AccountGrid>

        </AccountWrapper>
    )
}

const AccountWrapper = styled.div`
    
`

const AccountGrid = styled.div`
    display: grid;
    column-gap: 30px;
    row-gap: 30px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, calc(${props => props.theme.fullHeight} * .1));

    ${breakpoint('xs')`
     grid-template-rows: repeat(8, calc(${props => props.theme.fullHeight} * .2));
    `}

    ${breakpoint('s')`

    `}

    ${breakpoint('md')`
    grid-template-rows: repeat(8, calc(${props => props.theme.fullHeight} * .15));
    `}

    ${breakpoint('lg')`
    grid-template-rows: repeat(8, calc(${props => props.theme.fullHeight} * .075));
    `}

    ${breakpoint('xl')`

    `}
`

const AccountModal = styled.div`
    background: white;
    ${props => props.theme.elements.shadow}
    border-radius: ${props => props.theme.elements.borderRadius};
    padding: 30px;
    &.averageDonation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: ${props => props.theme.colors.palette.first};
         grid-column: 1 / 5;
         grid-row: 1 / 2;
         ${breakpoint('md')`
            grid-column: 1 / 3;
            grid-row: 1 / 2;
        `}
        ${breakpoint('lg')`
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        `}

    }
    &.totalDonations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: ${props => props.theme.colors.palette.second};
        grid-column: 5 / 9;
         grid-row: 1 / 2;
         ${breakpoint('md')`
         grid-column: 3 / 5;
         grid-row: 1 / 2;
     `}
     ${breakpoint('lg')`
        grid-column: 2 / 3;
        grid-row: 1 / 3;
    `}

    }
    &.earningsGraph {
        position: relative;
        grid-column: 1 / 9;
        grid-row: 3 / 5;
        ${breakpoint('md')`
            grid-column: 1 / 5;
            grid-row: 2 / 5;
        `}
        ${breakpoint('lg')`
        grid-column: 3 / 7;
        grid-row: 1 / 5;
        `}
        p.smallLabel {
            position: absolute;
            top: 30px;
            left: 30px;
        }
    }
    &.donationsMap {
        grid-column: 1 / 9;
        grid-row: 5 / 7;
        ${breakpoint('md')`
            grid-column: 5 / 9;
            grid-row: 2 / 5;
        `}
        ${breakpoint('lg')`
        grid-column: 7 / 9;
        grid-row: 1 / 5;
        `}
    }
    &.itemsGrid {
        grid-column: 1 / 9;
        grid-row: 7 / 8;
        ${breakpoint('md')`
            grid-column: 1 / 9;
            grid-row: 5 / 7;
        `}
        ${breakpoint('lg')`
        grid-column: 1 / 6;
        grid-row: 5 / 9;
        `}
    }
    &.details1 {
        grid-column: 1 / 9;
        grid-row: 2 / 3;
        ${breakpoint('md')`
        grid-column: 5 / 9;
        grid-row: 1 / 2;
    `}
       ${breakpoint('lg')`
        grid-column: 1 / 3;
        grid-row: 3 / 5;
        `}
    }
    &.details2 {
        grid-column: 1 / 9;
        grid-row: 8 / 9;
        ${breakpoint('md')`
            grid-column: 1 / 9;
            grid-row: 7 / 9;
        `}
        ${breakpoint('lg')`
        grid-column: 6 / 9;
        grid-row: 5 / 9;
        `}
    }
`

const ModalHeader = styled.h1`
    font-size: ${props => props.theme.fontSizes.large};
    line-height: 1em;
    margin: 0;
`

const ModalSubtext = styled.p`
    font-size: ${props => props.theme.fontSizes.small};
    text-transform: uppercase;
      font-weight: bold;
      color: ${props => props.theme.colors.darkGray};
`

const ChartHeader = styled.div`
    display: flex;
`

const Payout = styled(Button)`
    position: absolute;
    top: 30px;
    right: 30px;
    z-index: 2;
`