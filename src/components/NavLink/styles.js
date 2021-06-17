import styled from "styled-components"

export const StyledListItem = styled.li`
  list-style-type: none;
  border-top: solid 4px
    ${props => (props.isHovering ? " #d83a34" : "transparent")};
  display: inline;
`
