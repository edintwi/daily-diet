import styled, { css } from "styled-components/native";

export const Label = styled.Text`
    font-family: ${(props) => props.theme.fontFamily.BOLD};
    color: ${(props) => props.theme.colors.base.GRAY_200};
    font-size: ${(props) => props.theme.fontSize.MD}px;
`

export const StyledInput = styled.TextInput<{ $isTextArea: boolean }>`
    font-family: ${(props) => props.theme.fontFamily.REGULAR};
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.colors.base.GRAY_500};
    padding: 10px;
    min-width: 50%;
    max-width: 100%;
    ${(props) => props.$isTextArea ? css`height: 120px;` : css`height: 50px;`};
`