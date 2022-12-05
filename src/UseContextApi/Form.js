import React, { useContext } from 'react'
import { ThemeContext1 } from './Book'
function Form() {
    const theme = useContext(ThemeContext1)
    return (
        <div>

            <form>
                <label>Title</label>
                <input type='text' value={theme.Title} />
                <br />
                <label>Author</label>
                <input type='text' value={theme.Author} />
                <br />
                <label>Description</label>
                <input type='text' value={theme.Description} />
                <br />
            </form>

            {/* <dd>
                <dl>Title:{theme.Title}</dl>
            </dd> */}

        </div>
    )
}

export default Form
