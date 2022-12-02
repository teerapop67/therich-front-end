import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useActiveWeb3React } from '../../hooks'
import { useAllTransactions } from '../../state/transactions/hooks'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { MouseoverTooltip } from '../../components/Tooltip'
import { Link } from 'react-router-dom'
import { Search } from 'react-feather'

const HistoryContainer = styled.div`
  padding: 12px;
  width: 1200px;
`
const HistoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-shadow: rgba(255, 255, 255, 0.2) 0px 2px 8px 0px;
`

const GridHistory = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 200px auto;
  align-items: center;
  text-align: left;

  & > h4 {
    font-size: 16px;
    font-weight: bold;
  }

  & > p {
    font-size: 16px;
  }
`
const TransactionsLink = styled.div`
  color: ${({ theme }) => theme.text1};
  font-size: 16px;
  width: 100%;
  text-align: left;
  font-weight: bold;
  padding: 20px 0;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`
const TapHeader = styled.div`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
`

const WrapperHeader = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 50%;
`

const BackToSwap = styled(ArrowLeft)`
  font-size: 20px;
  color: ${({ theme }) => theme.text1};
  cursor: pointer;
`
const WrapperSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .wrapper {
    display: flex;
    align-items: center;
    background: #fff;
    border-radius: 12px;
    font-size: 14px;
    padding-left: 20px;
  }
`

const SearchInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 12px;
  padding: 16px;
  font-size: 14px;
  border: none;

  &:focus {
    outline: none;
  }
`

const GridTransactions = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
`

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  padding: 30px 0;
  z-index: 999;

  .page {
    display: flex;
    padding: 5px 10px;
    box-shadow: ${({ theme }) => theme.shadow2};
    align-items: center;
    border-radius: 12px;
    justify-content: center;
    background: gray;
    color: ${({ theme }) => theme.text1};
  }
