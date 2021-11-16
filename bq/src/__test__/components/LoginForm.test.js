import React from "react";
import { render, screen, fireEvent} from '@testing-library/react';

import LoginForm from "../../components/Login/LoginForm";

beforeEach(()=> render (<LoginForm />))
test('test to render LoginForm ', () => {
    const handleLogin = jest.fn();


    const contentEmail=screen.getByPlaceholderText('Write your Email')
    const contentPassword=screen.getByPlaceholderText('Write your Password')
    const contentSubmit=screen.getByRole('button',{name:/Login/i});

    expect(contentEmail).toBeInTheDocument()
    expect(contentPassword).toBeInTheDocument()
    expect(contentSubmit).toBeInTheDocument()

    fireEvent.click(contentSubmit)
     fireEvent.change(contentEmail, {
        target: {value:'waiterflor@burgerqueen.com'}
    })
    fireEvent.change(contentPassword, {
        target: {value:'123456'}
    })

    
    // expect(handleSubmit).toHaveBeenCalled()

    // fireEvent.submit(contentSubmit)

    // expect(handleSubmit).toHaveBeenCalled()

    expect(handleSubmit).toHaveBeenCalledWith('waiterflor@burgerqueen.com','123456')
    });