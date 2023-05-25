//Temporarily store data here

import React from 'react';
import ReactDOM from 'react-dom';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import "./cards.css";
//Temporarily store data here

<html>
<body> 
    <div id="root"></div>
    <script src="/bundle.js"></script>
</body>
</html>

const PostsData = [{
  "category": "Newaasds",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  "image": "https://source.unsplash.com/user/erondu/600x400"
}, {
  "category": "Travasel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living a nomadic lifestyle",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
}, {
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme for React & the WP-API",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
}, {
  "category": "News",
  "title": "CNN Acquire BEME",
  "text": "CNN purchased Casey Neistat's Beme app for $25million.",
  "image": "https://source.unsplash.com/user/erondu/600x400"
}, {
  "category": "Travel",
  "title": "Nomad Lifestyle",
  "text": "Learn our tips and tricks on living a nomadic lifestyle",
  "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
}, {
  "category": "Development",
  "title": "React and the WP-API",
  "text": "The first ever decoupled starter theme for React & the WP-API",
  "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
}];

// Start App


class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    };
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }
  render() {
    return /*#__PURE__*/_jsxs("div", {
      children: [/*#__PURE__*/_jsx("header", {
        className: "app-header"
      }), /*#__PURE__*/_jsx(Title, {}), /*#__PURE__*/_jsx("div", {
        className: "app-card-list",
        id: "app-card-list",
        children: Object.keys(this.state.posts).map(key => /*#__PURE__*/_jsx(Card, {
          index: key,
          details: this.state.posts[key]
        }, key))
      })]
    });
  }
}
class Title extends React.Component {
  render() {
    return /*#__PURE__*/_jsx("section", {
      className: "app-title",
      children: /*#__PURE__*/_jsxs("div", {
        className: "app-title-content",
        children: [/*#__PURE__*/_jsx("h1", {
          children: "Latest News"
        }), /*#__PURE__*/_jsx("p", {
          children: "Covering March & April 2015"
        }), /*#__PURE__*/_jsxs("a", {
          className: "designer-link",
          href: "https://dribbble.com/shots/1978243-Latest-News",
          target: "_blank",
          children: ["Design from ", /*#__PURE__*/_jsx("i", {
            className: "fa fa-dribbble"
          })]
        })]
      })
    });
  }
}
class Button extends React.Component {
  render() {
    return /*#__PURE__*/_jsxs("button", {
      className: "button button-primary",
      children: [/*#__PURE__*/_jsx("i", {
        className: "fa fa-chevron-right"
      }), " Find out more"]
    });
  }
}
class CardHeader extends React.Component {
  render() {
    const {
      image,
      category
    } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')'
    };
    return /*#__PURE__*/_jsx("header", {
      style: style,
      className: "card-header",
      children: /*#__PURE__*/_jsx("h4", {
        className: "card-header--title",
        children: category
      })
    });
  }
}
class CardBody extends React.Component {
  render() {
    return /*#__PURE__*/_jsxs("div", {
      className: "card-body",
      children: [/*#__PURE__*/_jsx("p", {
        className: "date",
        children: "March 20 2015"
      }), /*#__PURE__*/_jsx("h2", {
        children: this.props.title
      }), /*#__PURE__*/_jsx("p", {
        className: "body-content",
        children: this.props.text
      }), /*#__PURE__*/_jsx(Button, {})]
    });
  }
}
class Card extends React.Component {
  render() {
    return /*#__PURE__*/_jsxs("article", {
      className: "card",
      children: [/*#__PURE__*/_jsx(CardHeader, {
        category: this.props.details.category,
        image: this.props.details.image
      }), /*#__PURE__*/_jsx(CardBody, {
        title: this.props.details.title,
        text: this.props.details.text
      })]
    });
  }
}
ReactDOM.render( /*#__PURE__*/_jsx(Main, {}), document.getElementById('root'));