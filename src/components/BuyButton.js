import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import breakpoint, {map} from 'styled-components-breakpoint';
import { IoIosPerson } from "react-icons/io";

export const BuyButton = ({buttonText, className, primary, login, productId}) => {

    return(
        <div product-id={productId} className={className}>
        </div>
    )
}
