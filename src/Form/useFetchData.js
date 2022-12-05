import React, { useEffect, useState } from 'react'

function useFetchData() {


  const [displayList, setDisplayList1] = useState([])
  const [displayList2, setDisplayList2] = useState([])
  console.log('displayList', displayList)
  console.log('displayList2', displayList2)
  useEffect(() => {
    // displayList = 
    // console.log('displpaydata',x JSON.parse(displayList))

    // displayList2 = 
    // console.log('displpaydata 2', JSON.parse(displayList2))

    // if (displayList) {
    var localData = JSON.parse(localStorage.getItem('submit'))
    var localData1 = JSON.parse(localStorage.getItem('submit'))
    setDisplayList1(localData)
    console.log('parsing', localData)

    if (localData == null) {
      setDisplayList1([])
    }
    else {
      setDisplayList1(JSON.parse(localData))
    }


    // if (displayList2) {
    setDisplayList2(localData1)
    console.log('data', localData1)
    if (localData1 == null) {
      setDisplayList2([])
    }
    else {
      setDisplayList1(JSON.parse(localData1))
    }

    // }
  }, [])

  return displayList
}

export default useFetchData
