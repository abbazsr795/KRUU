import React from 'react'
import ReactDOM from 'react-dom'
import { SideSheet, Pane, Heading, Card, Button } from 'evergreen-ui'

export function TSideSheet() {
    const [isShown, setIsShown] = React.useState(false)
  
    return (
      <React.Fragment>
        <SideSheet
          isShown={isShown}
          onCloseComplete={() => setIsShown(false)}
          containerProps={{
            display: 'flex',
            flex: '1',
            flexDirection: 'column'
          }}
        >
          <Pane zIndex={1} flexShrink={0} elevation={0} backgroundColor="white">
            <Pane padding={16}>
              <Heading size={600}>VACCINIC</Heading>
            </Pane>
          </Pane>
          <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
            <h1 className='greyhover'>Home</h1>
            <h1>Vaccine Index</h1>
            <h1>My Doses</h1>
            <h1>Recommended Vaccines</h1>
            <h1>Current Vaccines</h1>
            <h1>Add Vaccines</h1>
          </Pane>
        </SideSheet>
        <Button onClick={() => setIsShown(true)}><img className='icon' src='https://img.icons8.com/ios-filled/512/stripped-patterns.png'/></Button>
      </React.Fragment>
    )
  }
