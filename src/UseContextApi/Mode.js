
import React, { useContext, createContext } from "react";
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

const Book = {
    info1: {
        Title: "Think and Grow Rich",
        Author: "Napoline Hill",
        Description: "Success"
    },
    info2: {
        Title: "Rich Dad Poor Dad",
        Author: "Robert",
        Description: "Finance"
    }

}

// const ThemeContext = createContext(themes.light);
const ThemeContext1 = createContext(Book.info1);

export default function Mode() {
    return (
        <ThemeContext1.Provider value={Book.info2}>
            {/* <Toolbar /> */}
            <Form />
        </ThemeContext1.Provider>
    );
}

// function Toolbar(props) {
//     return (
//         <div>
//             <ThemedButton />
//         </div>
//     );
// }

function Form(props) {
    return (
        <>
            <CreateForm />
        </>
    )
}
// function ThemedButton() {
//     const theme = useContext(ThemeContext);
//     return (
//         <button style={{ background: theme.background, color: theme.foreground }}>
//             I am styled by theme context!
//         </button>
//     );
// }

function CreateForm() {
    const content = useContext(ThemeContext1);
    // console.log('content', content)
    console.log('data....', content.Title)
    console.log('data....', content.Author)
    console.log('data....', content.Description)
    {
        return (
            <form>
                <label>Title</label>
                <input type='text' value={content.Title} />
                <br />
                <label>Author</label>
                <input type='text' value={content.Author} />
                <br />
                <label>Description</label>
                <input type='text' value={content.Description} />
                <br />
            </form>
        )
    }
}