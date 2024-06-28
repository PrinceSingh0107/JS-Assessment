# MyContract

## Overview

`MyContract` is a simple smart contract that demonstrates the use of `require()`, `assert()`, and `revert()` statements. This contract allows the owner to deposit and withdraw funds, check the balance, and reset the balance to zero under certain conditions.

## Features

- **Deposit:** Allows anyone to deposit a specified amount of funds.
- **Withdraw:** Allows only the owner to withdraw a specified amount of funds.
- **Check Balance:** Allows anyone to check the current balance.
- **Reset Balance:** Allows only the owner to reset the balance to zero, provided the balance is already zero.
- **Revert Example:** A function that always reverts with a custom error message.

## Functions

### `deposit(uint256 amount)`

- **Description:** Deposits the specified `amount` to the contract balance.
- **Conditions:** The `amount` must be greater than zero.

### `withdraw(uint256 amount)`

- **Description:** Withdraws the specified `amount` from the contract balance.
- **Conditions:** The caller must be the owner, and the `amount` must not exceed the current balance.

### `checkBalance()`

- **Description:** Returns the current balance of the contract.
- **Conditions:** None.

### `resetBalance()`

- **Description:** Resets the balance to zero.
- **Conditions:** The caller must be the owner, and the balance must be zero.

### `revertExample()`

- **Description:** A function that always reverts with the message "This function always reverts".
- **Conditions:** None.

## Usage

1. Deploy the contract.
2. Use the `deposit` function to add funds.
3. Use the `withdraw` function to remove funds (owner only).
4. Use the `checkBalance` function to view the current balance.
5. Use the `resetBalance` function to reset the balance to zero (owner only).
6. Use the `revertExample` function to see the revert statement in action.

## License

This project is licensed under the MIT License.
