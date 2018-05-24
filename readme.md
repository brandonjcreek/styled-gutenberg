# styled-gutenberg

## Introduction

A component for automatically adding layout styles for content generated in the Wordpress Gutenberg editor.

## Code Samples

Example React component fetching post content.

        import Gutenberg from "styled-gutenberg"

        class App extends Component {
          state = { content: { rendered: "" } };
          async componentWillMount() {
            const postRes = await fetch(
              "https://YOUR_WORDPRESS_API_URL/wp-json/wp/v2/posts?id=POST_ID"
            );
            const post = await postRes.json();
            this.setState(...post);
          }
          render() {
            return <Gutenberg>{this.state.content.rendered}</Gutenberg>;
          }
        }

        export default App;

## Installation

npm -i styled-gutenberg
