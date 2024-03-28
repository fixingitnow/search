import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import upIcon from './up.png'

const MainContainer = styled.div({
    marginBottom: '200px',
})

const WelcomeText = styled.h2({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '48px',
    marginTop: '0',
    marginBottom: '150px',

    '& h2': {
        color: 'rgba(0, 0, 0, 0.75)',
        margin: '0',
    },

    '& span': {
        margin: '0',
        color: 'rgba(0, 0, 0, 0.50)',
    },

})

const SearchBar = styled.div({
    display: 'flex',
    position: 'relative',
    width: '740px',
})

const SearchBarInput = styled.input({
    flex: '1',
    borderRadius: '23px',
    paddingLeft: '2rem',
    height: '84px',
    border: '1px solid rgba(0, 0, 0, 0.35)',
    fontSize: '24px',

    '&:focus': {
        outline: 'none',
        border: '1px solid rgba(0, 0, 0, 0.75)',
    },
})

interface SearchIconProps {
    isFocused: boolean;
    disabled: boolean;
}

const SearchButton = styled.button<SearchIconProps>(props => ({
    position: 'absolute',
    right: '23px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '42px',
    width: '42px',
    border: 'none',
    backgroundColor: 'white',

    '& img': {
        height: '42px',
        width: '42px',
        borderRadius: '8px',
        backgroundColor: props.isFocused ? 'black' : '',
    },
}))

const Search = () => {
    const [search, setSearch] = React.useState('')
    const [validSearch, setIsValidSearch] = React.useState(false)
    const [results, setResults] = React.useState({})

    const fetchData = async () => {
        let data = { 'sentiment': 'positive' }
        return data
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        if (e.target.value.length > 0) {
            setIsValidSearch(true)
            console.log('searching...')

        } else {
            setIsValidSearch(false)
            setResults({})
        }
        setSearch(e.target.value)
    }

    const fetchResults = async () => {
        const aiData = await fetchData()
        setResults(aiData)
    }


    return (
        <MainContainer>
            <WelcomeText>
                <h2>Hello, Dani</h2>
                <span>Just a quick check in</span>
            </WelcomeText>

            <SearchBar>
                <SearchBarInput
                    value={search} onChange={handleChange} type='text' placeholder='Chat with CynchAI...'>
                </SearchBarInput>
                <SearchButton
                    onClick={fetchResults}
                    isFocused={validSearch}
                    disabled={!validSearch}
                >
                    <img src={upIcon} alt="Up Icon" />
                </SearchButton>
            </SearchBar>

            {"sentiment" in results ? <p>{results?.sentiment as string}</p> : ''}
        </MainContainer>
    )
}

export default Search
