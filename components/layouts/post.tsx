import { Text, Title, A, styled } from "../theme"
import Link from "next/link"
import MdxContent from "../mdx-content"
import Layout from "../layout"
import { PostWithMdx } from "../../types"

const HeadersList = styled.div({
  position: "fixed",
  top: 164,
  ml: "-308px",
  width: 252,
  textAlign: "right",
  visibility: "hidden",
  fontSize: "$1",
  "& ol": {
    listStyle: "none",
    pl: 0
  },
  xl: {
    visibility: "visible"
  }
})

const HeaderLink = styled(A, {
  textDecoration: "none",
  display: "block",
  padding: "$0",
  borderRadius: 4,
  color: "$secondaryFill"
})

export default function PostLayout({
  mdxSource,
  frontMatter,
  headers
}: PostWithMdx) {
  const { title, author, date } = frontMatter

  return (
    <Layout {...frontMatter}>
      <article>
        <header>
          <Title>
            {title}
            <Text variant="detail">
              {author} •{" "}
              {new Date(date).toLocaleDateString("en-us", {
                month: "short",
                day: "numeric",
                year: "numeric"
              })}
            </Text>
          </Title>
        </header>
        <main>
          <MdxContent source={mdxSource} />
        </main>
        <HeadersList>
          <ol>
            {headers.map(([_, header, link], i) => (
              <li key={i}>
                <Link href={link} passHref>
                  <HeaderLink>{header}</HeaderLink>
                </Link>
              </li>
            ))}
          </ol>
        </HeadersList>
      </article>
    </Layout>
  )
}
