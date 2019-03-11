import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"
import SEO from "../../components/seo"

const SingleAuthor = props => {
  const {
    pageContext: { name, posts },
  } = props
  return (
    <Layout classNames="archive">
      <SEO
        title={`Author - ${name}`}
        description={`A collection of posts written by ${name}.`}
      />
      <header className="page-header">
        <h1 className="page-title">
          Author Archives: <span className="page-description">{name}</span>
        </h1>
      </header>

      {posts.nodes &&
        posts.nodes.map(post => {
          return <PostEntry key={post.postId} post={post} />
        })}
    </Layout>
  )
}

export default SingleAuthor