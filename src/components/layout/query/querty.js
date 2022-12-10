import {gql} from "@apollo/client"
const GET_BLOG_Data =gql `
query  {
    posts {
      authores {
        name
        autherPic {
          url
        }
      }
      slug
      title
      id
      postPic {
        url
      }
    }
  }
  
`
const GET_AUTHERS_DATA=gql`
query {
  authores1 {
    name
    slug
    id
    autherPic {
      url
    }
  }
}
`
const GET_POST_DATA=gql`
query post1($slug:String!) {
  post(where: {slug: $slug}) {
    postPic {
      url
    }
    title
    date
    content {
      html
    }
    authores {
      name
      autherPic {
        url
      }
      posts {
        title
        slug
        postPic {
          url
        }
      }
    }
  }
}
`
const GET_AUTHOR_INFO=gql`
query author ($slug:String!) {
  authores1(where: {slug: $slug}) {
    autherPic {
      url
    }
    name
    posts {
      slug
      title
      postPic {
        url
        id
      }
    }
  }
}

`



export {GET_BLOG_Data, GET_AUTHERS_DATA, GET_POST_DATA,GET_AUTHOR_INFO}