`

const HistoryTransaction: React.FC<any> = () => {
  const [allShowTransaction, setAllShowTransaction] = useState([])
  const [showAllForSearch, setShowAllForSearch] = useState([])
  const [allTransactionFromApi, setAllTransactionFromApi] = useState([])
  const [tapAllTransactionActive, setTapAllTransactionActive] = useState('all')
  const [chooseTransaction, setChooseTransaction] = useState<any>({})
  const [convertTimestamp, setConvertTimestamp] = useState<any>()

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(7)
  const [lastIndex, setLastIndex] = useState(5)
  const [firstIndex, setFirstIndex] = useState(0)

  const { account } = useActiveWeb3React()
  const allTransactions = useAllTransactions()

  useEffect(() => {
    //"0x79F4A917dd4f8e93c19A0340C0868573F6914A15"
    axios
      .get(
        'https://api-moonbase.moonscan.io/api?module=account&action=txlist&address=0xc671686E97A7fFCb1CD93b51057fE333a14128Ff&startblock=1&endblock=99999999&sort=asc&apikey=YourApiKeyToken'
      )
      .then((res: any) => {
        if (res.data) {
          console.log('here: ', res.data)
          let onlyTransactionUser: any = []
          let onlyTransactionUser2: any = []

          res.data.result.map((users: any) => {
            // const pending = !tx?.receipt
            // const success = !pending && tx && (tx.receipt?.status === 1 || typeof tx.receipt?.status === 'undefined')

            if (users.from.toLowerCase() === account?.toLowerCase()) {
              const tx = allTransactions?.[users.hash]
              const summary = tx?.summary
              if (summary) {
                onlyTransactionUser.push(summary)
                onlyTransactionUser2.push(users)
              }
            }
            // if (account?.toLowerCase() === '0xebbe075d5089d0097d168563dc7adf015e5b2520'.toLowerCase()) {
            //   const tx = allTransactions?.[users.hash]
            //   const summary = tx?.summary
            //   onlyTransactionUser.push(summary)
            //   onlyTransactionUser2.push(users)
            // }
          })
          setAllShowTransaction(onlyTransactionUser.reverse())
          console.log('unde: ', onlyTransactionUser)
          console.log('trans: ', onlyTransactionUser2)
          setShowAllForSearch(onlyTransactionUser.slice(firstIndex, lastIndex))
          setAllTransactionFromApi(onlyTransactionUser2.reverse().slice(firstIndex, lastIndex))
          setTotalPage(Math.ceil(onlyTransactionUser2.length / 5))
        }
      })
  }, [page])

  // console.log('account: ', showAllForSearch)

  const handleTransaction = (hash: any) => {
    setChooseTransaction(allTransactions?.[hash])
    let time: any = allTransactions?.[hash]?.addedTime
    var date = new Date(time)
    setConvertTimestamp(date)

    setTapAllTransactionActive('info')
  }

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      if (e.target.value) {
        setLastIndex(-1)
        setFirstIndex(1)
        const filterAllTransaction = allShowTransaction.filter((items: any) => {
          const objectForSearch = {
            summary: items
          }
          return Object.values(objectForSearch)
            .join('')
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        })

        setShowAllForSearch(filterAllTransaction)
      } else {
        setShowAllForSearch(allShowTransaction)
      }
    }
  }

  const convertAllTimestamps = (time: number) => {
    var date = new Date(time)
    let alreadyConvert =
      date.getDate() +
      '-' +
      (parseInt(date.getMonth().toString()) + 1) +
      '-' +
      date.getFullYear() +
      ' ' +
      date.getHours() +
      ':' +
      date.getMinutes() +
      ':' +
      date.getSeconds()

    return <>{alreadyConvert}</>
  }

  const handlePagination = (direction: string) => {
    let pageChange = page
    console.log(pageChange)

    if (direction === 'right' && pageChange < totalPage) {
      pageChange += 1
      setPage(pageChange)
    } else if (direction === 'left' && pageChange > 1) {
      pageChange -= 1
      setPage(pageChange)
    }
    const indexOfLast = pageChange * 5
    const indexOfFirst = indexOfLast - 5

    setLastIndex(indexOfLast)
    setFirstIndex(indexOfFirst)
  }

  // console.log('all: ', allTimestamps)

  return (
    <HistoryContainer>
      <MouseoverTooltip text="Back to swap">
        <Link to="/swap">
          <BackToSwap />
        </Link>
      </MouseoverTooltip>
      <WrapperSearch>
        <span className="wrapper">
          <Search color="#222" style={{ width: '20px' }} />
          <SearchInput
            onKeyDown={handleSearch}
            onChange={evt => !evt.target.value && setShowAllForSearch(allShowTransaction)}
            type="text"
            placeholder="search transaction...swap/add/remove"
          />
        </span>
      </WrapperSearch>
      <WrapperHeader>
        <TapHeader onClick={() => setTapAllTransactionActive('all')}>All Transactions</TapHeader>
      </WrapperHeader>

      <HistoryWrapper>
        {tapAllTransactionActive !== 'info' && (
          <GridTransactions style={{ width: '100%', justifyItems: 'center', fontWeight: 'bold', marginBottom: '10px' }}>
            <span>Timestamp</span>
            <span>Action</span>
            <span>Block</span>
            <span>From</span>
            <span>To</span>
          </GridTransactions>
        )}

        {tapAllTransactionActive === 'all' &&
          allTransactionFromApi.map(
            (trans: any, i) =>
              showAllForSearch[i] && (
                <TransactionsLink onClick={() => handleTransaction(trans.hash)} key={i}>
                  <GridTransactions>
                    <span style={{ textAlign: 'left' }}>
                      {convertAllTimestamps(allTransactions?.[trans.hash]?.addedTime)}
                    </span>
                    <span style={{ textAlign: 'left' }}>{showAllForSearch[i]}</span>
                    <span style={{ textAlign: 'center' }}>{allTransactions?.[trans.hash]?.receipt?.blockNumber}</span>
                    <span style={{ textAlign: 'center' }}>
                      {allTransactions?.[trans.hash]?.receipt?.from.substring(0, 6) +
                        '...' +
                        allTransactions?.[trans.hash]?.receipt?.from.substring(34)}
                    </span>
                    <span style={{ textAlign: 'center' }}>
                      {allTransactions?.[trans.hash]?.receipt?.to.substring(0, 6) +
                        '...' +
                        allTransactions?.[trans.hash]?.receipt?.to.substring(34)}
                    </span>
                  </GridTransactions>
                </TransactionsLink>
              )
          )}

        {tapAllTransactionActive === 'info' && (
          <>
            <GridHistory>
              <h4>Timestamp : </h4>
              <p>
                {convertTimestamp &&
                  convertTimestamp.getDate() +
                    '-' +
                    (parseInt(convertTimestamp.getMonth()) + 1) +
                    '-' +
                    convertTimestamp.getFullYear() +
                    ' ' +
                    convertTimestamp.getHours() +
                    ':' +
                    convertTimestamp.getMinutes() +
                    ':' +
                    convertTimestamp.getSeconds()}
              </p>
            </GridHistory>
            <GridHistory>
              <h4>Block : </h4>
              <p>{chooseTransaction?.receipt?.blockNumber}</p>
            </GridHistory>
            <GridHistory>
              <h4>EVM Txhash : </h4>
              <p>{chooseTransaction?.hash}</p>
            </GridHistory>
            <GridHistory>
              <h4>From : </h4>
              <p>{chooseTransaction?.receipt?.from}</p>
            </GridHistory>
            <GridHistory>
              <h4>To : </h4>
              <p>{chooseTransaction?.receipt?.to}</p>
            </GridHistory>
          </>
        )}
      </HistoryWrapper>
      <PaginationWrapper>
        <ArrowLeft cursor="pointer" onClick={() => handlePagination('left')} />
        <div className="page">{page}</div>
        <ArrowRight cursor="pointer" onClick={() => handlePagination('right')} />
      </PaginationWrapper>
    </HistoryContainer>
  )
}

export default HistoryTransaction
