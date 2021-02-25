# Login Page

This project is implementation of the this [design](https://projects.invisionapp.com/share/K7V8HV6Q9HM#/screens)

## Usage Steps

### Fetch

```sh
git clone https://github.com/suleymanbariseser/loginpage.git
```

### Install

You can install via yarn or npm install

### Run

You can run it after installing the project. Then, use yarn start or npm start to run project.

## Description

To avoid using external packages, I did not used any external packages except styled-components. In my opinion, Styled-components is more effective and easy to write reusable code. Becuase, it is developed with component itself and even, after development finished, they can be changed easly.

As we know, using redux forms are not enough good because, they are causing waste re-renders and this is a bad experience for client. Therefore, I code a useForm custom hook which is working with ref of inputs, I am inspired from react-hook-forms but I did not use it.
