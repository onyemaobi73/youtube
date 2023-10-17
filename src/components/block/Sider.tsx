import React from 'react'
import styled from 'styled-components'

const Sider = () => {
  return (
    <Container>
      <Main>
        <Top>Menu</Top>
      </Main>
    </Container>
  )
}

export default Sider

const Top = styled.div``
const Main = styled.div`
width: 200px;
height: 90vh;
background-color: red;
`
const Container = styled.div`
width: 300px;
height: 100vh;
background-color: dodgerblue;
`