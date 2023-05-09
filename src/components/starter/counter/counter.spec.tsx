import { createDOM } from "@builder.io/qwik/testing";
import { expect, test, } from "vitest";
import { Counter } from "./counter";

test('Increases count when "+" is clicked', async () => {
    const {screen, render, userEvent} = await createDOM();

    await render(<Counter/>);

    const count =  screen.querySelector('[data-test="count"]');
    
    expect(count?.innerHTML).toBe('70')
    
    const increaseButton = screen.querySelector('[data-test="btn-increase"]');
    
    await userEvent(increaseButton, 'click');

    expect(count?.innerHTML).toBe('71')
});