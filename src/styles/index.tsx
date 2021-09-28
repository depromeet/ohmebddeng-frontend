import { css, Global } from "@emotion/react";

export const GlobalStyle =()=> {
    return (
        <Global
            styles={css`
                html,
                body {
                    padding: 0;
                    margin: 0;
                }

                * {
                    box-sizing: border-box;
                }
            `}
        />
    );
};
