import styled from "styled-components";

const Styles = styled.div`
  h2 {
    font-size: 1.95rem;
  }
  h3 {
    font-size: 1.56rem;
  }
  h4 {
    font-size: 1.25rem;
  }
  h5 {
    font-size: 1rem;
  }
  h6 {
    font-size: 0.8rem;
  }
  p {
    font-size: 1rem;
  }
  blockquote {
    font-size: 1rem;
  }
  cite {
    font-size: 0.8125rem;
  }

  .wp-block-quote {
    border-left: solid #aaa 3px;
    display: flex;
    flex-flow: column;
    font-size: 1rem;
    padding: 0.33em;
    p {
      ::before,
      ::after {
        content: '"';
      }
    }
    cite {
      align-self: flex-end;
      ::before {
        content: "-";
      }
    }
  }

  .is-large {
    border: none;
    p {
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 300;
    }
  }

  pre {
    white-space: pre-wrap;
    font-family: ${props => props.preformattedFontFamily || "Menlo"}, monospace;
  }

  .is-small-text {
    font-size: 0.875rem;
  }

  .is-regular-text {
    font-size: 1rem;
  }

  .is-large-text {
    font-size: 2.25rem;
  }
  .is-larger-text {
    font-size: 3rem;
  }

  .wp-block-image {
    display: flex;
    flex-flow: column;
    align-items: center;
    img {
      border: solid 4px #aaa;
    }
  }

  .wp-block-columns {
    display: grid;
    column-gap: ${props => props.columnGap || "0.8rem"};
  }
  .has-2-columns {
    grid-template-columns: repeat(2, 1fr);
    .layout-column-1 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 1/2;
      }
    }
    .layout-column-2 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 2/3;
      }
    }
  }
  .has-3-columns {
    grid-template-columns: repeat(3, 1fr);
    .layout-column-1 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 1/2;
      }
    }
    .layout-column-2 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 2/3;
      }
    }
    .layout-column-3 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 3/4;
      }
    }
  }
  .has-4-columns {
    grid-template-columns: repeat(4, 1fr);
    .layout-column-1 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 1/2;
      }
    }
    .layout-column-2 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 2/3;
      }
    }
    .layout-column-3 {
      grid-column: 1/-1;
      @media (min-width: 900px) {
        grid-column: 3/4;
      }
    }
  }
  .has-5-columns {
    grid-template-columns: repeat(5, 1fr);
  }
  .has-6-columns {
    grid-template-columns: repeat(6, 1fr);
    .layout-column-1 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 1/3;
      }
    }
    .layout-column-2 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 3/5;
      }
    }
    .layout-column-3 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 5/7;
      }
    }
    .layout-column-4 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 1/3;
      }
    }
    .layout-column-5 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 3/5;
      }
    }
    .layout-column-6 {
      grid-column: 1/-1;
      @media (min-width: 700px) {
        grid-column: 5/7;
      }
    }
  }

  .layout-column-1 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 1/2;
    }
  }
  .layout-column-2 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 2/3;
    }
  }
  .layout-column-3 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 3/4;
    }
  }
  .layout-column-4 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 4/5;
    }
  }
  .layout-column-5 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 5/6;
    }
  }
  .layout-column-6 {
    grid-column: 1/-1;
    @media (min-width: 700px) {
      grid-column: 6/7;
    }
  }
`;

export default Styles;
