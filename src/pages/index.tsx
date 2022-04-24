import type { GetServerSideProps } from 'next'
import React from 'react'
import { styled } from '../../stitches.config'
import { globalStyles } from '../styles/global'
//import logo from '../assets/vercel.svg'
import { Container } from '../styles/pages/Home'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$loContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1'
      },
      2: {
        fontSize: '$2'
      },
      3: {
        fontSize: '$3'
      }
    }
  }
})

interface HomeProps {
  repositories: string[]
}
//
//<img id="svn-img" src={logo} alt="" />
export default function Home(props: HomeProps) {
  return (
    <>
      {globalStyles()}
      <Container>
        <h1 id="svn-img">teste</h1>
        <ul>
          {props.repositories.map((repo: string) => (
            <li key={repo}>
              <Text as="h1" size="1">
                {repo}
              </Text>
            </li>
          ))}
        </ul>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/diego3g/repos')
  const data = await response.json()
  const repositoryNames = data.map((item: { name: string[] }) => item.name)
  return {
    props: {
      repositories: repositoryNames
    }
  }
}
